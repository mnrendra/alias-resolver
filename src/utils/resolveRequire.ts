import type { SimpleVisitors } from 'acorn-walk'

import type { Aliases } from '../types'

import replaceAliases from './replaceAliases'

/**
 * Resolve `require` aliases.
 *
 * @param {string} id - Rollup plugin's transform id.
 * @param {Aliases} aliases - A list of aliases.
 *
 * @returns {CallExpression} - `acorn-walk`'s callExpression hook.
 */
const resolveRequire = <State>(
  id: string,
  aliases: Aliases
): Exclude<SimpleVisitors<State>['CallExpression'], undefined> => ({
    callee,
    arguments: sources
  }): void => {
    // Only handle if `source.value` is valid stringified code.
    if (
      callee.type === 'Identifier' &&
      callee.name === 'require' &&
      sources.length > 0
    ) {
      // Resolve all `CallExpression` sources.
      sources.forEach((source) => {
        if (
          typeof source === 'object' &&
          source !== null &&
          source.type === 'Literal' &&
          typeof source.value === 'string'
        ) {
          // Replace all aliases to relative paths.
          replaceAliases(id, source, aliases)
        }
      })
    }
  }

// Export `resolveRequire` as default value.
export default resolveRequire
