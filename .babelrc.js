// Babel configuration
// https://babeljs.io/docs/usage/api/
module.exports = {
  "presets": [
    [
      '@babel/preset-env',
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    '@babel/preset-stage-0',
    '@babel/preset-stage-1',
    '@babel/preset-stage-2',
    '@babel/preset-stage-3',
    '@babel/preset-flow',
    '@babel/preset-react',
  ],
  "plugins": [
    "emotion",
    "transform-decorators-legacy",
    "transform-class-properties",
    // "babel-plugin-styled-components"
  ],
  "ignore": ["node_modules", "build"]
}
