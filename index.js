let create = require("./lib/implementation")
let sha1 = require("./lib/sha1-node")

module.exports = create(sha1)
