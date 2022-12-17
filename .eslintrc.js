module.exports = {
  env: {
    browser: true
  },
  globals: {
    localStorage: true,
    window: true,
    Promise: true,
    document: true,
    clearTimeout: true,
    setTimeout: true,
    require: true
  },
  parser: '@babel/eslint-parser',
  root: true,
  extends: [
    'airbnb',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: ['import', 'prettier', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-filename-extension': ['off'],
    'react/jsx-one-expression-per-line': ['off'],
    'react/function-component-definition': ['off'],
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'warn',
    'no-constructor-return': 'off',
    'consistent-return': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-shadow': 'warn',
    'class-methods-use-this': 'warn',
    'default-param-last': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'import/no-cycle': 'off',
    'import/no-named-as-default': 'off',
    'react/no-unstable-nested-components': 'warn',
    'import/no-import-module-exports': 'off',
    camelcase: 'off',
    'import/extensions': ['warn', { js: 'never', jsx: 'never' }],
    'no-underscore-dangle': ['warn', { allowAfterThis: true }],
    'no-plusplus': 'off',
    'import/no-anonymous-default-export': [
      'warn',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true, // The true value here is for backward compatibility
        allowLiteral: false,
        allowObject: false
      }
    ]
  }
}
