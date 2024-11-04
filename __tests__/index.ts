import aliases from '@tests/dummies/aliases'
import * as importsDummy from '@tests/dummies/imports'
import * as requiresDummy from '@tests/dummies/requires'
import mockedParse from '@tests/mocks/parse'
import unmockParse from '@tests/unmocks/parse'

import { resolveAlias } from '..'

jest.mock('acorn', () => ({
  parse: jest.fn()
}))

describe('Test all features:', () => {
  describe('Test `resolveAlias` feature:', () => {
    describe('By mocking `acorn` to throw an unknown error:', () => {
      const { case1 } = importsDummy

      beforeAll(() => {
        mockedParse.mockImplementationOnce(() => {
          throw new Error('any error message')
        })
      })

      afterAll(() => {
        unmockParse(mockedParse)
      })

      it('Should throw an error!', () => {
        const { source } = case1
        const src = source()

        const received = (): void => { resolveAlias(src, aliases) }
        const expected = Error('any error message')

        expect(received).toThrow(expected)
      })
    })

    describe('By mocking `acorn` to throw an error where the `message` is include "\'Unexpected token\'":', () => {
      const { case1 } = importsDummy

      beforeAll(() => {
        mockedParse.mockImplementationOnce(() => {
          throw new Error('Unexpected token')
        })
      })

      afterAll(() => {
        unmockParse(mockedParse)
      })

      it('Should throw an error!', () => {
        const { source } = case1
        const src = source()

        const received = (): void => { resolveAlias(src, aliases) }
        const expected = Error('Your source code contains an \'Unexpected token\' error or might be in `TypeScript` format, so it cannot be parsed. This module can only parse CommonJS or ESModule formats.')

        expect(received).toThrow(expected)
      })
    })

    describe('By mocking `acorn` to throw an error where the `message` is include "\'import\' and \'export\' may appear only with \'sourceType: module\'":', () => {
      const { case2 } = importsDummy

      beforeAll(() => {
        mockedParse.mockImplementationOnce(() => {
          throw new Error("'import' and 'export' may appear only with 'sourceType: module'")
        })

        mockedParse.mockReturnValueOnce(importsDummy.program())
      })

      afterAll(() => {
        unmockParse(mockedParse)
      })

      it('Should resolve all `import` aliases from the `source.code`!', () => {
        const { source, expected } = case2
        const src = source()

        resolveAlias(src, aliases)

        const received = src.code

        expect(received).toBe(expected)
      })
    })

    describe('Without mocking anything:', () => {
      beforeAll(() => {
        unmockParse(mockedParse)
      })

      describe('Test the `module` source code:', () => {
        const { case1, case2 } = importsDummy

        it('Should resolve all `import` aliases from the `source.code`!', () => {
          const { source, expected } = case2
          const src = source()

          resolveAlias(src, aliases)

          const received = src.code

          expect(received).toBe(expected)
        })

        it('Should resolve all `import` aliases from the `source.code` without `source.type`!', () => {
          const { source, expected } = case2
          const src = source()

          delete src.type

          resolveAlias(src, aliases)

          const received = src.code

          expect(received).toBe(expected)
        })

        it('Should resolve all `import` aliases from the `source.code` by reversing the source type!', () => {
          const { source, expected } = case2
          const src = source()

          src.type = 'script'

          resolveAlias(src, aliases)

          const received = src.code

          expect(received).toBe(expected)
        })

        it('Should resolve all `import` aliases from the `source.code` in the same directory!', () => {
          const { source, expected } = case1
          const src = source()

          resolveAlias(src, aliases)

          const received = src.code

          expect(received).toBe(expected)
        })
      })

      describe('Test the `script` source code:', () => {
        const { case1, case2 } = requiresDummy

        it('Should resolve all `require` aliases from the `source.code`!', () => {
          const { source, expected } = case2
          const src = source()

          resolveAlias(src, aliases)

          const received = src.code

          expect(received).toBe(expected)
        })

        it('Should resolve all `require` aliases from the `source.code` without `source.type`!', () => {
          const { source, expected } = case2
          const src = source()

          delete src.type

          resolveAlias(src, aliases)

          const received = src.code

          expect(received).toBe(expected)
        })

        it('Should resolve all `require` aliases from the `source.code` by reversing the source type!', () => {
          const { source, expected } = case2
          const src = source()

          src.type = 'module'

          resolveAlias(src, aliases)

          const received = src.code

          expect(received).toBe(expected)
        })

        it('Should resolve all `require` aliases from the `source.code` in the same directory!', () => {
          const { source, expected } = case1
          const src = source()

          resolveAlias(src, aliases)

          const received = src.code

          expect(received).toBe(expected)
        })
      })
    })
  })
})
