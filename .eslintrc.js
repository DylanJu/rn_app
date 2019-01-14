module.exports = {
  extends: "airbnb",

  env: {
    browser: true,
    node: true,
    jest: true,
  },

  plugins: [
    "react",
    "react-native",
  ],

  parser: "babel-eslint",

  rules: {
    "no-alert": 0,
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    // "react/no-did-mount-set-state": [true],
    "no-mixed-operators": [2, { allowSamePrecedence: true }],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to", "hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
    "prefer-destructuring": [
      "error",
      {
        array: false,
      },
    ],
    "max-len": ["error", 120], // TODO: length 120
    "react/destructuring-assignment": ["<enabled>", "never"],
    "react/jsx-one-expression-per-line": ["<disabled>", { "allow": "none"|"literal"|"single-child" }],
    "no-confusing-arrow": ["error", {"allowParens": true}]
  }
};
