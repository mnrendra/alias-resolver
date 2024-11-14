import main from './main'

export type {
  Literal,
  Program,
  CallExpression,
  VariableDeclaration,
  ImportDeclaration
} from 'acorn'

export type {
  SimpleVisitors
} from 'acorn-walk'

export type {
  Aliases,
  Alias
} from '@mnrendra/types-aliases'

export type {
  Source,
  SourceType,
  ResolveImport,
  ResolveRequire,
  ResolveDynamicImport
} from './types'

export {
  main as resolveAlias
}
