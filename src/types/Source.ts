import type { Options } from 'acorn'

interface Source {
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
  type?: Options['sourceType']
}

export default Source
