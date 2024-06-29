import type { Literal, Options, Program } from 'acorn'

import type { Source } from '@types'

import { resolve } from 'node:path'

export const type: Options['sourceType'] = 'module'

export const path: string = resolve('./src/main/index.mjs')

export const pathInSameDir: string = resolve('./src/index.mjs')

export const code: string = `
/**
 * Imports
 */

// @consts
import * as consts from '@consts'
import { urls as url } from "@consts"
import * as urls from '@consts/urls/';
import { api } from "@consts/urls/";

// @utils
import utils, { logs } from '@utils//'
import info from "@utils/logs/info//";

// @/share
import { login } from '../share/services';
import * as share from "../share"
import sanity, { apis } from '@/share';

// @tests
import * as tests from '@tests';
import {
  mocks
} from "@tests"
import mock, {
  data,
  dummy
} from "@tests/mocks"

/**
 * Exports
 */

export {
  // @consts
  consts,
  url,
  urls,
  api,
  // @utils
  utils,
  logs,
  info,
  // @/share
  login,
  share,
  sanity,
  apis,
  // @tests
  tests,
  mocks,
  mock,
  data,
  dummy
}
`

export const program = (): Program => ({
  type: 'Program',
  start: 0,
  end: 739,
  body: [
    {
      type: 'ImportDeclaration',
      start: 32,
      end: 65,
      specifiers: [
        {
          type: 'ImportNamespaceSpecifier',
          start: 39,
          end: 50,
          local: {
            type: 'Identifier',
            start: 44,
            end: 50,
            name: 'consts'
          }
        }
      ],
      source: {
        type: 'Literal',
        start: 56,
        end: 65,
        value: '@consts',
        raw: "'@consts'"
      }
    },
    {
      type: 'ImportDeclaration',
      start: 66,
      end: 103,
      specifiers: [
        {
          type: 'ImportSpecifier',
          start: 75,
          end: 86,
          imported: {
            type: 'Identifier',
            start: 75,
            end: 79,
            name: 'urls'
          },
          local: {
            type: 'Identifier',
            start: 83,
            end: 86,
            name: 'url'
          }
        }
      ],
      source: {
        type: 'Literal',
        start: 94,
        end: 103,
        value: '@consts',
        raw: '"@consts"'
      }
    },
    {
      type: 'ImportDeclaration',
      start: 104,
      end: 141,
      specifiers: [
        {
          type: 'ImportNamespaceSpecifier',
          start: 111,
          end: 120,
          local: {
            type: 'Identifier',
            start: 116,
            end: 120,
            name: 'urls'
          }
        }
      ],
      source: {
        type: 'Literal',
        start: 126,
        end: 140,
        value: '@consts/urls/',
        raw: "'@consts/urls/'"
      }
    },
    {
      type: 'ImportDeclaration',
      start: 142,
      end: 177,
      specifiers: [
        {
          type: 'ImportSpecifier',
          start: 151,
          end: 154,
          imported: {
            type: 'Identifier',
            start: 151,
            end: 154,
            name: 'api'
          },
          local: {
            type: 'Identifier',
            start: 151,
            end: 154,
            name: 'api'
          }
        }
      ],
      source: {
        type: 'Literal',
        start: 162,
        end: 176,
        value: '@consts/urls/',
        raw: '"@consts/urls/"'
      }
    },
    {
      type: 'ImportDeclaration',
      start: 189,
      end: 225,
      specifiers: [
        {
          type: 'ImportDefaultSpecifier',
          start: 196,
          end: 201,
          local: {
            type: 'Identifier',
            start: 196,
            end: 201,
            name: 'utils'
          }
        },
        {
          type: 'ImportSpecifier',
          start: 205,
          end: 209,
          imported: {
            type: 'Identifier',
            start: 205,
            end: 209,
            name: 'logs'
          },
          local: {
            type: 'Identifier',
            start: 205,
            end: 209,
            name: 'logs'
          }
        }
      ],
      source: {
        type: 'Literal',
        start: 217,
        end: 225,
        value: '@utils//',
        raw: "'@utils//'"
      }
    },
    {
      type: 'ImportDeclaration',
      start: 226,
      end: 262,
      specifiers: [
        {
          type: 'ImportDefaultSpecifier',
          start: 233,
          end: 237,
          local: {
            type: 'Identifier',
            start: 233,
            end: 237,
            name: 'info'
          }
        }
      ],
      source: {
        type: 'Literal',
        start: 243,
        end: 261,
        value: '@utils/logs/info//',
        raw: '"@utils/logs/info//"'
      }
    },
    {
      type: 'ImportDeclaration',
      start: 275,
      end: 317,
      specifiers: [
        {
          type: 'ImportSpecifier',
          start: 284,
          end: 289,
          imported: {
            type: 'Identifier',
            start: 284,
            end: 289,
            name: 'login'
          },
          local: {
            type: 'Identifier',
            start: 284,
            end: 289,
            name: 'login'
          }
        }
      ],
      source: {
        type: 'Literal',
        start: 297,
        end: 316,
        value: '../share/services',
        raw: "'../share/services'"
      }
    },
    {
      type: 'ImportDeclaration',
      start: 318,
      end: 351,
      specifiers: [
        {
          type: 'ImportNamespaceSpecifier',
          start: 325,
          end: 335,
          local: {
            type: 'Identifier',
            start: 330,
            end: 335,
            name: 'share'
          }
        }
      ],
      source: {
        type: 'Literal',
        start: 341,
        end: 351,
        value: '../share',
        raw: '"../share"'
      }
    },
    {
      type: 'ImportDeclaration',
      start: 352,
      end: 391,
      specifiers: [
        {
          type: 'ImportDefaultSpecifier',
          start: 359,
          end: 365,
          local: {
            type: 'Identifier',
            start: 359,
            end: 365,
            name: 'sanity'
          }
        },
        {
          type: 'ImportSpecifier',
          start: 369,
          end: 373,
          imported: {
            type: 'Identifier',
            start: 369,
            end: 373,
            name: 'apis'
          },
          local: {
            type: 'Identifier',
            start: 369,
            end: 373,
            name: 'apis'
          }
        }
      ],
      source: {
        type: 'Literal',
        start: 381,
        end: 390,
        value: '@/share',
        raw: "'@/share'"
      }
    },
    {
      type: 'ImportDeclaration',
      start: 403,
      end: 435,
      specifiers: [
        {
          type: 'ImportNamespaceSpecifier',
          start: 410,
          end: 420,
          local: {
            type: 'Identifier',
            start: 415,
            end: 420,
            name: 'tests'
          }
        }
      ],
      source: {
        type: 'Literal',
        start: 426,
        end: 434,
        value: '@tests',
        raw: "'@tests'"
      }
    },
    {
      type: 'ImportDeclaration',
      start: 436,
      end: 468,
      specifiers: [
        {
          type: 'ImportSpecifier',
          start: 447,
          end: 452,
          imported: {
            type: 'Identifier',
            start: 447,
            end: 452,
            name: 'mocks'
          },
          local: {
            type: 'Identifier',
            start: 447,
            end: 452,
            name: 'mocks'
          }
        }
      ],
      source: {
        type: 'Literal',
        start: 460,
        end: 468,
        value: '@tests',
        raw: '"@tests"'
      }
    },
    {
      type: 'ImportDeclaration',
      start: 469,
      end: 521,
      specifiers: [
        {
          type: 'ImportDefaultSpecifier',
          start: 476,
          end: 480,
          local: {
            type: 'Identifier',
            start: 476,
            end: 480,
            name: 'mock'
          }
        },
        {
          type: 'ImportSpecifier',
          start: 486,
          end: 490,
          imported: {
            type: 'Identifier',
            start: 486,
            end: 490,
            name: 'data'
          },
          local: {
            type: 'Identifier',
            start: 486,
            end: 490,
            name: 'data'
          }
        },
        {
          type: 'ImportSpecifier',
          start: 494,
          end: 499,
          imported: {
            type: 'Identifier',
            start: 494,
            end: 499,
            name: 'dummy'
          },
          local: {
            type: 'Identifier',
            start: 494,
            end: 499,
            name: 'dummy'
          }
        }
      ],
      source: {
        type: 'Literal',
        start: 507,
        end: 521,
        value: '@tests/mocks',
        raw: '"@tests/mocks"'
      }
    },
    {
      type: 'ExportNamedDeclaration',
      start: 543,
      end: 738,
      declaration: null,
      specifiers: [
        {
          type: 'ExportSpecifier',
          start: 567,
          end: 573,
          local: {
            type: 'Identifier',
            start: 567,
            end: 573,
            name: 'consts'
          },
          exported: {
            type: 'Identifier',
            start: 567,
            end: 573,
            name: 'consts'
          }
        },
        {
          type: 'ExportSpecifier',
          start: 577,
          end: 580,
          local: {
            type: 'Identifier',
            start: 577,
            end: 580,
            name: 'url'
          },
          exported: {
            type: 'Identifier',
            start: 577,
            end: 580,
            name: 'url'
          }
        },
        {
          type: 'ExportSpecifier',
          start: 584,
          end: 588,
          local: {
            type: 'Identifier',
            start: 584,
            end: 588,
            name: 'urls'
          },
          exported: {
            type: 'Identifier',
            start: 584,
            end: 588,
            name: 'urls'
          }
        },
        {
          type: 'ExportSpecifier',
          start: 592,
          end: 595,
          local: {
            type:
            'Identifier',
            start: 592,
            end: 595,
            name: 'api'
          },
          exported: {
            type: 'Identifier',
            start: 592,
            end: 595,
            name: 'api'
          }
        },
        {
          type: 'ExportSpecifier',
          start: 611,
          end: 616,
          local: {
            type: 'Identifier',
            start: 611,
            end: 616,
            name: 'utils'
          },
          exported: {
            type: 'Identifier',
            start: 611,
            end: 616,
            name: 'utils'
          }
        },
        {
          type: 'ExportSpecifier',
          start: 620,
          end: 624,
          local: {
            type: 'Identifier',
            start: 620,
            end: 624,
            name: 'logs'
          },
          exported: {
            type: 'Identifier',
            start: 620,
            end: 624,
            name: 'logs'
          }
        },
        {
          type: 'ExportSpecifier',
          start: 628,
          end: 632,
          local: {
            type: 'Identifier',
            start: 628,
            end: 632,
            name: 'info'
          },
          exported: {
            type: 'Identifier',
            start: 628,
            end: 632,
            name: 'info'
          }
        },
        {
          type: 'ExportSpecifier',
          start: 649,
          end: 654,
          local: {
            type: 'Identifier',
            start: 649,
            end: 654,
            name: 'login'
          },
          exported: {
            type: 'Identifier',
            start: 649,
            end: 654,
            name: 'login'
          }
        },
        {
          type: 'ExportSpecifier',
          start: 658,
          end: 663,
          local: {
            type: 'Identifier',
            start: 658,
            end: 663,
            name: 'share'
          },
          exported: {
            type: 'Identifier',
            start: 658,
            end: 663,
            name: 'share'
          }
        },
        {
          type: 'ExportSpecifier',
          start: 667,
          end: 673,
          local: {
            type: 'Identifier',
            start: 667,
            end: 673,
            name: 'sanity'
          },
          exported: {
            type: 'Identifier',
            start: 667,
            end: 673,
            name: 'sanity'
          }
        },
        {
          type: 'ExportSpecifier',
          start: 677,
          end: 681,
          local: {
            type: 'Identifier',
            start: 677,
            end: 681,
            name: 'apis'
          },
          exported: {
            type: 'Identifier',
            start: 677,
            end: 681,
            name: 'apis'
          }
        },
        {
          type: 'ExportSpecifier',
          start: 697,
          end: 702,
          local: {
            type: 'Identifier',
            start: 697,
            end: 702,
            name: 'tests'
          },
          exported: {
            type: 'Identifier',
            start: 697,
            end: 702,
            name: 'tests'
          }
        },
        {
          type: 'ExportSpecifier',
          start: 706,
          end: 711,
          local: {
            type: 'Identifier',
            start: 706,
            end: 711,
            name: 'mocks'
          },
          exported: {
            type: 'Identifier',
            start: 706,
            end: 711,
            name: 'mocks'
          }
        },
        {
          type: 'ExportSpecifier',
          start: 715,
          end: 719,
          local: {
            type: 'Identifier',
            start: 715,
            end: 719,
            name: 'mock'
          },
          exported: {
            type: 'Identifier',
            start: 715,
            end: 719,
            name: 'mock'
          }
        },
        {
          type: 'ExportSpecifier',
          start: 723,
          end: 727,
          local: {
            type: 'Identifier',
            start: 723,
            end: 727,
            name: 'data'
          },
          exported: {
            type: 'Identifier',
            start: 723,
            end: 727,
            name: 'data'
          }
        },
        {
          type: 'ExportSpecifier',
          start: 731,
          end: 736,
          local: {
            type: 'Identifier',
            start: 731,
            end: 736,
            name: 'dummy'
          },
          exported: {
            type: 'Identifier',
            start: 731,
            end: 736,
            name: 'dummy'
          }
        }
      ],
      source: null
    }
  ],
  sourceType: 'module'
})

export const literal: Literal = {
  type: 'Literal',
  start: 0,
  end: 0
}

export const expectedCode: string = '' +
`import * as consts from '../consts';
import { urls as url } from '../consts';
import * as urls from '../consts/urls';
import { api } from '../consts/urls';
import utils, { logs } from '../utils';
import info from '../utils/logs/info';
import { login } from '../share/services';
import * as share from '../share';
import sanity, { apis } from '../share';
import * as tests from '../../tests';
import { mocks } from '../../tests';
import mock, {
    data,
    dummy
} from '../../tests/mocks';
export {
    consts,
    url,
    urls,
    api,
    utils,
    logs,
    info,
    login,
    share,
    sanity,
    apis,
    tests,
    mocks,
    mock,
    data,
    dummy
};`

export const expectedCodeInSameDir: string = '' +
`import * as consts from './consts';
import { urls as url } from './consts';
import * as urls from './consts/urls';
import { api } from './consts/urls';
import utils, { logs } from './utils';
import info from './utils/logs/info';
import { login } from '../share/services';
import * as share from '../share';
import sanity, { apis } from './share';
import * as tests from '../tests';
import { mocks } from '../tests';
import mock, {
    data,
    dummy
} from '../tests/mocks';
export {
    consts,
    url,
    urls,
    api,
    utils,
    logs,
    info,
    login,
    share,
    sanity,
    apis,
    tests,
    mocks,
    mock,
    data,
    dummy
};`

export const source = (): Source => ({
  path,
  code,
  type
})

export const sourceInSameDir = (): Source => ({
  path: pathInSameDir,
  code
})
