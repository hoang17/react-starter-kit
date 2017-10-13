// Babel configuration
// https://babeljs.io/docs/usage/api/
module.exports = {
  "presets": [
    [
      "env",
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    "stage-2",
    "stage-3",
    "flow",
    "react"
  ],
  "plugins": [
    "emotion",
    // "babel-plugin-styled-components"
  ],
  "ignore": ["node_modules", "build"]
}
