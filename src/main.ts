import type { Aliases, Source } from './types'

import { parse } from 'acorn'
import { simple } from 'acorn-walk'
import { generate } from 'escodegen'

import { ERROR_MESSAGE } from './consts'

import { resolveImport, resolveRequire } from './utils'

/**
 * A utility to resolve alias paths.
 *
 * @param {Aliases} aliases - A list of aliases.
 * @param {Source} source - An object of the source.
 */
const main = (
  aliases: Aliases,
  source: Source
): void => {
  // Try-catch to handle any errors.
  try {
    // Extract `path` and `type` from the `source`.
    const { path, type = 'script' } = source

    // Parse the `source.code` to `ast`.
    const ast = parse(source.code, { sourceType: type, ecmaVersion: 'latest' })

    // Resolve all aliases using `acorn-walk`.
    simple(ast, {
      // Resolve `import` aliases.
      ImportDeclaration: resolveImport(path, aliases),
      // Resolve `require` aliases.
      CallExpression: resolveRequire(path, aliases)
    })

    // Generate resolved aliases.
    source.code = generate(ast)
  } catch (err: any) {
    // Throw an error if the error does not pertain to the source type.
    if (!(
      typeof err === 'object' &&
      err !== null &&
      typeof err.message === 'string' &&
      err.message.split(' (')[0] === ERROR_MESSAGE
    )) {
      throw err
    }

    // If the error is regarding the source type, modify the `source.type`.
    source.type = source.type === 'script' ? 'module' : 'script'

    // Reinvoke this function to redo using modified `source.type`.
    main(aliases, source)
  }
}

// Export `main` as default value.
export default main
