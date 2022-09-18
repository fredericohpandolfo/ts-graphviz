/* eslint-disable jest/valid-title */
import fs from 'node:fs';
import path from 'node:path';
import glob from 'glob';
import 'jest-specific-snapshot';

import { parse, SyntaxError } from '../index.js';

const dirname = path.dirname(new URL(import.meta.url).pathname);

const files = glob.sync(`${dirname}/e2e/*`).sort();

for (const file of files) {
  const title = path.basename(file);
  const dot = fs.readFileSync(file, 'utf-8').toString();
  const snapshot = path.resolve(dirname, '__snapshots__', title);

  test(title, () => {
    try {
      expect(parse(dot)).toMatchSpecificSnapshot(snapshot);
    } catch (e) {
      if (e instanceof SyntaxError) {
        console.log(e.location);
      }
      throw e;
    }
  });
}