import type { Literal } from 'acorn'

import type { Aliases } from '../types'

import { dirname, join, relative, resolve, sep } from 'node:path'

/**
 * Replace all aliases with relative paths.
 *
 * @param {string} id - Rollup plugin's transform id.
 * @param {Literal} source - `acorn`'s literal.
 * @param {Aliases} aliases - A list of aliases.
 */
const replaceAliases = (
  id: string,
  source: Literal,
  aliases: Aliases
): void => {
  // Replace all aliases with relative paths.
  aliases.forEach(({ alias, path }) => {
    // Extract the source value.
    const { value } = source

    // Only handle if the type of the value is a string.
    if (typeof value === 'string') {
      // Resolve value.
      const resolvedValue = value.endsWith(sep) ? value : value + sep

      // Resolve alias.
      const resolvedAlias = alias.endsWith(sep) ? alias : alias + sep

      // Only handle if `resolvedValue` starts with `resolvedAlias`.
      if (resolvedValue.startsWith(resolvedAlias)) {
        // Get the absolute path of the origin path.
        const absoluteOrigin = resolve(id)

        // Define the current directory according to the OS.
        const currentDir = '.' + sep

        // Get the target path.
        const target = currentDir + join(path, value.replace(alias, currentDir))

        // Get the absolute path of the target path.
        const absoluteTarget = resolve(target)

        // Generate the relative path from the origin path to the target path.
        const relativePath = relative(dirname(absoluteOrigin), absoluteTarget)

        // Replace the `source.value` with the relative path.
        source.value = relativePath
      }
    }
  })
}

// Export `replaceAliases` as default value.
export default replaceAliases
