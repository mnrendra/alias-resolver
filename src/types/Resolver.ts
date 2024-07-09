import type { SimpleVisitors } from '.'

type Type = 'ImportDeclaration' | 'CallExpression'

type Resolver<T extends Type, S> = Exclude<SimpleVisitors<S>[T], undefined>

export type ResolveImport<State> = Resolver<'ImportDeclaration', State>

export type ResolveRequire<State> = Resolver<'CallExpression', State>
