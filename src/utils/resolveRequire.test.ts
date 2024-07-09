import aliases from '@tests/dummies/aliases'
import * as requiresDummy from '@tests/dummies/requires'

import resolveRequire from './resolveRequire'

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
