import aliases from '@tests/dummies/aliases'
import * as importsDummy from '@tests/dummies/imports'

import resolveImport from './resolveImport'

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
