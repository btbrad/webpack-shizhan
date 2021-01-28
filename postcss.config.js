const autoprefixer = require('autoprefixer')
const stylelint = require('stylelint')

module.exports = {
  plugins: [
    autoprefixer({
      grid: true
    }),
    stylelint({
      config: {
        rules: {
          'declaration-no-important': true
        }
      }
    })
  ]
}
