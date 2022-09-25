import { createModelsContext } from '#lib/common';
import { defaultPlugins } from './plugins/index.js';
import {
  ASTToModel,
  ToModelConvertableASTNode,
  ConvertToModelContext,
  ConvertToModelOptions,
  ConvertToModelPlugin,
} from './types.js';

/**
 * @group Convert AST to Model
 * @alpha
 */
export class ToModelConverter {
  /** @hidden */
  protected plugins: ConvertToModelPlugin<ToModelConvertableASTNode>[] = [...defaultPlugins];

  constructor(private options: ConvertToModelOptions = {}) {}

  /**
   * Convert AST to Model.
   *
   * @param ast AST node.
   * @alpha
   */
  public convert<T extends ToModelConvertableASTNode>(ast: T): ASTToModel<T> {
    const plugins = [...this.plugins];
    const context: ConvertToModelContext = {
      models: createModelsContext(this.options.models ?? {}),
      convert<U extends ToModelConvertableASTNode>(m: U): ASTToModel<U> {
        for (const plugin of plugins) {
          if (plugin.match(m)) {
            return plugin.convert(context, m) as ASTToModel<U>;
          }
        }
        throw Error();
      },
    };
    return context.convert(ast);
  }
}
