#!/usr/bin/env node
import program from 'commander';
import { readFileSync } from 'fs';

program
  .version('0.1')  
  .description('Compares two configuration files and shows a difference.')  
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')

program.parse();
console.log('test');
// console.log('test', readFileSync(filepath1));
