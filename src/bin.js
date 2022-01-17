#!/bin/env node

import path from 'path'

import cli from '@magic/cli'
import log from '@magic/log'
import fs from '@magic/fs'

const cwd = process.cwd()

const cliConfig = {
  options: [
    ['--dir', '-d', '-i'],
    ['--out', '-o']
  ],
  help: {
    name: 'Artificial Museum production builder',
    header: 'builds artificialmuseum.com from local source.',
    options: {
      '--dir': 'directory to copy from',
      '--out': 'directory to copy to',
    },
  },
  default: {
    '--dir': path.join('..', 'ar', 'docs'),
    '--out': 'docs'
  },
  example: `
# usage:
./src/bin.js

# custom dir:
./src/bin.js --dir ../path/to/docs
`,
}

const run = async () => {
  const { args = {} } = cli(cliConfig)

  if (!args.dir) {
    args.dir = path.join(cwd, '..', 'ar', 'docs')
  } else if (!args.dir.startsWith(cwd)) {
    args.dir = path.join(cwd, args.dir)
  }

  if (!args.out) {
    args.out = path.join(cwd, 'docs')
  } else if (!args.out.startsWith(cwd)) {
    args.out = path.join(cwd, args.out)
  }

  await fs.mkdirp(args.out)

  const files = await fs.getFiles(args.dir)

  await Promise.all(files.map(async file => {
    const content = await fs.readFile(file)

    const dest = file.replace(args.dir, args.out)
    const dir = path.dirname(dest)
    await fs.mkdirp(dir)

    await fs.writeFile(dest, content)
  }))

  const cnamePath = path.join(cwd, 'src', 'CNAME')
  const CNAME = await fs.readFile(cnamePath)
  await fs.writeFile(path.join(args.out, 'CNAME'), CNAME)

  log.success('@artificialmuseum/prod:', 'copied all needed files')
}

run()

process
  .on('unhandledRejection', error => {
    log.error('unhandled rejection', error)
    process.exit()
  })
  .on('uncaughtException', error => {
    log.error('uncaught exception', error)
    process.exit()
  })
