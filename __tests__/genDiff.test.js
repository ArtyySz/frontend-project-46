import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";

import pathFile from "../src/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);// текущ. местоположение

const getFixturesPath = (filePath) => path.join(__dirname, '..', '__fixtures__', filePath);

const fileData = (filePath) => fs.readFileSync(getFixturesPath(filePath), 'utf-8');

const referenceFlatFiles = fileData('flat-files-test.txt');

test('Flat JSON', () => {
    const file1 =  getFixturesPath('file1.json');
    const file2 = getFixturesPath('file2.json');

    expect(pathFile(file1, file2)).toEqual(referenceFlatFiles);
})