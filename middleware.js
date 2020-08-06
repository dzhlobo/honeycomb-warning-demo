const honeycomb = require("honeycomb-beeline")()

module.exports = function(req, res, next) {
  honeycomb.customContext.add("demo", true)
  next()
}
