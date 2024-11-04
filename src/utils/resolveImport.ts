import type { Aliases, ResolveImport } from '../types'

import replaceAliases from './replaceAliases'

/**
 * Resolve `import` aliases.
 *
 * @param {string} id - Rollup plugin's transform id.
 * @param {Aliases} aliases - A list of aliases.
 *
 * @returns {ImportDeclaration} - `acorn-walk`'s ImportDeclaration hook.
 */
const resolveImport = <State>(
  id: string,
  aliases: Aliases
): ResolveImport<State> => ({
    source
  }): void => {
    // Only handle if `source.value` is valid stringified code.
    if (
      typeof source === 'object' &&
      source !== null &&
      source.type === 'Literal' &&
      typeof source.value === 'string'
    ) {
      // Replace all aliases to relative paths.
      replaceAliases(id, source, aliases)
    }
  }

// Export `resolveImport` as default value.
export default resolveImport
