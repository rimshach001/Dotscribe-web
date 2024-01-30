const { resolve } = require('path');
const paths = resolve('.')

module.exports = {
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'promise',
    'prettier',
  ],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'prettier',
    "plugin:react/recommended",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    "prettier/prettier": [
      "error",
      { endOfLine: "auto" }
    ],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-prototype-builtins': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    'max-classes-per-file': 0,
    'no-console': 'warn',
    'prettier/prettier': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'consistent-return': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ]
      },
    ],
    'class-methods-use-this': 'off',
  },
  settings: {
    'import/extensions': ['.js', '.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
      alias: {
        map: paths,
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
      }
    },
  },
}