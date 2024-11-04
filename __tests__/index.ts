import type { Source } from '@/types'

import { readFileSync } from 'node:fs'
import { normalize, resolve } from 'node:path'

import mockedParse from '@tests/mocks/parse'
import unmockParse from '@tests/unmocks/parse'

import { resolveAlias } from '..'

const read = (file: string): string => {
  return readFileSync(file, { encoding: 'utf8' })
}

const aliases = [
  { alias: '@', path: './src/' },
  { alias: '@consts', path: './src/consts' },
  { alias: '@utils/', path: './src/utils/' },
  { alias: '@tests', path: './tests' }
]

jest.mock('acorn', () => ({
  parse: jest.fn()
}))

describe('Test all features:', () => {
  describe('By mocking `acorn` to throw an unknown error:', () => {
    beforeAll(() => {
      mockedParse.mockImplementationOnce(() => {
        throw new Error('any error message')
      })
    })

    afterAll(() => {
      unmockParse(mockedParse)
    })

    it('Should throw an error!', () => {
      const src = {
        code: '',
        path: ''
      }

      const received = (): void => { resolveAlias(src, aliases) }
      const expected = Error('any error message')

      expect(received).toThrow(expected)
    })
  })

  it('Should throw an "Unexpected token" error when given `./tests/dummies/5.resource.ts`!', () => {
    const source: Source = {
      code: read('./tests/dummies/5.resource.ts'),
      path: ''
    }

    const received = (): void => {
      resolveAlias(source, aliases)
    }

    expect(received).toThrow(Error('Your source code contains an \'Unexpected token\' error or might be in `TypeScript` format, so it cannot be parsed. This module can only parse CommonJS or ESModule formats.'))
  })

  it('Should return `./tests/dummies/1.expected.js` when given `./tests/dummies/1.resource.js`!', () => {
    const resource = read('./tests/dummies/1.resource.js')
    const resources = resource.split('\n')

    const source = {
      code: resources.slice(1).join('\n'),
      path: normalize(resolve(resources[0].split('// ')[1]))
    }

    resolveAlias(source, aliases)

    const expected = read('./tests/dummies/1.expected.js')

    expect(source.code).toBe(expected)
  })

  it('Should return `./tests/dummies/2.expected.js` when given `./tests/dummies/2.resource.js`!', () => {
    const resource = read('./tests/dummies/2.resource.js')
    const resources = resource.split('\n')

    const source: Source = {
      code: resources.slice(1).join('\n'),
      path: normalize(resolve(resources[0].split('// ')[1])),
      type: 'script'
    }

    resolveAlias(source, aliases)

    const expected = read('./tests/dummies/2.expected.js')

    expect(source.code).toBe(expected)
  })

  it('Should return `./tests/dummies/3.expected.js` when given `./tests/dummies/3.resource.js`!', () => {
    const resource = read('./tests/dummies/3.resource.js')
    const resources = resource.split('\n')

    const source = {
      code: resources.slice(1).join('\n'),
      path: normalize(resolve(resources[0].split('// ')[1]))
    }

    resolveAlias(source, aliases)

    const expected = read('./tests/dummies/3.expected.js')

    expect(source.code).toBe(expected)
  })

  it('Should return `./tests/dummies/4.expected.js` when given `./tests/dummies/4.resource.js`!', () => {
    const resource = read('./tests/dummies/4.resource.js')
    const resources = resource.split('\n')

    const source: Source = {
      code: resources.slice(1).join('\n'),
      path: normalize(resolve(resources[0].split('// ')[1])),
      type: 'module'
    }

    resolveAlias(source, aliases)

    const expected = read('./tests/dummies/4.expected.js')

    expect(source.code).toBe(expected)
  })
})
