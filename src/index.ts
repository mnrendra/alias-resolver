import main from './main'

export type {
  Aliases,
  Alias,
  Source,
  SourceType,
  ResolveImport,
  ResolveRequire,
  Literal,
  Program,
  CallExpression,
  VariableDeclaration,
  ImportDeclaration,
  SimpleVisitors
} from './types'

export {
  main as resolveAlias
}
