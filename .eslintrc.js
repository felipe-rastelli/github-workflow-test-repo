module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:prettier/recommended'],
  rules: {
    'import/order': ['error', { 'newlines-between': 'always' }]
  }
}
