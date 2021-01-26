papyrus-cli
===========

The only thing you need for data transfing

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/papyrus-cli.svg)](https://npmjs.org/package/papyrus-cli)
[![Downloads/week](https://img.shields.io/npm/dw/papyrus-cli.svg)](https://npmjs.org/package/papyrus-cli)
[![License](https://img.shields.io/npm/l/papyrus-cli.svg)](https://github.com/ruddha2001/papyrus-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g papyrus-cli
$ papyrus COMMAND
running command...
$ papyrus (-v|--version|version)
papyrus-cli/0.0.0-alpha.0 linux-x64 node-v14.15.4
$ papyrus --help [COMMAND]
USAGE
  $ papyrus COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`papyrus hello [FILE]`](#papyrus-hello-file)
* [`papyrus help [COMMAND]`](#papyrus-help-command)

## `papyrus hello [FILE]`

describe the command here

```
USAGE
  $ papyrus hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ papyrus hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/ruddha2001/papyrus-cli/blob/v0.0.0-alpha.0/src/commands/hello.ts)_

## `papyrus help [COMMAND]`

display help for papyrus

```
USAGE
  $ papyrus help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_
<!-- commandsstop -->
