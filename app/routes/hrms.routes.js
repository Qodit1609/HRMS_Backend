const express = require('express');
const router = express.Router();
const employeeRoutes = require("./employee")

router.use('/Employee', employeeRoutes)

module.exports = router;