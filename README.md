# papyrus-cli

The only thing you need for data transfering

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/papyrus-cli.svg)](https://npmjs.org/package/papyrus-cli)
[![Downloads/week](https://img.shields.io/npm/dw/papyrus-cli.svg)](https://npmjs.org/package/papyrus-cli)
[![License](https://img.shields.io/npm/l/papyrus-cli.svg)](https://github.com/ruddha2001/papyrus-cli/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g papyrus-cli
$ papyrus COMMAND
running command...
$ papyrus (-v|--version|version)
papyrus-cli/0.1.0-alpha.0 linux-x64 node-v14.15.4
$ papyrus --help [COMMAND]
USAGE
  $ papyrus COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`papyrus file OPERATION FILE`](#papyrus-file-operation-file)
- [`papyrus help [COMMAND]`](#papyrus-help-command)

## `papyrus file OPERATION FILE`

Transfer any file you want

```
USAGE
  $ papyrus file OPERATION FILE

ARGUMENTS
  OPERATION  Specify the upload or download operation. Enter either 'upload' or 'download'.
  FILE       The path of the file to be uploaded or the title of the file to be downloaded.

EXAMPLES
  $ papyrus file upload pathToFile.extension
  $ papyrus file download title
```

_See code: [src/commands/file.ts](https://github.com/ruddha2001/papyrus-cli/blob/v0.1.0-alpha.0/src/commands/file.ts)_

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
