# @mnrendra/alias-resolver
A utility to resolve alias paths.

## Install
```bash
npm i @mnrendra/alias-resolver
```

## Usage

Using `CommonJS`:
```javascript
const resolveAlias = require('@mnrendra/alias-resolver')

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

resolveAlias(aliases, source)

console.log(source.code) // Output: const foo = require('../foo');const {mocks} = require('../../tests')
```

Using `ES Module`:
```javascript
import resolveAlias from  '@mnrendra/alias-resolver'

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

resolveAlias(aliases, source)

console.log(source.code) // Output: import foo from '../foo';import { mocks } from '../../tests'
```

# Types
```typescript
import type {
  Aliases,
  Source
} from '@mnrendra/alias-resolver'
```

## License
[MIT](https://github.com/mnrendra/alias-resolver/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
