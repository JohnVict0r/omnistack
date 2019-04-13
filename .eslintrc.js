module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["prettier", "airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "func-names": "off",
    "no-underscore-dangle": "off"
  }
};
