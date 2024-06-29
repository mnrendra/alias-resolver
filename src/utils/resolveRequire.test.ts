import type { CallExpression, VariableDeclaration, Literal } from 'acorn'

import aliases from '@tests/dummies/aliases'
import * as requiresDummy from '@tests/dummies/requires'

import resolveRequire from './resolveRequire'

describe('Test `resolveRequire` util:', () => {
  const { program } = requiresDummy

  describe('Test `resolveRequire` to resolve `require` aliases from `./src/idnex.js`:', () => {
    const path = './src/idnex.js'
    const bodies = program().body as VariableDeclaration[]

    it('Should resolve `@consts` to `./consts` when the path of `@consts` is `./src/consts`!', () => {
      const callee = bodies[0].declarations[0].init as CallExpression
      const args = callee.arguments[0] as Literal

      resolveRequire(path, aliases)(callee, '')

      const received = args.value
      const expected = './consts'

      expect(received).toBe(expected)
    })
  })

  describe('Test `resolveRequire` to resolve `require` aliases from `./src/main/main.js`:', () => {
    const path = './src/main/main.js'
    const bodies = program().body as VariableDeclaration[]

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
