// jest.config.js
const { defaults } = require("jest-config");
module.exports = {
  verbose: true,
  testURL: "http://localhost/",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1",
    "^vue$": "vue/dist/vue.common.js"
  },
  moduleFileExtensions: ["js", "vue", "json"],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/components/**/*.vue",
    "<rootDir>/pages/**/*.vue"
  ]
};

//   "jest": {
//     "verbose": true,
//     "moduleNameMapper": {
//       "^vue$": "vue/dist/vue.common.js"
//     },
//     "moduleDirectories": ["<rootDir>/node_modules"],
//     "moduleFileExtensions": [
//       "js",
//       "vue"
//     ],
//     "transform": {
//       "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
//     ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
//     },
//     "collectCoverage": true,
//     "collectCoverageFrom": [
//       "<rootDir>/components/*.vue"
//     ]
//   },
