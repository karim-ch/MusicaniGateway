const path = require('path');

module.exports = {
    "env": {
        "es6": true,
        "node": true,
    },
  "settings": {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, './src')],
      },
      alias: {
        map: [
          ['utils', './src/utils'],
        ],
      },
    },
  },
    "extends": [
      "airbnb-base",
      "eslint-config-prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "utils":  "readonly"
    },
    "plugins": ["prettier"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
      "camelcase": [
        1,
        {
          "properties": "always"
        }
      ],
        "no-console": 1,
        "comma-dangle": [
          2,
          "always-multiline"
        ],
        "indent": [
          2,
          2,
          {
            "SwitchCase": 1
          }
        ],
        "linebreak-style": 0,
        "max-len": ["error", {"code": 100, "ignoreUrls": true}],
        "no-mixed-operators": "error",
        "prettier/prettier": "error",
        "prefer-arrow-callback": "error",
        "no-var": "error"
      }
};
