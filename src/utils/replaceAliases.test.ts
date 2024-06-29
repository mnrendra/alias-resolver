import * as importsDummy from '@tests/dummies/imports'
import * as requiresDummy from '@tests/dummies/requires'

import replaceAliases from './replaceAliases'

describe('Test `replaceAliases` util:', () => {
  describe('Test `import` aliases from `./src/index.mjs`:', () => {
    const { literal } = importsDummy
    const path = './src/index.mjs'

    it('Should resolve `@utils` to `./utils` when the path of `@utils` is `./src/utils`!', () => {
      const source = { ...literal, value: '@utils' }

      replaceAliases(path, source, [{ alias: '@utils', path: './src/utils' }])

      const received = source.value
      const expected = './utils'

      expect(received).toBe(expected)
    })
  })

  describe('Test `import` aliases from `./src/main/main.mjs`:', () => {
    const { literal } = importsDummy
    const path = './src/main/main.mjs'

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

  describe('Test `require` aliases from `./src/index.js`:', () => {
    const { literal } = requiresDummy
    const path = './src/index.js'

    it('Should resolve `@utils` to `./utils` when the path of `@utils` is `./src/utils`!', () => {
      const source = { ...literal, value: '@utils' }

      replaceAliases(path, source, [{ alias: '@utils', path: './src/utils' }])

      const received = source.value
      const expected = './utils'

      expect(received).toBe(expected)
    })
  })

  describe('Test `require` aliases from `./src/main/main.js`:', () => {
    const { literal } = requiresDummy
    const path = './src/main/main.js'

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
