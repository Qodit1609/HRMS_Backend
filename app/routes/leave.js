const express = require('express');
const router = express.Router();
const leveController = require("../controllers/leave.controller.js");
const leaveDetailController = require("../controllers/LeaveDetails.controller.js");


router.post('/applyleave', leveController.RequestingForleave);

//Leave Details Controller
router.get('/CL/:id', leaveDetailController.getCausalLeave);

module.exports = router;