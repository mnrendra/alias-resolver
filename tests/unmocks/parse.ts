import type originalModule from 'acorn'

import type mockedModule from '@tests/mocks/parse'

type OriginalModule = typeof originalModule
type MockedModule = typeof mockedModule

const unmock = (
  mockedModule: MockedModule
): void => {
  const actualModule: OriginalModule = jest.requireActual('acorn')
  mockedModule.mockImplementation(actualModule.parse)
}

export default unmock
