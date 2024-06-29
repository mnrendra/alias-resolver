import * as originalModule from 'acorn'

const { parse } = originalModule as jest.Mocked<typeof originalModule>

export default parse
