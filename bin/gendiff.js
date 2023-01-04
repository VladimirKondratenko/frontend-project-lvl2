#!/usr/bin/env node
import program from 'commander';
import { readFileSync } from 'node:fs';
import genDiff  from '../src/index.js'

program
  .version('0.1')  
  .description('Compares two configuration files and shows a difference.')  
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    //console.log(readFileSync(filepath1, 'utf-8'), readFileSync(filepath2, 'utf-8'));
    genDiff(readFileSync(filepath1, 'utf-8'),readFileSync(filepath2, 'utf-8'));
  });

program.parse();
