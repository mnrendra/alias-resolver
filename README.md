# @mnrendra/alias-resolver
A utility to resolve alias paths.<br/>
If you are using `TypeScript`, we recommend using [@mnrendra/tsconfig-alias-parser](https://npmjs.com/package/@mnrendra/tsconfig-alias-parser) to automatically parse `tsconfig.json` into [aliases](https://npmjs.com/package/@mnrendra/types-aliases).

## Install
```bash
npm i @mnrendra/alias-resolver
```

## Usage

Using `CommonJS`:
```javascript
const { resolveAlias } = require('@mnrendra/alias-resolver')

const aliases = [
  {
    'alias': '@',
    'path': './src'
  },
  {
    'alias': '@tests',
    'path': './tests'
  }
]

const source = {
  path: '[absolute-path]/[project-directory]/src/main/index.js',
  code: 'const foo = require("@/foo");const { mocks } = require("@tests")',
  type: 'script'
}

resolveAlias(source, aliases)

console.log(source.code) // Output: const foo = require('../foo');const {mocks} = require('../../tests')
```

Using `ES Module`:
```javascript
import { resolveAlias } from  '@mnrendra/alias-resolver'

const aliases = [
  {
    'alias': '@',
    'path': './src'
  },
  {
    'alias': '@tests',
    'path': './tests'
  }
]

const source = {
  path: '[absolute-path]/[project-directory]/src/main/index.mjs',
  code: 'import foo from "@/foo";import { mocks } from "@tests"',
  type: 'module'
}

resolveAlias(source, aliases)

console.log(source.code) // Output: import foo from '../foo';import { mocks } from '../../tests'
```

Using `TypeScript` and implement `@mnrendra/tsconfig-alias-parser`:
```typescript
import type { Aliases, Source } from  '@mnrendra/alias-resolver'

import { resolveAlias } from  '@mnrendra/alias-resolver'
import { parseTSConfigAliasSync } from '@mnrendra/tsconfig-alias-parser'

const aliases: Aliases = parseTSConfigAliasSync() // It will read from `tsconfig.json` automatically.

const source: Source = {
  path: '[absolute-path]/[project-directory]/src/main/index.mjs',
  code: 'import foo from "@/foo";import { mocks } from "@tests"',
  type: 'module'
}

resolveAlias(source, aliases)

console.log(source.code) // Output: import foo from '../foo';import { mocks } from '../../tests'
```

## Types
```typescript
import type {
  // @mnrendra/types-aliases
  Aliases,
  Alias,
  // @mnrendra/alias-resolver
  Source,
  SourceType,
  ResolveImport,
  ResolveRequire,
  // acorn
  Literal,
  Program,
  CallExpression,
  VariableDeclaration,
  ImportDeclaration,
  // acorn-walk
  SimpleVisitors
} from '@mnrendra/alias-resolver'
```

## License
[MIT](https://github.com/mnrendra/alias-resolver/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
