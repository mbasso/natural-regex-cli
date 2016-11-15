# natural-regex-cli-cli

[![npm version](https://img.shields.io/npm/v/natural-regex-cli.svg)](https://www.npmjs.com/package/natural-regex-cli)
[![npm downloads](https://img.shields.io/npm/dm/natural-regex-cli.svg?maxAge=2592000)](https://www.npmjs.com/package/natural-regex-cli)

> Command line tool for [natural-regex](https://github.com/mbasso/natural-regex)

[natural-regex-cli](https://github.com/mbasso/natural-regex-cli) is a parser that allows you to write regular expressions in natural language.
This means that you can write self documentating regex using a simpler syntax that can be undestood by anyone.
No more pain with validations and other stuff.

## Installation

You can install natural-regex-cli using [npm](https://www.npmjs.com/package/natural-regex-cli):

```bash
npm install -g natural-regex-cli
```

## Usage

Once you have installed natural-regex-cli, you can run the following in the terminal:

```bash
$ natural-regex --parse 'starts with "Lorem", then "foo" or "bar".' --object
    Literal notation: /^(Lorem)(foo|bar)/
    Constructor notation: new RegExp('^(Lorem)(foo|bar)')
```

this will print t

NaturalRegex also includes a [command line tool](https://github.com/mbasso/natural-regex-cli-cli), check [this](https://github.com/mbasso/natural-regex-cli/wiki/Getting-Started) for more information.

## Documentation

Visit the [Cli page](https://github.com/mbasso/natural-regex/wiki/Cli) in [natural-regex Wiki](https://github.com/mbasso/natural-regex/wiki) for the full documentation.

## Change Log

This project adheres to [Semantic Versioning](http://semver.org/).  
Every release, along with the migration instructions, is documented on the Github [Releases](https://github.com/mbasso/natural-regex-cli/releases) page.

## Authors
**Matteo Basso**
- [github/mbasso](https://github.com/mbasso)
- [@teo_basso](https://twitter.com/teo_basso)

## Copyright and License
Copyright (c) 2016, Matteo Basso.

natural-regex-cli source code is licensed under the [MIT License](https://github.com/mbasso/natural-regex-cli/blob/master/LICENSE.md).
