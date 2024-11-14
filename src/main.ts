import type { Aliases } from '@mnrendra/types-aliases'

import type { Source } from './types'

import { parse } from 'acorn'
import { simple } from 'acorn-walk'
import { generate } from 'escodegen'

import { resolveImport, resolveRequire, resolveDynamicImport } from './utils'

/**
 * A utility to resolve alias paths.
 *
 * @param {Source} source - An object of the source.
 * @param {Aliases} [aliases] - A list of aliases (optional).
 *
 * @see https://github.com/mnrendra/alias-resolver#readme
 */
const main = (
  source: Source,
  aliases: Aliases = []
): void => {
  // Try-catch to handle any errors.
  try {
    source.type = source.type ?? 'script'

    // Extract `path` and `type` from the `source`.
    const { path, type } = source

    // Parse the `source.code` to `ast`.
    const ast = parse(source.code, { sourceType: type, ecmaVersion: 'latest' })

    // Resolve all aliases using `acorn-walk`.
    simple(ast, {
      // Resolve `import` aliases.
      ImportDeclaration: resolveImport(path, aliases),
      // Resolve `require` aliases.
      CallExpression: resolveRequire(path, aliases),
      // Resolve `await import` aliases.
      AwaitExpression: resolveDynamicImport(path, aliases)
    })

    // Generate resolved aliases.
    source.code = generate(ast)
  } catch (error) {
    if (typeof error === 'object' && error !== null && 'message' in error && typeof error.message === 'string') {
      if (`${error.message}`.includes("'import' and 'export' may appear only with 'sourceType: module'")) {
        source.type = source.type === 'script' ? 'module' : 'script'
        main(source, aliases)
      } else if (`${error.message}`.includes('Unexpected token')) {
        throw new Error('Your source code contains an \'Unexpected token\' error or might be in `TypeScript` format, so it cannot be parsed. This module can only parse CommonJS or ESModule formats.')
      } else if (error instanceof Error) {
        throw error
      } else {
        console.error(error)
        throw new Error('Unknown error!')
      }
    } else {
      throw error
    }
  }
}

export default main
