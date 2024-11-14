import type { Literal } from 'acorn'
import type { Aliases } from '@mnrendra/types-aliases'

import { dirname, join, normalize, relative, resolve } from 'node:path'

import validateRelativePath from './validateRelativePath'

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
      const resolvedValue = value.endsWith('/') ? value : value + '/'

      // Resolve alias.
      const resolvedAlias = alias.endsWith('/') ? alias : alias + '/'

      // Only handle if `resolvedValue` starts with `resolvedAlias`.
      if (resolvedValue.startsWith(resolvedAlias)) {
        // Get the absolute path of the origin path.
        const absoluteOrigin = normalize(resolve(id))

        // Get the target path.
        const target = './' + join(path, value.replace(alias, './'))

        // Get the absolute path of the target path.
        const absoluteTarget = normalize(resolve(target))

        // Get the directory path of the `absoluteOrigin`.
        const absoluteOriginDir = dirname(absoluteOrigin)

        // Generate the relative path from the origin path to the target path.
        const relativePath = relative(absoluteOriginDir, absoluteTarget)

        // Validate relative path.
        const validRelativePath = validateRelativePath(relativePath)

        // Replace the `source.value` with the `validRelativePath`.
        source.value = validRelativePath
      }
    }
  })
}

export default replaceAliases
