const express = require('express');
const router = express.Router();
const employeeRoutes = require("./employee");
const csvfileroute = require("./csvfile.route");
const leaverouter = require("./leave");

router.use('/Employee', employeeRoutes);
router.use('/file', csvfileroute);
router.use('/leave',leaverouter);

module.exports = router;