import type { Aliases } from '@mnrendra/types-aliases'

import type { ResolveRequire } from '../types'

import replaceAliases from './replaceAliases'

const resolveRequire = <State>(
  id: string,
  aliases: Aliases
): ResolveRequire<State> => ({
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

export default resolveRequire
