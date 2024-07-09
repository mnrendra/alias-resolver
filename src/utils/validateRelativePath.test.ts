import { normalize, resolve } from 'node:path'

import validateRelativePath from './validateRelativePath'

describe('Test `validateRelativePath` util:', () => {
  const foo = normalize(resolve('foo'))

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

  it(`Should return \`${foo}\` when given \`${foo}\`!`, () => {
    const received = validateRelativePath(foo)
    const expected = foo
    expect(received).toBe(expected)
  })
})
