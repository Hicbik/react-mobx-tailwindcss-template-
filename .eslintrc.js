// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'class-property',
    'simple-import-sort',
    'prettier',
    'react-hooks',
  ],
  globals: {
    window: true,
    process: true,
    document: true,
    Promise: true,
    navigator: true,
    sessionStorage: true,
    clearTimeout: true,
    setTimeout: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@src/*': './src/*',
          '@assets/*': './src/assets/*',
          '@utils/*': './src/utils/*',
          '@pages/*': './src/pages/*',
          '@layout/*': './src/layout/*',
          '@store/*': './src/store/*',
          '@component/*': './src/component/*',
          '@locales/*': './src/locales/*',
          '@router/*': './src/router/*',
          '@contexts/*': './src/contexts/*',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
        packages: ['packages/*'],
      },
    },
  },
  rules: {
    'prettier/prettier': [
      2,
      {
        endOfLine: 'auto',
        singleQuote: true,
      },
    ],
    'import/first': 0,
    'import/newline-after-import': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'simple-import-sort/imports': 1,
    'simple-import-sort/exports': 1,
    'no-console': 1,
    'no-debugger': 0,
    'no-var': 1,
    semi: 1,
    'no-irregular-whitespace': 0,
    'no-trailing-spaces': 1,
    'eol-last': 0,
    'no-unused-vars': [1, { vars: 'all', args: 'after-used' }],
    'no-underscore-dangle': 0,
    'no-alert': 1,
    'no-lone-blocks': 0,
    'no-class-assign': 1,
    'no-cond-assign': 1,
    'no-const-assign': 1,
    'no-delete-var': 1,
    'no-dupe-keys': 1,
    'no-duplicate-case': 1,
    'no-dupe-args': 1,
    'no-empty': 1,
    'no-func-assign': 1,
    'no-this-before-super': 1,
    'no-redeclare': 1,
    'no-spaced-func': 1,
    'no-undef': 2,
    camelcase: 0,
    'jsx-quotes': [1, 'prefer-double'],
    'react/display-name': 0,
    'react/forbid-prop-types': [1, { forbid: ['any'] }],
    'react/jsx-boolean-value': 1,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-curly-spacing': [1, { when: 'never', children: true }],
    'react/jsx-indent-props': [1, 2],
    'react/jsx-key': 1,
    'react/jsx-no-bind': 0,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 1,
    'react/jsx-pascal-case': 1,
    'react/jsx-sort-props': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-wrap-multilines': 1,
    'react/no-danger': 0,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1,
    'react/no-multi-comp': 0,
    'react/no-set-state': 0,
    'react/no-unknown-property': 1,
    'react/prefer-es6-class': 1,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/self-closing-comp': 1,
    'react/sort-comp': 1,
    'no-extra-boolean-cast': 0,
    'react/no-array-index-key': 0,
    'react/no-deprecated': 1,
    'react/jsx-equals-spacing': 1,
    'react/jsx-curly-brace-presence': 1,
    'react/function-component-definition': [
      1,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-unreachable': 1,
    'no-mixed-spaces-and-tabs': 0,
    'prefer-arrow-callback': [
      2,
      { allowNamedFunctions: false, allowUnboundThis: true },
    ],
    'arrow-parens': 1,
    'arrow-spacing': 0,
    'arrow-body-style': 1,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/eslint-recommended'],
      rules: {
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars-experimental': 0,
        'no-unused-vars': 0,
        'no-shadow': 0,
      },
    },
  ],
};