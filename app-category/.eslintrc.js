module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'dot-location': [ 'error', 'property' ],
    'arrow-spacing': [
      'error',
      {
        'before': true,
        'after': true,
      },
    ],
    'curly': [ 'error', 'multi-line' ],
    'no-eval': [ 'error' ],
    'no-unreachable': 'error',
    'space-unary-ops': [
      'error',
      {
        'words': true,
        'nonwords': false,
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        'line': {
          'markers': [ '*package', '!', '/', ',', '=' ],
        },
        'block': {
          'balanced': true,
          'markers': [
            '*package',
            '!',
            ',',
            ':',
            '::',
            'flow-include',
          ],
          'exceptions': [ '*' ],
        },
      },
    ],
    'yield-star-spacing': [ 'error', 'both' ],
    'yoda': [ 'error', 'never' ],
    'wrap-iife': [
      'error',
      'any',
      {
        'functionPrototypeMethods': true,
      },
    ],
    'space-infix-ops': 'error',
    'template-tag-spacing': [ 'error', 'never' ],
    'no-template-curly-in-string': 'error',
    'no-multi-str': 'error',
    'no-return-assign': [ 'error', 'except-parens' ],
    'no-new': 'error',
    'no-this-before-super': 'error',
    'no-useless-call': 'error',
    'no-whitespace-before-property': 'error',
    'no-useless-computed-key': 'error',
    'no-proto': 'error',
    'no-new-func': 'error',
    'no-useless-return': 'error',
    'no-new-object': 'error',
    'no-use-before-define': [
      'error',
      {
        'functions': false,
        'classes': false,
        'variables': true,
      },
    ],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-unused-expressions': [
      'error',
      {
        'allowShortCircuit': true,
        'allowTernary': true,
        'allowTaggedTemplates': true,
      },
    ],
    'no-unneeded-ternary': [
      'error',
      {
        'defaultAssignment': false,
      },
    ],
    'no-new-wrappers': 'error',
    'no-undef-init': 'error',
    'key-spacing': 'error',
    'no-extend-native': 'error',
    'operator-linebreak': [ 'error', 'after' ],
    'prefer-spread': 'error',
    'default-case': 'error',
    'padded-blocks': [ 'error', 'never' ],
    'no-extra-bind': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': [ 'error', {
      'max': 2,
      'maxEOF': 0,
    } ],
    'no-trailing-spaces': [ 'error', {
      'ignoreComments': true,
    } ],
    'strict': [ 'error', 'global' ],
    'semi-spacing': [
      'error',
      {
        'before': false,
        'after': true,
      },
    ],
    'block-spacing': [ 'error', 'always' ],
    'switch-colon-spacing': 'error',
    'eol-last': 'error',
    'brace-style': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    'semi': [ 'error', 'always' ],
    'rest-spread-spacing': [ 'error' ],
    'indent': [ 'error', 2, {
      'SwitchCase': 1,
    } ],
    'keyword-spacing': 'error',
    'linebreak-style': [ 'error', 'unix' ],
    'no-bitwise': 'error',
    'no-mixed-operators': [
      'error',
      {
        'groups': [
          [ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
          [ '&&', '||' ],
          [ 'in', 'instanceof' ],
        ],
        'allowSamePrecedence': true,
      },
    ],
    'comma-style': 'error',
    'comma-dangle': [ 'error', 'always-multiline' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'quotes': [ 'error', 'single' ],
    'max-len': [
      'error',
      {
        'code': 120,
        'comments': 120,
        'ignoreUrls': true,
        'ignoreComments': true,
      },
    ],
    'no-var': [ 'error' ],
    'prefer-const': [ 'error' ],
    'one-var': [ 'error', 'never' ],
    'max-statements-per-line': [
      'error',
      {
        'max': 1,
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        'blankLine': 'always',
        'prev': 'block-like',
        'next': '*',
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'block-like',
      },
      {
        'blankLine': 'always',
        'prev': 'function',
        'next': '*',
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'cjs-export',
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'class',
      },
      {
        'blankLine': 'always',
        'prev': 'class',
        'next': '*',
      },
    ],
    'camelcase': [
      'warn',
      {
        'properties': 'never',
      },
    ],
    'new-parens': 'error',
    'new-cap': [
      'error',
      {
        'newIsCap': true,
        'capIsNew': false,
      },
    ],
    'no-labels': [
      'error',
      {
        'allowLoop': true,
        'allowSwitch': false,
      },
    ],
    'no-caller': 'error',
    'no-iterator': 'error',
    'no-lone-blocks': 'error',
    'no-implied-eval': 'error',
    'comma-spacing': 'error',
    'func-call-spacing': 'error',
    'space-before-function-paren': [ 'error', 'always' ],
    'space-before-blocks': [ 'error', 'always' ],
    'accessor-pairs': 'error',
    'space-in-parens': [ 'error', 'never' ],
    'eqeqeq': [ 'error' ],
    'newline-per-chained-call': [ 'error' ],
    'global-require': [ 'error' ],
    'no-extra-boolean-cast': [ 'error' ],
    'no-console': [ 'warn' ],
    'generator-star-spacing': [
      'error',
      {
        'before': true,
        'after': true,
      },
    ],
  },
};
