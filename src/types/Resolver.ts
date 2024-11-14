import type { SimpleVisitors } from 'acorn-walk'

type Type = 'ImportDeclaration' | 'CallExpression' | 'AwaitExpression'

type Resolver<T extends Type, S> = Exclude<SimpleVisitors<S>[T], undefined>

export type ResolveImport<State> = Resolver<'ImportDeclaration', State>

export type ResolveRequire<State> = Resolver<'CallExpression', State>

export type ResolveDynamicImport<State> = Resolver<'AwaitExpression', State>
