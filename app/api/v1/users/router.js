var express = require("express");
var router = express.Router();
const { getAllUser } = require("./controller");

router.get("/users", getAllUser);

module.exports = router;
