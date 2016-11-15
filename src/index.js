#!/usr/bin/env node
import program from 'commander';
import chalk from 'chalk';
import { version } from '../package.json';
import naturalRegex from 'natural-regex';

const log = (color, text) => {
  //eslint-disable-next-line
  console.log(chalk.bold[color](text));
};

const error = log.bind(null, 'red');
const success = log.bind(null, 'green');

const exit = ({ code = 0, message } = {}) => {
  if (code === 0 && message) {
    success(`
      ${message}
    `);
  } else if (code !== 0 && message) {
    error(`
      ${message}
    `);
  }
  process.exit(code);
};

program
  .version(version)
  .option('-p, --parse <code>', 'Parse the given natural-regex')
  .option('-o, --object', 'Specify that the output will be a RegExp instead of a string')
  .parse(process.argv);

if (typeof program.parse !== 'string') {
  program.outputHelp();
  exit();
}

try {
  const stringRegex = naturalRegex.parse(program.parse).replace('\\', '\\\\');
  if (program.object) {
    exit({
      message: `
      Literal notation: ${naturalRegex.from(program.parse).toString()}
      Constructor notation: new RegExp('${stringRegex}')
      `,
    });
  } else {
    exit({
      message: stringRegex,
    });
  }
} catch (ex) {
  exit({
    code: 1,
    message: `
    Error parsing the given code:

    ${ex.message}
    `,
  });
}

