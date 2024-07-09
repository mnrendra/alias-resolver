import type {
  Literal,
  Program,
  VariableDeclaration,
  CallExpression,
  Source,
  SourceType
} from '@/types'

import { normalize, resolve } from 'node:path'

// common

const type: SourceType = 'script'

const code: string = `
/**
 * Imports
 */

// @consts
const consts = require('@consts')
const { urls } = require("@consts")
const url = require('@consts/urls/');
const { api } = require("@consts/urls/");

// @utils
const { logs } = require('@utils//')
const info = require("@utils/logs/info//");

// @/share
const { login } = require('../share/services');
const share = require("../share")
const { apis } = require('@/share');

// @tests
const tests = require('@tests');
const {
  mocks
} = require("@tests")
const {
  data,
  dummy
} = require("@tests/mocks")

/**
 * Exports
 */

module.exports = {
  // @consts
  consts,
  urls,
  url,
  api,
  // @utils
  logs,
  info,
  // @/share
  login,
  share,
  apis,
  // @tests
  tests,
  mocks,
  data,
  dummy
}
`

const program = (): Program => ({
  type: 'Program',
  start: 0,
  end: 739,
  body: [
    {
      type: 'VariableDeclaration',
      start: 32,
      end: 65,
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 38,
          end: 65,
          id: {
            type: 'Identifier',
            start: 38,
            end: 44,
            name: 'consts'
          },
          init: {
            type: 'CallExpression',
            start: 47,
            end: 65,
            callee: {
              type: 'Identifier',
              start: 47,
              end: 54,
              name: 'require'
            },
            arguments: [
              {
                type: 'Literal',
                start: 55,
                end: 64,
                value: '@consts',
                raw: "'@consts'"
              }
            ],
            optional: false
          }
        }
      ],
      kind: 'const'
    },
    {
      type: 'VariableDeclaration',
      start: 66,
      end: 101,
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 72,
          end: 101,
          id: {
            type: 'ObjectPattern',
            start: 72,
            end: 80,
            properties: [
              {
                type: 'Property',
                start: 74,
                end: 78,
                method: false,
                shorthand: true,
                computed: false,
                key: {
                  type: 'Identifier',
                  start: 74,
                  end: 78,
                  name: 'urls'
                },
                kind: 'init',
                value: {
                  type: 'Identifier',
                  start: 74,
                  end: 78,
                  name: 'urls'
                }
              }
            ]
          },
          init: {
            type: 'CallExpression',
            start: 83,
            end: 101,
            callee: {
              type: 'Identifier',
              start: 83,
              end: 90,
              name: 'require'
            },
            arguments: [
              {
                type: 'Literal',
                start: 91,
                end: 100,
                value: '@consts',
                raw: '"@consts"'
              }
            ],
            optional: false
          }
        }
      ],
      kind: 'const'
    },
    {
      type: 'VariableDeclaration',
      start: 102,
      end: 139,
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 108,
          end: 138,
          id: {
            type: 'Identifier',
            start: 108,
            end: 111,
            name: 'url'
          },
          init: {
            type: 'CallExpression',
            start: 114,
            end: 138,
            callee: {
              type: 'Identifier',
              start: 114,
              end: 121,
              name: 'require'
            },
            arguments: [
              {
                type: 'Literal',
                start: 122,
                end: 137,
                value: '@consts/urls/',
                raw: "'@consts/urls/'"
              }
            ],
            optional: false
          }
        }
      ],
      kind: 'const'
    },
    {
      type: 'VariableDeclaration',
      start: 140,
      end: 181,
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 146,
          end: 180,
          id: {
            type: 'ObjectPattern',
            start: 146,
            end: 153,
            properties: [
              {
                type: 'Property',
                start: 148,
                end: 151,
                method: false,
                shorthand: true,
                computed: false,
                key: {
                  type: 'Identifier',
                  start: 148,
                  end: 151,
                  name: 'api'
                },
                kind: 'init',
                value: {
                  type: 'Identifier',
                  start: 148,
                  end: 151,
                  name: 'api'
                }
              }
            ]
          },
          init: {
            type: 'CallExpression',
            start: 156,
            end: 180,
            callee: {
              type: 'Identifier',
              start: 156,
              end: 163,
              name: 'require'
            },
            arguments: [
              {
                type: 'Literal',
                start: 164,
                end: 179,
                value: '@consts/urls/',
                raw: '"@consts/urls/"'
              }
            ],
            optional: false
          }
        }
      ],
      kind: 'const'
    },
    {
      type: 'VariableDeclaration',
      start: 193,
      end: 229,
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 199,
          end: 229,
          id: {
            type: 'ObjectPattern',
            start: 199,
            end: 207,
            properties: [
              {
                type: 'Property',
                start: 201,
                end: 205,
                method: false,
                shorthand: true,
                computed: false,
                key: {
                  type: 'Identifier',
                  start: 201,
                  end: 205,
                  name: 'logs'
                },
                kind: 'init',
                value: {
                  type: 'Identifier',
                  start: 201,
                  end: 205,
                  name: 'logs'
                }
              }
            ]
          },
          init: {
            type: 'CallExpression',
            start: 210,
            end: 229,
            callee: {
              type: 'Identifier',
              start: 210,
              end: 217,
              name: 'require'
            },
            arguments: [
              {
                type: 'Literal',
                start: 218,
                end: 228,
                value: '@utils//',
                raw: "'@utils//'"
              }
            ],
            optional: false
          }
        }
      ],
      kind: 'const'
    },
    {
      type: 'VariableDeclaration',
      start: 230,
      end: 273,
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 236,
          end: 272,
          id: {
            type: 'Identifier',
            start: 236,
            end: 240,
            name: 'info'
          },
          init: {
            type: 'CallExpression',
            start: 243,
            end: 272,
            callee: {
              type: 'Identifier',
              start: 243,
              end: 250,
              name: 'require'
            },
            arguments: [
              {
                type: 'Literal',
                start: 251,
                end: 271,
                value: '@utils/logs/info//',
                raw: '"@utils/logs/info//"'
              }
            ],
            optional: false
          }
        }
      ],
      kind: 'const'
    },
    {
      type: 'VariableDeclaration',
      start: 286,
      end: 333,
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 292,
          end: 332,
          id: {
            type: 'ObjectPattern',
            start: 292,
            end: 301,
            properties: [
              {
                type: 'Property',
                start: 294,
                end: 299,
                method: false,
                shorthand: true,
                computed: false,
                key: {
                  type: 'Identifier',
                  start: 294,
                  end: 299,
                  name: 'login'
                },
                kind: 'init',
                value: {
                  type: 'Identifier',
                  start: 294,
                  end: 299,
                  name: 'login'
                }
              }
            ]
          },
          init: {
            type: 'CallExpression',
            start: 304,
            end: 332,
            callee: {
              type: 'Identifier',
              start: 304,
              end: 311,
              name: 'require'
            },
            arguments: [
              {
                type: 'Literal',
                start: 312,
                end: 331,
                value: '../share/services',
                raw: "'../share/services'"
              }
            ],
            optional: false
          }
        }
      ],
      kind: 'const'
    },
    {
      type: 'VariableDeclaration',
      start: 334,
      end: 367,
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 340,
          end: 367,
          id: {
            type: 'Identifier',
            start: 340,
            end: 345,
            name: 'share'
          },
          init: {
            type: 'CallExpression',
            start: 348,
            end: 367,
            callee: {
              type: 'Identifier',
              start: 348,
              end: 355,
              name: 'require'
            },
            arguments: [
              {
                type: 'Literal',
                start: 356,
                end: 366,
                value: '../share',
                raw: '"../share"'
              }
            ],
            optional: false
          }
        }
      ],
      kind: 'const'
    },
    {
      type: 'VariableDeclaration',
      start: 368,
      end: 404,
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 374,
          end: 403,
          id: {
            type: 'ObjectPattern',
            start: 374,
            end: 382,
            properties: [
              {
                type: 'Property',
                start: 376,
                end: 380,
                method: false,
                shorthand: true,
                computed: false,
                key: {
                  type: 'Identifier',
                  start: 376,
                  end: 380,
                  name: 'apis'
                },
                kind: 'init',
                value: {
                  type: 'Identifier',
                  start: 376,
                  end: 380,
                  name: 'apis'
                }
              }
            ]
          },
          init: {
            type: 'CallExpression',
            start: 385,
            end: 403,
            callee: {
              type: 'Identifier',
              start: 385,
              end: 392,
              name: 'require'
            },
            arguments: [
              {
                type: 'Literal',
                start: 393,
                end: 402,
                value: '@/share',
                raw: "'@/share'"
              }
            ],
            optional: false
          }
        }
      ],
      kind: 'const'
    },
    {
      type: 'VariableDeclaration',
      start: 416,
      end: 448,
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 422,
          end: 447,
          id: {
            type: 'Identifier',
            start: 422,
            end: 427,
            name: 'tests'
          },
          init: {
            type: 'CallExpression',
            start: 430,
            end: 447,
            callee: {
              type: 'Identifier',
              start: 430,
              end: 437,
              name: 'require'
            },
            arguments: [
              {
                type: 'Literal',
                start: 438,
                end: 446,
                value: '@tests',
                raw: "'@tests'"
              }
            ],
            optional: false
          }
        }
      ],
      kind: 'const'
    },
    {
      type: 'VariableDeclaration',
      start: 449,
      end: 486,
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 455,
          end: 486,
          id: {
            type: 'ObjectPattern',
            start: 455,
            end: 466,
            properties: [
              {
                type: 'Property',
                start: 459,
                end: 464,
                method: false,
                shorthand: true,
                computed: false,
                key: {
                  type: 'Identifier',
                  start: 459,
                  end: 464,
                  name: 'mocks'
                },
                kind: 'init',
                value: {
                  type: 'Identifier',
                  start: 459,
                  end: 464,
                  name: 'mocks'
                }
              }
            ]
          },
          init: {
            type: 'CallExpression',
            start: 469,
            end: 486,
            callee: {
              type: 'Identifier',
              start: 469,
              end: 476,
              name: 'require'
            },
            arguments: [
              {
                type: 'Literal',
                start: 477,
                end: 485,
                value: '@tests',
                raw: '"@tests"'
              }
            ],
            optional: false
          }
        }
      ],
      kind: 'const'
    },
    {
      type: 'VariableDeclaration',
      start: 487,
      end: 538,
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 493,
          end: 538,
          id: {
            type: 'ObjectPattern',
            start: 493,
            end: 512,
            properties: [
              {
                type: 'Property',
                start: 497,
                end: 501,
                method: false,
                shorthand: true,
                computed: false,
                key: {
                  type: 'Identifier',
                  start: 497,
                  end: 501,
                  name: 'data'
                },
                kind: 'init',
                value: {
                  type: 'Identifier',
                  start: 497,
                  end: 501,
                  name: 'data'
                }
              },
              {
                type: 'Property',
                start: 505,
                end: 510,
                method: false,
                shorthand: true,
                computed: false,
                key: {
                  type: 'Identifier',
                  start: 505,
                  end: 510,
                  name: 'dummy'
                },
                kind: 'init',
                value: {
                  type: 'Identifier',
                  start: 505,
                  end: 510,
                  name: 'dummy'
                }
              }
            ]
          },
          init: {
            type: 'CallExpression',
            start: 515,
            end: 538,
            callee: {
              type: 'Identifier',
              start: 515,
              end: 522,
              name: 'require'
            },
            arguments: [
              {
                type: 'Literal',
                start: 523,
                end: 537,
                value: '@tests/mocks',
                raw: '"@tests/mocks"'
              }
            ],
            optional: false
          }
        }
      ],
      kind: 'const'
    },
    {
      type: 'ExpressionStatement',
      start: 560,
      end: 738,
      expression: {
        type: 'AssignmentExpression',
        start: 560,
        end: 738,
        operator: '=',
        left: {
          type: 'MemberExpression',
          start: 560,
          end: 574,
          object: {
            type: 'Identifier',
            start: 560,
            end: 566,
            name: 'module'
          },
          property: {
            type: 'Identifier',
            start: 567,
            end: 574,
            name: 'exports'
          },
          computed: false,
          optional: false
        },
        right: {
          type: 'ObjectExpression',
          start: 577,
          end: 738,
          properties: [
            {
              type: 'Property',
              start: 594,
              end: 600,
              method: false,
              shorthand: true,
              computed: false,
              key: { type: 'Identifier', start: 594, end: 600, name: 'consts' },
              kind: 'init',
              value: { type: 'Identifier', start: 594, end: 600, name: 'consts' }
            },
            {
              type: 'Property',
              start: 604,
              end: 608,
              method: false,
              shorthand: true,
              computed: false,
              key: { type: 'Identifier', start: 604, end: 608, name: 'urls' },
              kind: 'init',
              value: { type: 'Identifier', start: 604, end: 608, name: 'urls' }
            },
            {
              type: 'Property',
              start: 612,
              end: 615,
              method: false,
              shorthand: true,
              computed: false,
              key: { type: 'Identifier', start: 612, end: 615, name: 'url' },
              kind: 'init',
              value: { type: 'Identifier', start: 612, end: 615, name: 'url' }
            },
            {
              type: 'Property',
              start: 619,
              end: 622,
              method: false,
              shorthand: true,
              computed: false,
              key: { type: 'Identifier', start: 619, end: 622, name: 'api' },
              kind: 'init',
              value: { type: 'Identifier', start: 619, end: 622, name: 'api' }
            },
            {
              type: 'Property',
              start: 638,
              end: 642,
              method: false,
              shorthand: true,
              computed: false,
              key: { type: 'Identifier', start: 638, end: 642, name: 'logs' },
              kind: 'init',
              value: { type: 'Identifier', start: 638, end: 642, name: 'logs' }
            },
            {
              type: 'Property',
              start: 646,
              end: 650,
              method: false,
              shorthand: true,
              computed: false,
              key: { type: 'Identifier', start: 646, end: 650, name: 'info' },
              kind: 'init',
              value: { type: 'Identifier', start: 646, end: 650, name: 'info' }
            },
            {
              type: 'Property',
              start: 667,
              end: 672,
              method: false,
              shorthand: true,
              computed: false,
              key: { type: 'Identifier', start: 667, end: 672, name: 'login' },
              kind: 'init',
              value: { type: 'Identifier', start: 667, end: 672, name: 'login' }
            },
            {
              type: 'Property',
              start: 676,
              end: 681,
              method: false,
              shorthand: true,
              computed: false,
              key: { type: 'Identifier', start: 676, end: 681, name: 'share' },
              kind: 'init',
              value: { type: 'Identifier', start: 676, end: 681, name: 'share' }
            },
            {
              type: 'Property',
              start: 685,
              end: 689,
              method: false,
              shorthand: true,
              computed: false,
              key: { type: 'Identifier', start: 685, end: 689, name: 'apis' },
              kind: 'init',
              value: { type: 'Identifier', start: 685, end: 689, name: 'apis' }
            },
            {
              type: 'Property',
              start: 705,
              end: 710,
              method: false,
              shorthand: true,
              computed: false,
              key: { type: 'Identifier', start: 705, end: 710, name: 'tests' },
              kind: 'init',
              value: { type: 'Identifier', start: 705, end: 710, name: 'tests' }
            },
            {
              type: 'Property',
              start: 714,
              end: 719,
              method: false,
              shorthand: true,
              computed: false,
              key: { type: 'Identifier', start: 714, end: 719, name: 'mocks' },
              kind: 'init',
              value: { type: 'Identifier', start: 714, end: 719, name: 'mocks' }
            },
            {
              type: 'Property',
              start: 723,
              end: 727,
              method: false,
              shorthand: true,
              computed: false,
              key: { type: 'Identifier', start: 723, end: 727, name: 'data' },
              kind: 'init',
              value: { type: 'Identifier', start: 723, end: 727, name: 'data' }
            },
            {
              type: 'Property',
              start: 731,
              end: 736,
              method: false,
              shorthand: true,
              computed: false,
              key: { type: 'Identifier', start: 731, end: 736, name: 'dummy' },
              kind: 'init',
              value: { type: 'Identifier', start: 731, end: 736, name: 'dummy' }
            }
          ]
        }
      }
    }
  ],
  sourceType: 'script'
})

const literal: Literal = {
  type: 'Literal',
  start: 0,
  end: 0
}

const getBody = (
  idx = 0
): {
  callee: CallExpression
  args: Literal
} => {
  const body = program().body as VariableDeclaration[]
  const callee = body[idx].declarations[0].init as CallExpression
  const args = callee.arguments[0] as Literal
  return { callee, args }
}

// case-1

const path1: string = normalize(resolve('./src/index.js'))

const expected1: string = '' +
`const consts = require('./consts');
const {urls} = require('./consts');
const url = require('./consts/urls');
const {api} = require('./consts/urls');
const {logs} = require('./utils');
const info = require('./utils/logs/info');
const {login} = require('../share/services');
const share = require('../share');
const {apis} = require('./share');
const tests = require('../tests');
const {mocks} = require('../tests');
const {data, dummy} = require('../tests/mocks');
module.exports = {
    consts,
    urls,
    url,
    api,
    logs,
    info,
    login,
    share,
    apis,
    tests,
    mocks,
    data,
    dummy
};`

const source1 = (): Source => ({ path: path1, code })

const case1 = { code, path: path1, expected: expected1, source: source1 }

// case-2

const path2: string = normalize(resolve('./src/main/index.js'))

const expected2: string = '' +
`const consts = require('../consts');
const {urls} = require('../consts');
const url = require('../consts/urls');
const {api} = require('../consts/urls');
const {logs} = require('../utils');
const info = require('../utils/logs/info');
const {login} = require('../share/services');
const share = require('../share');
const {apis} = require('../share');
const tests = require('../../tests');
const {mocks} = require('../../tests');
const {data, dummy} = require('../../tests/mocks');
module.exports = {
    consts,
    urls,
    url,
    api,
    logs,
    info,
    login,
    share,
    apis,
    tests,
    mocks,
    data,
    dummy
};`

const source2 = (): Source => ({ path: path2, code, type })

const case2 = { code, path: path2, expected: expected2, source: source2 }

// exports

export {
  type,
  code,
  program,
  literal,
  getBody,
  case1,
  case2
}
