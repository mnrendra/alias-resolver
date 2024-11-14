import type { Aliases } from '@mnrendra/types-aliases'

import type { ResolveImport } from '../types'

import replaceAliases from './replaceAliases'

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

export default resolveImport
