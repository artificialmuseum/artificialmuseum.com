import { is } from '@magic/test'
import * as app from '../src/app.mjs'

export default [
  { fn: () => app, expect: is.object },
  { fn: () => app.state, expect: is.object },
]
