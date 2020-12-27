import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import babel from 'rollup-plugin-babel';

import { map, mapValues } from 'lodash';

const packages = require('./package.json');

const { dependencies } = packages;

const external = map(dependencies, (mod, key) => key);
const globals = mapValues(dependencies, (mod, key) => key);

export default {
  input: 'src/server.js',
  output: {
    name: 'youtube-graphql-gateway',
    file: 'dist/bundle.js',
    format: 'cjs',
    globals,
  },
  external,
  plugins: [babel(), commonjs(), resolve()],
};
