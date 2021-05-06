import { RootClusterAttributes } from './types';
import { Digraph, Graph, RootCluster } from './model/root-clusters';
import { Parser } from './parser';

/**
 * Type indicating that it is a constructor of T.
 * @hidden
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Type<T> = new (...args: any[]) => T;

interface CreateRootFunction<R extends RootCluster> {
  (id?: string, attributes?: RootClusterAttributes, callback?: (g: R) => void): R;
  (attributes?: RootClusterAttributes, callback?: (g: R) => void): R;
  (id?: string, callback?: (g: R) => void): R;
  (callback?: (g: R) => void): R;
}

/** @hidden */
function builder<R extends RootCluster>(cls: Type<R>, strictMode = false): CreateRootFunction<R> {
  function createRoot(id?: string, attributes?: RootClusterAttributes, callback?: (g: R) => void): R;
  function createRoot(attributes?: RootClusterAttributes, callback?: (g: R) => void): R;
  function createRoot(id?: string, callback?: (g: R) => void): R;
  function createRoot(callback?: (g: R) => void): R;
  function createRoot(...args: unknown[]): R {
    const id = args.find((arg): arg is string => typeof arg === 'string');
    const attributes = args.find((arg): arg is RootClusterAttributes => typeof arg === 'object');
    const callback = args.find((arg): arg is (g: R) => void => typeof arg === 'function');
    const g = new cls(id, attributes, strictMode);
    if (typeof callback === 'function') {
      callback(g);
    }
    return g;
  }
  return createRoot;
}

/** API for creating directional graph objects. */
export const digraph = builder(Digraph);

/** API for creating omnidirectional graph objects. */
export const graph = builder(Graph);

/** Provides a strict mode API. */
export const strict = {
  /** API for creating directional graph objects in strict mode. */
  digraph: builder(Digraph, true),
  /** API for creating omnidirectional graph objects in strict mode. */
  graph: builder(Graph, true),
};

/** @hidden */
const parser = new Parser();

/**
 * Parse a character string written in dot language and convert it to a model.
 *
 * @param dot string written in the dot language.
 *
 * @example
 *
 * ```ts
 * const G = parse(`
 * digraph hoge {
 *   a -> b;
 * }`);
 * console.log(toDot(G));
 * ```
 */
export const parse: (dot: string) => RootCluster = parser.parse.bind(parser);

export const dot: (template: TemplateStringsArray, ...substitutions: unknown[]) => RootCluster = parser.dot.bind(
  parser,
);
