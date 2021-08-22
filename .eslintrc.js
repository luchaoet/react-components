const { getESLintConfig } = require('@iceworks/spec');

module.exports = getESLintConfig('react-ts', {
  rules: {
    'react/jsx-filename-extension': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'no-console': 0,
    'object-curly-spacing': 0,
    'eol-last': 0,
    'comma-dangle': 0,
    '@typescript-eslint/semi': 0,
  },
});
