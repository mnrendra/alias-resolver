import type { Aliases } from '@mnrendra/types-aliases'

import type { ResolveDynamicImport } from '../types'

import replaceAliases from './replaceAliases'

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

export default resolveDynamicImport
