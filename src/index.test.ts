import { ERROR_MESSAGE } from '@/consts'

import mockedParse from '@tests/mocks/parse'
import unmockParse from '@tests/unmocks/parse'
import aliases from '@tests/dummies/aliases'
import * as importsDummy from '@tests/dummies/imports'
import * as requiresDummy from '@tests/dummies/requires'

import index from '.'

jest.mock('acorn', () => ({
  parse: jest.fn()
}))

describe('Test all features:', () => {
  describe('Test main feature:', () => {
    describe('By mocking `acorn` to throw a non-`ERROR_MESSAGE` error:', () => {
      beforeAll(() => {
        mockedParse.mockImplementationOnce(() => {
          throw new Error('any error message')
        })
      })

      afterAll(() => {
        unmockParse(mockedParse)
      })

      it('Should throw an error!', () => {
        const source = importsDummy.source()
        const received = (): void => { index(aliases, source) }
        const expected = Error('any error message')
        expect(received).toThrow(expected)
      })
    })

    describe('By mocking `acorn` to throw an `ERROR_MESSAGE` error:', () => {
      beforeAll(() => {
        mockedParse.mockImplementationOnce(() => {
          throw new Error(ERROR_MESSAGE)
        })

        mockedParse.mockReturnValueOnce(importsDummy.program())
      })

      afterAll(() => {
        unmockParse(mockedParse)
      })

      it('Should resolve all `import` aliases from the `source.code`!', () => {
        const source = importsDummy.source()
        index(aliases, source)
        const received = source.code
        const expected = importsDummy.expectedCode
        expect(received).toBe(expected)
      })
    })

    describe('Without mocking anything:', () => {
      beforeAll(() => {
        unmockParse(mockedParse)
      })

      describe('Test the `module` source code:', () => {
        it('Should resolve all `import` aliases from the `source.code`!', () => {
          const source = importsDummy.source()
          index(aliases, source)
          const received = source.code
          const expected = importsDummy.expectedCode
          expect(received).toBe(expected)
        })

        it('Should resolve all `import` aliases from the `source.code` without `source.type`!', () => {
          const source = importsDummy.source()
          delete source.type
          index(aliases, source)
          const received = source.code
          const expected = importsDummy.expectedCode
          expect(received).toBe(expected)
        })

        it('Should resolve all `import` aliases from the `source.code` by reversing the source type!', () => {
          const source = importsDummy.source()
          source.type = 'script'
          index(aliases, source)
          const received = source.code
          const expected = importsDummy.expectedCode
          expect(received).toBe(expected)
        })

        it('Should resolve all `import` aliases from the `source.code` in the same directory!', () => {
          const source = importsDummy.sourceInSameDir()
          index(aliases, source)
          const received = source.code
          const expected = importsDummy.expectedCodeInSameDir
          expect(received).toBe(expected)
        })
      })

      describe('Test the `script` source code:', () => {
        it('Should resolve all `require` aliases from the `source.code`!', () => {
          const source = requiresDummy.source()
          index(aliases, source)
          const received = source.code
          const expected = requiresDummy.expectedCode
          expect(received).toBe(expected)
        })

        it('Should resolve all `require` aliases from the `source.code` without `source.type`!', () => {
          const source = requiresDummy.source()
          delete source.type
          index(aliases, source)
          const received = source.code
          const expected = requiresDummy.expectedCode
          expect(received).toBe(expected)
        })

        it('Should resolve all `require` aliases from the `source.code` by reversing the source type!', () => {
          const source = requiresDummy.source()
          source.type = 'module'
          index(aliases, source)
          const received = source.code
          const expected = requiresDummy.expectedCode
          expect(received).toBe(expected)
        })

        it('Should resolve all `require` aliases from the `source.code` in the same directory!', () => {
          const source = requiresDummy.sourceInSameDir()
          index(aliases, source)
          const received = source.code
          const expected = requiresDummy.expectedCodeInSameDir
          expect(received).toBe(expected)
        })
      })
    })
  })
})
