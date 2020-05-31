module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier/react',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser:'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    "jsx-a11y"

  ],
  rules: {
    'prettier/prettier': 'warn',
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    'react/prefer-stateless-function': [1, { 'ignorePureComponents': true }],
    "import/prefer-default-export": "off",
    "global-require":"off",
    "eqeqeq": "off",
    "no-param-reassign":"off"


  }
};
