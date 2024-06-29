import { resolve } from 'node:path'

import validateRelativePath from './validateRelativePath'

describe('Test `validateRelativePath` util:', () => {
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

  it(`Should return \`${resolve('foo')}\` when given \`${resolve('foo')}\`!`, () => {
    const received = validateRelativePath(resolve('foo'))
    const expected = resolve('foo')
    expect(received).toBe(expected)
  })
})
