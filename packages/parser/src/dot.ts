import { Graph } from '@ts-graphviz/model';
import { parse } from './parse';

/**
 * > This is an experimental API.
 * >
 * > Behavior may change in the future.
 *
 * A tag template version of the parse function.
 *
 * Returns a Graph or Digraph object based on the parsed result.
 *
 * If the given string is invalid, a SyntaxError exception will be thrown.
 *
 * ```ts
 * import { dot } from '@ts-graphviz/parser';
 *
 * const G = dot`
 *   graph {
 *     a -- b
 *   }
 * `;
 * ```
 */
export function dot(template: TemplateStringsArray, ...substitutions: unknown[]): Graph {
  return parse(String.raw(template, ...substitutions));
}
