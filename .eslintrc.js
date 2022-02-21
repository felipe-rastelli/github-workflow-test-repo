module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:prettier/recommended'],
  rules: {
    'import/order': ['warn', { 'newlines-between': 'always' }]
  }
}
