module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
    },
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint/eslint-plugin',
  ],
  'extends': [
    '@team-griffin/eslint-config/frontend-config/core',
  ],
  'settings': {
    'import/ignore': [
      'svg\'$',
    ],
  },
  'rules': {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
