import type {
  ASTNode,
  Attribute,
  Attributes,
  Comment,
  Dot,
  Edge,
  Graph,
  Literal,
  Node,
  NodeRef,
  NodeRefGroup,
  Subgraph,
} from '@ts-graphviz/dot-ast';
import type { StringifyOption } from './types.js';

export class Renderer {
  protected directed: boolean;

  protected indentSize: number;

  constructor({ directed = true, indentSize = 2 }: StringifyOption = {}) {
    this.directed = directed;
    this.indentSize = indentSize;
  }

  protected indent(line: string): string {
    return ' '.repeat(this.indentSize) + line;
  }

  // eslint-disable-next-line class-methods-use-this
  protected pad(pad: string): (l: string) => string {
    return (l: string) => pad + l;
  }

  protected printAttribute(ast: Attribute): string {
    return `${this.render(ast.key)} = ${this.render(ast.value)};`;
  }

  protected printAttributes(ast: Attributes): string {
    return ast.body.length === 0
      ? `${ast.kind};`
      : `${ast.kind} [\n${ast.body.map(this.render.bind(this)).map(this.indent.bind(this)).join('\n')}\n];`;
  }

  protected printComment(ast: Comment): string {
    switch (ast.kind) {
      case 'Block':
        return `/**\n${ast.value.split('\n').map(this.pad(' * ')).join('\n')}\n */`;
      case 'Macro':
        return ast.value.split('\n').map(this.pad('# ')).join('\n');
      case 'Slash':
      default:
        return ast.value.split('\n').map(this.pad('// ')).join('\n');
    }
  }

  protected printDot(ast: Dot): string {
    return ast.body.map(this.render.bind(this)).join('\n');
  }

  protected printEdge(ast: Edge): string {
    const targets = ast.targets.map(this.render.bind(this)).join(this.directed ? ' -> ' : ' -- ');
    return ast.body.length === 0
      ? `${targets};`
      : `${targets} [\n${ast.body.map(this.render.bind(this)).map(this.indent.bind(this)).join('\n')}\n];`;
  }

  protected printNode(ast: Node): string {
    return ast.body.length === 0
      ? `${this.render(ast.id)};`
      : `${this.render(ast.id)} [\n${ast.body
          .map(this.render.bind(this))
          .map(this.indent.bind(this))
          .join('\n')}\n];`;
  }

  protected printNodeRef(ast: NodeRef): string {
    return [
      this.render(ast.id),
      ast.port ? this.render(ast.port) : null,
      ast.compass ? this.render(ast.compass) : null,
    ]
      .filter((v) => v !== null)
      .join(':');
  }

  protected printNodeRefGroup(ast: NodeRefGroup): string {
    return `{${ast.body.map(this.render.bind(this)).join(' ')}}`;
  }

  protected printGroup(ast: Graph): string {
    return [
      ast.strict ? 'strict' : null,
      ast.directed ? 'digraph' : 'graph',
      ast.id ? this.render(ast.id) : null,
      ast.body.length === 0
        ? '{}'
        : `{\n${ast.body.map(this.render.bind(this)).map(this.indent.bind(this)).join('\n')}\n}`,
    ]
      .filter((v) => v !== null)
      .join(' ');
  }

  protected printSubgraph(ast: Subgraph): string {
    return [
      'subgraph',
      ast.id ? this.render(ast.id) : null,
      ast.body.length === 0
        ? '{}'
        : `{\n${ast.body.map(this.render.bind(this)).map(this.indent.bind(this)).join('\n')}\n}`,
    ]
      .filter((v) => v !== null)
      .join(' ');
  }

  // eslint-disable-next-line class-methods-use-this
  protected printLiteral(ast: Literal): string {
    switch (ast.quoted) {
      case 'html':
        return `<${ast.value}>`;
      case true:
        return `"${ast.value}"`;
      case false:
      default:
        return ast.value;
    }
  }

  // eslint-disable-next-line consistent-return
  public render(ast: ASTNode): string {
    // eslint-disable-next-line default-case
    switch (ast.type) {
      case 'Attribute':
        return this.printAttribute(ast);
      case 'Attributes':
        return this.printAttributes(ast);
      case 'Comment':
        return this.printComment(ast);
      case 'Dot':
        return this.printDot(ast);
      case 'Edge':
        return this.printEdge(ast);
      case 'Node':
        return this.printNode(ast);
      case 'NodeRef':
        return this.printNodeRef(ast);
      case 'NodeRefGroup':
        return this.printNodeRefGroup(ast);
      case 'Graph':
        this.directed = ast.directed;
        return this.printGroup(ast);
      case 'Subgraph':
        return this.printSubgraph(ast);
      case 'Literal':
        return this.printLiteral(ast);
    }
  }
}
