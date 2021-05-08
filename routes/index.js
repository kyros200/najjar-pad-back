const express = require("express");
const router = express.Router();
const padRouter = require('./pad');

router.use('/pad', padRouter);

module.exports = router;
