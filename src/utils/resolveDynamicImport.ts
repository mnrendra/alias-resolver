import type { Aliases, ResolveDynamicImport } from '../types'

import replaceAliases from './replaceAliases'

/**
 * Resolve `await import` aliases.
 *
 * @param {string} id - Rollup plugin's transform id.
 * @param {Aliases} aliases - A list of aliases.
 *
 * @returns {AwaitExpression} - `acorn-walk`'s AwaitExpression hook.
 */
const resolveDynamicImport = <State>(
  id: string,
  aliases: Aliases
): ResolveDynamicImport<State> => ({
    argument
  }): void => {
    // Only handle if `argument.type` is `'ImportExpression'`.
    if (argument.type === 'ImportExpression') {
      // Extract `source` from `argument`.
      const { source } = argument
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
  }

// Export `resolveDynamicImport` as default value.
export default resolveDynamicImport
