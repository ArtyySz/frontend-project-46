#!/usr/bin/env node

import fs from 'fs';
import * as path from 'node:path';
import process from 'node:process';

export function pathFile(filepath1, filepath2) {
    const one = path.resolve(process.cwd(), filepath1)
    const two = path.resolve(process.cwd(), filepath2)
    console.log(one, two)

    const file1 = JSON.parse(fs.readFileSync(one))  ;
    const file2 = JSON.parse(fs.readFileSync(two));
    console.log(file1, file2);
}