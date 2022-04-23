const express = require('express');
const router = express.Router();
const leveController = require("../controllers/leave.controller.js");

router.post('/applyleave', leveController.leaveappliaction);

module.exports = router;