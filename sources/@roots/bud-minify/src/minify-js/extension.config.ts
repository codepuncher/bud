import type * as Terser from 'terser'
import type {TerserOptions} from 'terser-webpack-plugin'
import type Plugin from 'terser-webpack-plugin'

import {
  Extension,
  type OptionCallback,
  type StrictPublicExtensionApi,
} from '@roots/bud-framework/extension'
import {
  bind,
  deprecated,
  options,
} from '@roots/bud-framework/extension/decorators'

/**
 * JS Minimizer configuration
 */
interface BudMinimizeJSOptions extends Plugin.BasePluginOptions {
  exclude: Plugin.BasePluginOptions[`exclude`]
  extractComments: Plugin.BasePluginOptions[`extractComments`]
  include: Plugin.BasePluginOptions[`include`]
  minify: Plugin.MinimizerImplementation<TerserOptions>
  parallel: Plugin.BasePluginOptions[`parallel`]
  terserOptions: TerserOptions & {
    compress: Terser.CompressOptions
    ecma: Terser.ECMA
    enclose: boolean | string
    format: Terser.FormatOptions
    ie8: boolean
    keep_classnames: boolean | RegExp
    keep_fnames: boolean | RegExp
    mangle: boolean | Terser.MangleOptions
    module: boolean
    nameCache: object
    parse: Terser.ParseOptions
    safari10: boolean
    sourceMap: boolean | Terser.SourceMapOptions
    toplevel: boolean
  }
}

type BudMinimizeJSPublicInterface = StrictPublicExtensionApi<
  BudMinimizeJSPublicApi,
  BudMinimizeJSOptions
> & {
  dropComments: (enable?: boolean) => BudMinimizeJSPublicApi
  dropConsole: (enable?: boolean) => BudMinimizeJSPublicApi
  dropDebugger: (enable?: boolean) => BudMinimizeJSPublicApi
  /**
   * Mangle output
   * @deprecated Use {@link BudTerser.set} instead
   *
   * @example
   * ```js
   * bud.minimize.js.set(`terserOptions.mangle`, {})
   * ```
   */
  mangle: (
    mangle: OptionCallback<
      BudMinimizeJSPublicApi['terserOptions'],
      `mangle`
    >,
  ) => BudMinimizeJSPublicApi
}

/**
 * Terser configuration
 */
@options<BudMinimizeJSOptions>({
  exclude: undefined,
  extractComments: false,
  include: undefined,
  minify: undefined,
  parallel: true,
  terserOptions: {
    compress: {
      defaults: true,
      drop_console: false,
      drop_debugger: true,
      unused: true,
    },
    ecma: `2020` as any,
    enclose: false,
    format: {
      ascii_only: true,
      comments: false,
    },
    ie8: false,
    keep_classnames: false,
    keep_fnames: false,
    mangle: {},
    module: false,
    nameCache: {},
    parse: {},
    safari10: false,
    sourceMap: false,
    toplevel: true,
  },
})
class BudMinimizeJSPublicApi
  extends Extension<BudMinimizeJSOptions>
  implements BudMinimizeJSPublicInterface
{
  /**
   * Exclude
   *
   * @see {@link https://github.com/webpack-contrib/terser-webpack-plugin#exclude}
   */
  public declare exclude: BudMinimizeJSPublicInterface['exclude']
  /**
   * extractComments value
   *
   * @see {@link https://github.com/webpack-contrib/terser-webpack-plugin#extractcomments}
   */
  public declare extractComments: BudMinimizeJSPublicInterface['extractComments']
  /**
   * Get exclude
   *
   * @see {@link https://github.com/webpack-contrib/terser-webpack-plugin#exclude}
   */
  public declare getExclude: BudMinimizeJSPublicInterface['getExclude']

  /**
   * Get extractComments
   *
   * @see {@link https://github.com/webpack-contrib/terser-webpack-plugin#extractcomments}
   */
  public declare getExtractComments: BudMinimizeJSPublicInterface['getExtractComments']
  /**
   * Get include
   *
   * @see {@link https://github.com/webpack-contrib/terser-webpack-plugin#include}
   */
  public declare getInclude: BudMinimizeJSPublicInterface['getInclude']
  /**
   * Get minify
   *
   * @see {@link https://github.com/webpack-contrib/terser-webpack-plugin#minify}
   */
  public declare getMinify: BudMinimizeJSPublicInterface['getMinify']

  /**
   * Get parallel
   *
   * @see {@link https://github.com/webpack-contrib/terser-webpack-plugin#parallel}
   */
  public declare getParallel: BudMinimizeJSPublicInterface['getParallel']
  /**
   * Get terserOptions
   *
   * @see {@link https://github.com/webpack-contrib/terser-webpack-plugin#terserOptions}
   */
  public declare getTerserOptions: BudMinimizeJSPublicInterface['getTerserOptions']
  /**
   * Set include
   *
   * @see {@link https://github.com/webpack-contrib/terser-webpack-plugin#include}
   */
  public declare include: BudMinimizeJSPublicInterface['include']

  /**
   * Value of {@link Options.minify}
   *
   * @see {@link https://github.com/webpack-contrib/terser-webpack-plugin#minify}
   */
  public declare minify: BudMinimizeJSPublicInterface['minify']
  /**
   * parallel value
   *
   * @see {@link https://github.com/webpack-contrib/terser-webpack-plugin#parallel}
   */
  public declare parallel: BudMinimizeJSPublicInterface['parallel']
  /**
   * Set exclude
   *
   * @see {@link https://github.com/webpack-contrib/terser-webpack-plugin#exclude}
   */
  public declare setExclude: BudMinimizeJSPublicInterface['setExclude']

  /**
   * Set extractComments
   *
   * @see {@link https://github.com/webpack-contrib/terser-webpack-plugin#extractcomments}
   */
  public declare setExtractComments: BudMinimizeJSPublicInterface['setExtractComments']

  /**
   * Set include
   *
   * @see {@link https://github.com/webpack-contrib/terser-webpack-plugin#include}
   */
  public declare setInclude: BudMinimizeJSPublicInterface['setInclude']

  /**
   * Set minify
   *
   * @see {@link https://github.com/webpack-contrib/terser-webpack-plugin#minify}
   */
  public declare setMinify: BudMinimizeJSPublicInterface['setMinify']

  /**
   * Set parallel
   *
   * @see {@link https://github.com/webpack-contrib/terser-webpack-plugin#parallel}
   */
  public declare setParallel: BudMinimizeJSPublicInterface['setParallel']
  /**
   * Set terserOptions
   *
   * @see {@link https://github.com/webpack-contrib/terser-webpack-plugin#terserOptions}
   */
  public declare setTerserOptions: BudMinimizeJSPublicInterface['setTerserOptions']
  /**
   * terserOptions
   *
   * @see {@link https://github.com/webpack-contrib/terser-webpack-plugin#terserOptions}
   */
  public declare terserOptions: BudMinimizeJSPublicInterface['terserOptions']

  /**
   * @deprecated Use {@link BudTerser.dropComments} instead
   */
  @deprecated(
    `bud.minimize.js`,
    `Use bud.minimize.js.dropComments instead`,
    [
      [`Drop comments`, `bud.minimize.js.dropComments()`],
      [`Preserve comments`, `bud.minimize.js.dropComments(false)`],
      [
        `Alternative (using bud.minimize.js.set)`,
        `bud.minimize.js.set('terserOptions.format.comments', true)`,
      ],
    ],
  )
  public comments(comments: boolean = true): this {
    this.set(`terserOptions.format.comments`, comments)
    return this
  }

  /**
   * @deprecated Use {@link BudTerser.dropDebugger} instead
   */
  @deprecated(
    `bud.minimize.js`,
    `Use bud.minimize.js.dropDebugger instead`,
    [
      [`Drop debugger statements`, `bud.minimize.js.dropDebugger()`],
      [
        `Preserve debugger statements`,
        `bud.minimize.js.dropDebugger(false)`,
      ],
      [
        `Alternative (using bud.minimize.js.set)`,
        `bud.minimize.js.set('terserOptions.compress.drop_debugger', true)`,
      ],
    ],
  )
  public debugger(enable: boolean = true): this {
    this.set(`terserOptions.compress.drop_debugger`, enable)
    return this
  }

  /**
   * Drop comments
   */
  @bind
  public dropComments(enable: boolean = true): this {
    this.set(`terserOptions.format.comments`, !enable)
    return this
  }

  /**
   * Drop console
   */
  @bind
  public dropConsole(enable: boolean = true): this {
    this.set(`terserOptions.compress.drop_console`, enable)
    return this
  }

  /**
   * Drop debugger statements
   */
  @bind
  public dropDebugger(enable: boolean = true): this {
    this.set(`terserOptions.compress.drop_debugger`, enable)
    return this
  }

  /**
   * Mangle output
   * @deprecated Use {@link BudTerser.set} instead
   *
   * @example
   * ```js
   * bud.minimize.js.set(`terserOptions.mangle`, {})
   * ```
   */
  @bind
  // @ts-ignore
  public mangle(
    mangle: BudMinimizeJSPublicInterface['terserOptions']['mangle'],
  ): this {
    this.set(`terserOptions.mangle`, mangle)
    return this
  }

  /**
   * @deprecated Use {@link BudTerser.set} instead
   *
   * @example
   * ```js
   * bud.minimize.js.set(`terserOptions.minify`, () => {})
   * ```
   */
  @deprecated(`bud.minimize.js`, `Use bud.minimize.js.setMinify instead`, [
    [
      `Set the minifier`,
      `bud.minimize.js.set('terserOptions.minify', () => minifier)`,
    ],
  ])
  public setMinifier(minify: any): this {
    this.set(`minify`, minify)
    return this
  }
}

export {
  type BudMinimizeJSOptions,
  BudMinimizeJSPublicApi,
  type BudMinimizeJSPublicInterface,
}
