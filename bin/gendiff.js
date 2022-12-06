#!/usr/bin/env node
import program from 'commander';
import { readFileSync } from 'node:fs';

program
  .version('0.1')  
  .description('Compares two configuration files and shows a difference.')  
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    console.log(readFileSync(filepath1, 'utf-8'), readFileSync(filepath2, 'utf-8'))
  });

program.parse();

// const options = program.opts();
// console.log('options', options);

// const path = require('path');
// path1 = path.resolve("users", "..", "readme.md");
// console.log('test2', fs.readFileSync('<file1>'));
// console.log('test', program.parse());
// console.log('path', path.resolve("file1.json"));

