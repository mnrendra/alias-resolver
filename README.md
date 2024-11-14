# @mnrendra/alias-resolver
A utility for resolving alias paths. If you are using `TypeScript`, we recommend using [@mnrendra/tsconfig-alias-parser](https://npmjs.com/package/@mnrendra/tsconfig-alias-parser) to automatically parse `tsconfig.json` into [aliases](https://npmjs.com/package/@mnrendra/types-aliases).

## Features
- ✅ Resolves alias paths for `require` (CommonJS)
- ✅ Resolves alias paths for `import` (ES Modules)
- ✅ Resolves alias paths for `await import` (dynamic imports)

## Install
```bash
npm i @mnrendra/alias-resolver
```

## Usage

Using `CommonJS`:
```javascript
const { normalize, resolve } = require('node:path')
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

const code = `
const foo = require("@/foo");
const { mocks } = require("@tests");
const dynamic = async () => {
  await import("@/abc")
};
`

const source = {
  path: normalize(resolve('./src/main/index.js')),
  code,
  type: 'script'
}

resolveAlias(source, aliases)

console.log(source.code) // Output:
/*
const foo = require('../foo');
const {
    mocks
} = require('../../tests');
const dynamic = async () => {
    await import("../abc")
};
*/
```

Using `ES Module`:
```javascript
import { normalize, resolve } from 'node:path'
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

const code = `
import foo from "@/foo";
import { mocks } from "@tests";
const dynamic = async () => {
  await import("@/abc")
};
`

const source = {
  path: normalize(resolve('./src/main/index.mjs')),
  code,
  type: 'module'
}

resolveAlias(source, aliases)

console.log(source.code) // Output:
/*
import foo from '../foo';
import {
    mocks
} from '../../tests;
const dynamic = async () => {
    await import("../abc")
};
*/
```

Using `TypeScript` and implement `@mnrendra/tsconfig-alias-parser`:
```typescript
import type { Aliases, Source } from  '@mnrendra/alias-resolver'

import { normalize, resolve } from 'node:path'
import { resolveAlias } from  '@mnrendra/alias-resolver'
import { parseTSConfigAliasSync } from '@mnrendra/tsconfig-alias-parser'

const aliases: Aliases = parseTSConfigAliasSync() // It will read from `tsconfig.json` automatically.

const code = `
import foo from "@/foo";
import { mocks } from "@tests";
const dynamic = async () => {
  await import("@/abc")
};
`

const source: Source = {
  path: normalize(resolve('./src/main/index.mjs')),
  code,
  type: 'module'
}

resolveAlias(source, aliases)

console.log(source.code) // Output:
/*
import foo from '../foo';
import {
    mocks
} from '../../tests;
const dynamic = async () => {
    await import("../abc")
};
*/
```

## Types
```typescript
import type {
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
} from '@mnrendra/alias-resolver'
```

## License
[MIT](https://github.com/mnrendra/alias-resolver/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
