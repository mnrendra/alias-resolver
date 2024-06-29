import type { CallExpression, Literal, ImportDeclaration, VariableDeclaration } from 'acorn'

import aliases from '@tests/dummies/aliases'
import * as importsDummy from '@tests/dummies/imports'
import * as requiresDummy from '@tests/dummies/requires'

import { replaceAliases, resolveImport, resolveRequire } from '.'

describe('Test all utils:', () => {
  describe('Test `replaceAliases` util:', () => {
    describe('Test `import` aliases from `./src/main/main.mjs`:', () => {
      const { path, literal } = importsDummy

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

    describe('Test `require` aliases from `./src/main/main.js`:', () => {
      const { path, literal } = requiresDummy

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

  describe('Test `resolveImport` to resolve `import` aliases from `./src/main/main.mjs`:', () => {
    const { path, program } = importsDummy
    const bodies = program.body as ImportDeclaration[]

    it('Should resolve `@consts` to `../consts` when the path of `@consts` is `./src/consts`!', () => {
      const body = bodies[0]

      resolveImport(path, aliases)(body, '')

      const received = body.source.value
      const expected = '../consts'

      expect(received).toBe(expected)
    })

    it('Should resolve `@consts/urls` to `../consts/urls` when the path of `@consts` is `./src/consts`!', () => {
      const body = bodies[2]

      resolveImport(path, aliases)(body, '')

      const received = body.source.value
      const expected = '../consts/urls'

      expect(received).toBe(expected)
    })

    it('Should resolve `@consts/urls/` to `../consts/urls` when the path of `@consts` is `./src/consts`!', () => {
      const body = bodies[3]

      resolveImport(path, aliases)(body, '')

      const received = body.source.value
      const expected = '../consts/urls'

      expect(received).toBe(expected)
    })

    it('Should resolve `@utils//` to `../utils` when the path of `@utils` is `./src/utils/`!', () => {
      const body = bodies[4]

      resolveImport(path, aliases)(body, '')

      const received = body.source.value
      const expected = '../utils'

      expect(received).toBe(expected)
    })

    it('Should resolve `@utils/logs/info//` to `../utils/logs/info` when the path of `@utils` is `./src/utils/`!', () => {
      const body = bodies[5]

      resolveImport(path, aliases)(body, '')

      const received = body.source.value
      const expected = '../utils/logs/info'

      expect(received).toBe(expected)
    })

    it('Should resolve `../share/services` to `../share/services` when no alias matches!', () => {
      const body = bodies[6]

      resolveImport(path, aliases)(body, '')

      const received = body.source.value
      const expected = '../share/services'

      expect(received).toBe(expected)
    })

    it('Should resolve `../share` to `../share` when no alias matches!', () => {
      const body = bodies[7]

      resolveImport(path, aliases)(body, '')

      const received = body.source.value
      const expected = '../share'

      expect(received).toBe(expected)
    })

    it('Should resolve `@/share` to `../share` when the path of `@` is `./src`!', () => {
      const body = bodies[8]

      resolveImport(path, aliases)(body, '')

      const received = body.source.value
      const expected = '../share'

      expect(received).toBe(expected)
    })

    it('Should resolve `@tests` to `../../tests` when the path of `@tests` is `./tests`!', () => {
      const body = bodies[9]

      resolveImport(path, aliases)(body, '')

      const received = body.source.value
      const expected = '../../tests'

      expect(received).toBe(expected)
    })

    it('Should resolve `@tests/mocks` to `../../tests/mocks` when the path of `@tests` is `./tests`!', () => {
      const body = bodies[11]

      resolveImport(path, aliases)(body, '')

      const received = body.source.value
      const expected = '../../tests/mocks'

      expect(received).toBe(expected)
    })
  })

  describe('Test `resolveRequire` to resolve `require` aliases from `./src/main/main.js`:', () => {
    const { path, program } = requiresDummy
    const bodies = program.body as VariableDeclaration[]

    it('Should resolve `@consts` to `../consts` when the path of `@consts` is `./src/consts`!', () => {
      const callee = bodies[0].declarations[0].init as CallExpression
      const args = callee.arguments[0] as Literal

      resolveRequire(path, aliases)(callee, '')

      const received = args.value
      const expected = '../consts'

      expect(received).toBe(expected)
    })

    it('Should resolve `@consts/urls/` to `../consts/urls` when the path of `@consts` is `./src/consts`!', () => {
      const callee = bodies[2].declarations[0].init as CallExpression
      const args = callee.arguments[0] as Literal

      resolveRequire(path, aliases)(callee, '')

      const received = args.value
      const expected = '../consts/urls'

      expect(received).toBe(expected)
    })

    it('Should resolve `@utils//` to `../utils` when the path of `@utils` is `./src/utils/`!', () => {
      const callee = bodies[4].declarations[0].init as CallExpression
      const args = callee.arguments[0] as Literal

      resolveRequire(path, aliases)(callee, '')

      const received = args.value
      const expected = '../utils'

      expect(received).toBe(expected)
    })

    it('Should resolve `@utils/logs/info//` to `../utils/logs/info` when the path of `@utils` is `./src/utils/`!', () => {
      const callee = bodies[5].declarations[0].init as CallExpression
      const args = callee.arguments[0] as Literal

      resolveRequire(path, aliases)(callee, '')

      const received = args.value
      const expected = '../utils/logs/info'

      expect(received).toBe(expected)
    })

    it('Should resolve `../share/services` to `../share/services` when no alias matches!', () => {
      const callee = bodies[6].declarations[0].init as CallExpression
      const args = callee.arguments[0] as Literal

      resolveRequire(path, aliases)(callee, '')

      const received = args.value
      const expected = '../share/services'

      expect(received).toBe(expected)
    })

    it('Should resolve `../share` to `../share` when no alias matches!', () => {
      const callee = bodies[7].declarations[0].init as CallExpression
      const args = callee.arguments[0] as Literal

      resolveRequire(path, aliases)(callee, '')

      const received = args.value
      const expected = '../share'

      expect(received).toBe(expected)
    })

    it('Should resolve `@/share` to `../share` when the path of `@` is `./src`!', () => {
      const callee = bodies[8].declarations[0].init as CallExpression
      const args = callee.arguments[0] as Literal

      resolveRequire(path, aliases)(callee, '')

      const received = args.value
      const expected = '../share'

      expect(received).toBe(expected)
    })

    it('Should resolve `@tests` to `../../tests` when the path of `@tests` is `./tests`!', () => {
      const callee = bodies[9].declarations[0].init as CallExpression
      const args = callee.arguments[0] as Literal

      resolveRequire(path, aliases)(callee, '')

      const received = args.value
      const expected = '../../tests'

      expect(received).toBe(expected)
    })

    it('Should resolve `@tests/mocks` to `../../tests/mocks` when the path of `@tests` is `./tests`!', () => {
      const callee = bodies[11].declarations[0].init as CallExpression
      const args = callee.arguments[0] as Literal

      resolveRequire(path, aliases)(callee, '')

      const received = args.value
      const expected = '../../tests/mocks'

      expect(received).toBe(expected)
    })
  })
})
