import { normalize, resolve } from 'node:path'

import aliases from '@tests/dummies/aliases'
import * as importsDummy from '@tests/dummies/imports'
import * as requiresDummy from '@tests/dummies/requires'

import {
  validateRelativePath,
  replaceAliases,
  resolveImport,
  resolveRequire
} from '.'

describe('Test all utils:', () => {
  describe('Test `validateRelativePath` util:', () => {
    const foo = normalize(resolve('foo'))

    it('Should return `./foo` when given `foo`!', () => {
      const received = validateRelativePath('foo')
      const expected = './foo'
      expect(received).toBe(expected)
    })

    it('Should return `./foo` when given `./foo`!', () => {
      const received = validateRelativePath('./foo')
      const expected = './foo'
      expect(received).toBe(expected)
    })

    it('Should return `../foo` when given `../foo`!', () => {
      const received = validateRelativePath('../foo')
      const expected = '../foo'
      expect(received).toBe(expected)
    })

    it(`Should return \`${foo}\` when given \`${foo}\`!`, () => {
      const received = validateRelativePath(foo)
      const expected = foo
      expect(received).toBe(expected)
    })
  })

  describe('Test `replaceAliases` util:', () => {
    describe('Replace all `import` aliases:', () => {
      const { literal, case1, case2 } = importsDummy

      describe(`From \`${case1.path}\`:`, () => {
        const { path } = case1

        it('Should resolve `@utils` to `./utils` when the path of `@utils` is `./src/utils`!', () => {
          const source = { ...literal, value: '@utils' }

          replaceAliases(path, source, [{ alias: '@utils', path: './src/utils' }])

          const received = source.value
          const expected = './utils'

          expect(received).toBe(expected)
        })
      })

      describe(`From \`${case2.path}\`:`, () => {
        const { path } = case2

        it('Should resolve `@consts` to `../consts` when the path of `@consts` is `./src/consts`!', () => {
          const source = { ...literal, value: '@consts' }

          replaceAliases(path, source, [{ alias: '@consts', path: './src/consts' }])

          const received = source.value
          const expected = '../consts'

          expect(received).toBe(expected)
        })

        it('Should resolve `@consts/urls` to `../consts/urls` when the path of `@consts` is `./src/consts`!', () => {
          const source = { ...literal, value: '@consts/urls' }

          replaceAliases(path, source, [{ alias: '@consts', path: './src/consts' }])

          const received = source.value
          const expected = '../consts/urls'

          expect(received).toBe(expected)
        })

        it('Should resolve `@consts/` to `../consts` when the path of `@consts` is `./src/consts`!', () => {
          const source = { ...literal, value: '@consts/' }

          replaceAliases(path, source, [{ alias: '@consts', path: './src/consts' }])

          const received = source.value
          const expected = '../consts'

          expect(received).toBe(expected)
        })

        it('Should resolve `@consts/urls//` to `../consts/urls` when the path of `@consts` is `./src/consts`!', () => {
          const source = { ...literal, value: '@consts/urls//' }

          replaceAliases(path, source, [{ alias: '@consts', path: './src/consts' }])

          const received = source.value
          const expected = '../consts/urls'

          expect(received).toBe(expected)
        })

        it('Should resolve `@utils//` to `../utils` when the path of `@utils` is `./src/utils`!', () => {
          const source = { ...literal, value: '@utils//' }

          replaceAliases(path, source, [{ alias: '@utils', path: './src/utils' }])

          const received = source.value
          const expected = '../utils'

          expect(received).toBe(expected)
        })

        it('Should resolve `@utils/logs/info//` to `../utils/logs/info` when the path of `@utils` is `./src/utils`!', () => {
          const source = { ...literal, value: '@utils/logs/info//' }

          replaceAliases(path, source, [{ alias: '@utils', path: './src/utils' }])

          const received = source.value
          const expected = '../utils/logs/info'

          expect(received).toBe(expected)
        })

        it('Should resolve `@utils/logs/info` to `../utils/logs/info` when the path of `@utils` is `./src/utils/`!', () => {
          const source = { ...literal, value: '@utils/logs/info' }

          replaceAliases(path, source, [{ alias: '@utils/', path: './src/utils/' }])

          const received = source.value
          const expected = '../utils/logs/info'

          expect(received).toBe(expected)
        })

        it('Should resolve `../share/services` to `../share/services` when no alias matches!', () => {
          const source = { ...literal, value: '../share/services' }

          replaceAliases(path, source, [])

          const received = source.value
          const expected = '../share/services'

          expect(received).toBe(expected)
        })

        it('Should resolve `../share` to `../share` when no alias matches!', () => {
          const source = { ...literal, value: '../share' }

          replaceAliases(path, source, [])

          const received = source.value
          const expected = '../share'

          expect(received).toBe(expected)
        })

        it('Should resolve `@/share` to `../share` when the path of `@` is `./src`!', () => {
          const source = { ...literal, value: '@/share' }

          replaceAliases(path, source, [{ alias: '@', path: './src' }])

          const received = source.value
          const expected = '../share'

          expect(received).toBe(expected)
        })

        it('Should resolve `@/share/services` to `../share/services` when the path of `@` is `./src`!', () => {
          const source = { ...literal, value: '@/share/services' }

          replaceAliases(path, source, [{ alias: '@', path: './src' }])

          const received = source.value
          const expected = '../share/services'

          expect(received).toBe(expected)
        })

        it('Should resolve `@tests` to `../../tests` when the path of `@tests` is `./tests`!', () => {
          const source = { ...literal, value: '@tests' }

          replaceAliases(path, source, [{ alias: '@tests', path: './tests' }])

          const received = source.value
          const expected = '../../tests'

          expect(received).toBe(expected)
        })

        it('Should resolve `@tests/mocks` to `../../tests/mocks` when the path of `@tests` is `./tests`!', () => {
          const source = { ...literal, value: '@tests/mocks' }

          replaceAliases(path, source, [{ alias: '@tests', path: './tests' }])

          const received = source.value
          const expected = '../../tests/mocks'

          expect(received).toBe(expected)
        })
      })
    })

    describe('Replace all `require` aliases:', () => {
      const { literal, case1, case2 } = requiresDummy

      describe(`From \`${case1.path}\`:`, () => {
        const { path } = case1

        it('Should resolve `@utils` to `./utils` when the path of `@utils` is `./src/utils`!', () => {
          const source = { ...literal, value: '@utils' }

          replaceAliases(path, source, [{ alias: '@utils', path: './src/utils' }])

          const received = source.value
          const expected = './utils'

          expect(received).toBe(expected)
        })
      })

      describe(`From \`${case2.path}\`:`, () => {
        const { path } = case2

        it('Should resolve `@consts` to `../consts` when the path of `@consts` is `./src/consts`!', () => {
          const source = { ...literal, value: '@consts' }

          replaceAliases(path, source, [{ alias: '@consts', path: './src/consts' }])

          const received = source.value
          const expected = '../consts'

          expect(received).toBe(expected)
        })

        it('Should resolve `@consts/urls` to `../consts/urls` when the path of `@consts` is `./src/consts`!', () => {
          const source = { ...literal, value: '@consts/urls' }

          replaceAliases(path, source, [{ alias: '@consts', path: './src/consts' }])

          const received = source.value
          const expected = '../consts/urls'

          expect(received).toBe(expected)
        })

        it('Should resolve `@consts/` to `../consts` when the path of `@consts` is `./src/consts`!', () => {
          const source = { ...literal, value: '@consts/' }

          replaceAliases(path, source, [{ alias: '@consts', path: './src/consts' }])

          const received = source.value
          const expected = '../consts'

          expect(received).toBe(expected)
        })

        it('Should resolve `@consts/urls//` to `../consts/urls` when the path of `@consts` is `./src/consts`!', () => {
          const source = { ...literal, value: '@consts/urls//' }

          replaceAliases(path, source, [{ alias: '@consts', path: './src/consts' }])

          const received = source.value
          const expected = '../consts/urls'

          expect(received).toBe(expected)
        })

        it('Should resolve `@utils` to `../utils` when the path of `@utils` is `./src/utils`!', () => {
          const source = { ...literal, value: '@utils' }

          replaceAliases(path, source, [{ alias: '@utils', path: './src/utils' }])

          const received = source.value
          const expected = '../utils'

          expect(received).toBe(expected)
        })

        it('Should resolve `@utils/logs/info` to `../utils/logs/info` when the path of `@utils` is `./src/utils`!', () => {
          const source = { ...literal, value: '@utils/logs/info' }

          replaceAliases(path, source, [{ alias: '@utils', path: './src/utils' }])

          const received = source.value
          const expected = '../utils/logs/info'

          expect(received).toBe(expected)
        })

        it('Should resolve `@utils/logs/info//` to `../utils/logs/info` when the path of `@utils` is `./src/utils/`!', () => {
          const source = { ...literal, value: '@utils/logs/info//' }

          replaceAliases(path, source, [{ alias: '@utils/', path: './src/utils/' }])

          const received = source.value
          const expected = '../utils/logs/info'

          expect(received).toBe(expected)
        })

        it('Should resolve `../share/services` to `../share/services` when no alias matches!', () => {
          const source = { ...literal, value: '../share/services' }

          replaceAliases(path, source, [])

          const received = source.value
          const expected = '../share/services'

          expect(received).toBe(expected)
        })

        it('Should resolve `../share` to `../share` when no alias matches!', () => {
          const source = { ...literal, value: '../share' }

          replaceAliases(path, source, [])

          const received = source.value
          const expected = '../share'

          expect(received).toBe(expected)
        })

        it('Should resolve `@/share` to `../share` when the path of `@` is `./src`!', () => {
          const source = { ...literal, value: '@/share' }

          replaceAliases(path, source, [{ alias: '@', path: './src' }])

          const received = source.value
          const expected = '../share'

          expect(received).toBe(expected)
        })

        it('Should resolve `@/share/services` to `../share/services` when the path of `@` is `./src`!', () => {
          const source = { ...literal, value: '@/share/services' }

          replaceAliases(path, source, [{ alias: '@', path: './src' }])

          const received = source.value
          const expected = '../share/services'

          expect(received).toBe(expected)
        })

        it('Should resolve `@tests` to `../../tests` when the path of `@tests` is `./tests`!', () => {
          const source = { ...literal, value: '@tests' }

          replaceAliases(path, source, [{ alias: '@tests', path: './tests' }])

          const received = source.value
          const expected = '../../tests'

          expect(received).toBe(expected)
        })

        it('Should resolve `@tests/mocks` to `../../tests/mocks` when the path of `@tests` is `./tests`!', () => {
          const source = { ...literal, value: '@tests/mocks' }

          replaceAliases(path, source, [{ alias: '@tests', path: './tests' }])

          const received = source.value
          const expected = '../../tests/mocks'

          expect(received).toBe(expected)
        })
      })
    })
  })

  describe('Test `resolveImport` util:', () => {
    const { getBody, case1, case2 } = importsDummy

    describe(`Test \`resolveImport\` to resolve \`import\` aliases from \`${case1.path}\`:`, () => {
      const { path } = case1

      it('Should resolve `@consts` to `./consts` when the path of `@consts` is `./src/consts`!', () => {
        const { body, source } = getBody(0)

        resolveImport(path, aliases)(body, '')

        const received = source.value
        const expected = './consts'

        expect(received).toBe(expected)
      })
    })

    describe(`Test \`resolveImport\` to resolve \`import\` aliases from \`${case2.path}\`:`, () => {
      const { path } = case2

      it('Should resolve `@consts` to `../consts` when the path of `@consts` is `./src/consts`!', () => {
        const { body, source } = getBody(0)

        resolveImport(path, aliases)(body, '')

        const received = source.value
        const expected = '../consts'

        expect(received).toBe(expected)
      })

      it('Should resolve `@consts/urls` to `../consts/urls` when the path of `@consts` is `./src/consts`!', () => {
        const { body, source } = getBody(2)

        resolveImport(path, aliases)(body, '')

        const received = source.value
        const expected = '../consts/urls'

        expect(received).toBe(expected)
      })

      it('Should resolve `@consts/urls/` to `../consts/urls` when the path of `@consts` is `./src/consts`!', () => {
        const { body, source } = getBody(3)

        resolveImport(path, aliases)(body, '')

        const received = source.value
        const expected = '../consts/urls'

        expect(received).toBe(expected)
      })

      it('Should resolve `@utils//` to `../utils` when the path of `@utils` is `./src/utils/`!', () => {
        const { body, source } = getBody(4)

        resolveImport(path, aliases)(body, '')

        const received = source.value
        const expected = '../utils'

        expect(received).toBe(expected)
      })

      it('Should resolve `@utils/logs/info//` to `../utils/logs/info` when the path of `@utils` is `./src/utils/`!', () => {
        const { body, source } = getBody(5)

        resolveImport(path, aliases)(body, '')

        const received = source.value
        const expected = '../utils/logs/info'

        expect(received).toBe(expected)
      })

      it('Should resolve `../share/services` to `../share/services` when no alias matches!', () => {
        const { body, source } = getBody(6)

        resolveImport(path, aliases)(body, '')

        const received = source.value
        const expected = '../share/services'

        expect(received).toBe(expected)
      })

      it('Should resolve `../share` to `../share` when no alias matches!', () => {
        const { body, source } = getBody(7)

        resolveImport(path, aliases)(body, '')

        const received = source.value
        const expected = '../share'

        expect(received).toBe(expected)
      })

      it('Should resolve `@/share` to `../share` when the path of `@` is `./src`!', () => {
        const { body, source } = getBody(8)

        resolveImport(path, aliases)(body, '')

        const received = source.value
        const expected = '../share'

        expect(received).toBe(expected)
      })

      it('Should resolve `@tests` to `../../tests` when the path of `@tests` is `./tests`!', () => {
        const { body, source } = getBody(9)

        resolveImport(path, aliases)(body, '')

        const received = source.value
        const expected = '../../tests'

        expect(received).toBe(expected)
      })

      it('Should resolve `@tests/mocks` to `../../tests/mocks` when the path of `@tests` is `./tests`!', () => {
        const { body, source } = getBody(11)

        resolveImport(path, aliases)(body, '')

        const received = source.value
        const expected = '../../tests/mocks'

        expect(received).toBe(expected)
      })
    })
  })

  describe('Test `resolveRequire` util:', () => {
    const { getBody, case1, case2 } = requiresDummy

    describe(`Test \`resolveRequire\` to resolve \`require\` aliases from \`${case1.path}\`:`, () => {
      const { path } = case1

      it('Should resolve `@consts` to `./consts` when the path of `@consts` is `./src/consts`!', () => {
        const { callee, args } = getBody(0)

        resolveRequire(path, aliases)(callee, '')

        const received = args.value
        const expected = './consts'

        expect(received).toBe(expected)
      })
    })

    describe(`Test \`resolveRequire\` to resolve \`require\` aliases from \`${case2.path}\`:`, () => {
      const { path } = case2

      it('Should resolve `@consts` to `../consts` when the path of `@consts` is `./src/consts`!', () => {
        const { callee, args } = getBody(0)

        resolveRequire(path, aliases)(callee, '')

        const received = args.value
        const expected = '../consts'

        expect(received).toBe(expected)
      })

      it('Should resolve `@consts/urls/` to `../consts/urls` when the path of `@consts` is `./src/consts`!', () => {
        const { callee, args } = getBody(2)

        resolveRequire(path, aliases)(callee, '')

        const received = args.value
        const expected = '../consts/urls'

        expect(received).toBe(expected)
      })

      it('Should resolve `@utils//` to `../utils` when the path of `@utils` is `./src/utils/`!', () => {
        const { callee, args } = getBody(4)

        resolveRequire(path, aliases)(callee, '')

        const received = args.value
        const expected = '../utils'

        expect(received).toBe(expected)
      })

      it('Should resolve `@utils/logs/info//` to `../utils/logs/info` when the path of `@utils` is `./src/utils/`!', () => {
        const { callee, args } = getBody(5)

        resolveRequire(path, aliases)(callee, '')

        const received = args.value
        const expected = '../utils/logs/info'

        expect(received).toBe(expected)
      })

      it('Should resolve `../share/services` to `../share/services` when no alias matches!', () => {
        const { callee, args } = getBody(6)

        resolveRequire(path, aliases)(callee, '')

        const received = args.value
        const expected = '../share/services'

        expect(received).toBe(expected)
      })

      it('Should resolve `../share` to `../share` when no alias matches!', () => {
        const { callee, args } = getBody(7)

        resolveRequire(path, aliases)(callee, '')

        const received = args.value
        const expected = '../share'

        expect(received).toBe(expected)
      })

      it('Should resolve `@/share` to `../share` when the path of `@` is `./src`!', () => {
        const { callee, args } = getBody(8)

        resolveRequire(path, aliases)(callee, '')

        const received = args.value
        const expected = '../share'

        expect(received).toBe(expected)
      })

      it('Should resolve `@tests` to `../../tests` when the path of `@tests` is `./tests`!', () => {
        const { callee, args } = getBody(9)

        resolveRequire(path, aliases)(callee, '')

        const received = args.value
        const expected = '../../tests'

        expect(received).toBe(expected)
      })

      it('Should resolve `@tests/mocks` to `../../tests/mocks` when the path of `@tests` is `./tests`!', () => {
        const { callee, args } = getBody(11)

        resolveRequire(path, aliases)(callee, '')

        const received = args.value
        const expected = '../../tests/mocks'

        expect(received).toBe(expected)
      })
    })
  })
})
