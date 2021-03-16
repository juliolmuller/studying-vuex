
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@lacussoft',
  ],
  ignorePatterns: [
    '**/*.htm[l]',
  ],
  plugins: [
    'vue',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  rules: {
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'no-console': 'warn',
    'no-debugger': 'warn',
  },
}
