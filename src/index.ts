import main from './main'

export type {
  // acorn
  Literal,
  Program,
  CallExpression,
  VariableDeclaration,
  ImportDeclaration,
  // acorn-walk
  SimpleVisitors,
  // @mnrendra/types-aliases
  Aliases,
  Alias,
  // @mnrendra/alias-resolver
  Source,
  SourceType,
  ResolveImport,
  ResolveRequire,
  ResolveDynamicImport
} from './types'

export {
  main as resolveAlias
}
