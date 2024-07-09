import { ERROR_MESSAGE } from '@/consts'

import aliases from '@tests/dummies/aliases'
import * as importsDummy from '@tests/dummies/imports'
import * as requiresDummy from '@tests/dummies/requires'
import mockedParse from '@tests/mocks/parse'
import unmockParse from '@tests/unmocks/parse'

import main from './main'

jest.mock('acorn', () => ({
  parse: jest.fn()
}))

describe('Test main feature:', () => {
  describe('By mocking `acorn` to throw a non-`ERROR_MESSAGE` error:', () => {
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

      const received = (): void => { main(src, aliases) }
      const expected = Error('any error message')

      expect(received).toThrow(expected)
    })
  })

  describe('By mocking `acorn` to throw an `ERROR_MESSAGE` error:', () => {
    const { case2 } = importsDummy

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
      const { source, expected } = case2
      const src = source()

      main(src, aliases)

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

        main(src, aliases)

        const received = src.code

        expect(received).toBe(expected)
      })

      it('Should resolve all `import` aliases from the `source.code` without `source.type`!', () => {
        const { source, expected } = case2
        const src = source()

        delete src.type

        main(src, aliases)

        const received = src.code

        expect(received).toBe(expected)
      })

      it('Should resolve all `import` aliases from the `source.code` by reversing the source type!', () => {
        const { source, expected } = case2
        const src = source()

        src.type = 'script'

        main(src, aliases)

        const received = src.code

        expect(received).toBe(expected)
      })

      it('Should resolve all `import` aliases from the `source.code` in the same directory!', () => {
        const { source, expected } = case1
        const src = source()

        main(src, aliases)

        const received = src.code

        expect(received).toBe(expected)
      })
    })

    describe('Test the `script` source code:', () => {
      const { case1, case2 } = requiresDummy

      it('Should resolve all `require` aliases from the `source.code`!', () => {
        const { source, expected } = case2
        const src = source()

        main(src, aliases)

        const received = src.code

        expect(received).toBe(expected)
      })

      it('Should resolve all `require` aliases from the `source.code` without `source.type`!', () => {
        const { source, expected } = case2
        const src = source()

        delete src.type

        main(src, aliases)

        const received = src.code

        expect(received).toBe(expected)
      })

      it('Should resolve all `require` aliases from the `source.code` by reversing the source type!', () => {
        const { source, expected } = case2
        const src = source()

        src.type = 'module'

        main(src, aliases)

        const received = src.code

        expect(received).toBe(expected)
      })

      it('Should resolve all `require` aliases from the `source.code` in the same directory!', () => {
        const { source, expected } = case1
        const src = source()

        main(src, aliases)

        const received = src.code

        expect(received).toBe(expected)
      })
    })
  })
})
