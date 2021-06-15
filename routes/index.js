const express = require("express");
const router = express.Router();

const padRouter = require('./pad');
const securityRouter = require('./security');

router.use('/pad', padRouter);
router.use('/security', securityRouter);

module.exports = router;
