import {
  Attribute,
  Attributes,
  NodeRef,
  Node,
  Edge,
  Comment,
  Dot,
  NodeRefGroup,
  Subgraph,
  Literal,
  ASTNode,
  Graph,
} from '@ts-graphviz/dot-ast';

export interface StringifyOption {
  directed?: boolean;
  indentSize?: number;
}

class Compiler {
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
    return `${this.stringify(ast.key)} = ${this.stringify(ast.value)};`;
  }

  protected printAttributes(ast: Attributes): string {
    return ast.body.length === 0
      ? `${ast.kind};`
      : `${ast.kind} [\n${ast.body.map(this.stringify.bind(this)).map(this.indent.bind(this)).join('\n')}\n];`;
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
    return ast.body.map(this.stringify.bind(this)).join('\n');
  }

  protected printEdge(ast: Edge): string {
    const targets = ast.targets.map(this.stringify.bind(this)).join(this.directed ? ' -> ' : ' -- ');
    return ast.body.length === 0
      ? `${targets};`
      : `${targets} [\n${ast.body.map(this.stringify.bind(this)).map(this.indent.bind(this)).join('\n')}\n];`;
  }

  protected printNode(ast: Node): string {
    return ast.body.length === 0
      ? `${this.stringify(ast.id)};`
      : `${this.stringify(ast.id)} [\n${ast.body
          .map(this.stringify.bind(this))
          .map(this.indent.bind(this))
          .join('\n')}\n];`;
  }

  protected printNodeRef(ast: NodeRef): string {
    return [
      this.stringify(ast.id),
      ast.port ? this.stringify(ast.port) : null,
      ast.compass ? this.stringify(ast.compass) : null,
    ]
      .filter((v) => v !== null)
      .join(':');
  }

  protected printNodeRefGroup(ast: NodeRefGroup): string {
    return `{${ast.body.map(this.stringify.bind(this)).join(' ')}}`;
  }

  protected printGroup(ast: Graph): string {
    return [
      ast.strict ? 'strict' : null,
      ast.directed ? 'digraph' : 'graph',
      ast.id ? this.stringify(ast.id) : null,
      ast.body.length === 0
        ? '{}'
        : `{\n${ast.body.map(this.stringify.bind(this)).map(this.indent.bind(this)).join('\n')}\n}`,
    ]
      .filter((v) => v !== null)
      .join(' ');
  }

  protected printSubgraph(ast: Subgraph): string {
    return [
      'subgraph',
      ast.id ? this.stringify(ast.id) : null,
      ast.body.length === 0
        ? '{}'
        : `{\n${ast.body.map(this.stringify.bind(this)).map(this.indent.bind(this)).join('\n')}\n}`,
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
  public stringify(ast: ASTNode): string {
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

/**
 * Stringify Graphviz AST Node.
 *
 * @param ast Graphviz AST node.
 * @returns DOT language string.
 */
export function stringify(ast: ASTNode, options?: StringifyOption): string {
  return new Compiler(options).stringify(ast);
}
