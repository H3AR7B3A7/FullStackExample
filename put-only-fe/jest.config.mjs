import tsconfig from './tsconfig.json' assert { type : 'json' }
import { pathsToModuleNameMapper } from 'ts-jest'

export default {
  preset: 'jest-preset-angular/presets/defaults-esm',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  globalSetup: 'jest-preset-angular/global-setup.mjs',
  moduleNameMapper: {
    ...pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
    prefix: '<rootDir>/',
    tslib: 'tslib/tslib.es6.js',
    '^rxjs(/operators)?$': '<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js',
    '^rxjs/testing$': '<rootDir>/node_modules/rxjs/dist/cjs/testing/index.js',
  },
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      useESM: true,
    },
  },
  maxWorkers: '8',
  transformIgnorePatterns: ['node_modules/(?!(tslib|.*.mjs))']
};
