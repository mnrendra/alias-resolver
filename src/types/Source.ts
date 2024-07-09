import type { Options } from 'acorn'

export type SourceType = Options['sourceType']

/**
 * `@mnrendra/alias-resolver` source object.
 *
 * @see https://npmjs.com/package/@mnrendra/alias-resolver
 */
export interface Source {
  /**
   * The absolute path of the code.
   */
  path: string

  /**
   * A stringified code.
   */
  code: string

  /**
   * The source code type, either `'script'` or `'module'`.
   *
   * @default 'script'
   */
  type?: SourceType
}
