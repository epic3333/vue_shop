module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  parserOptions: {
  },
  rules: {
    'import/extensions': [0],
    'max-len': ['error', 120],
  },
};
