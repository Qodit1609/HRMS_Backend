const express = require('express');
const router = express.Router();
const csvfileController = require("../controllers/csvfile.controller");
const uploadFile = require("../middleware/upload");

router.post('/uploading', uploadFile.single("file"), csvfileController.uploads);
router.get('/read', csvfileController.Readfile);

module.exports = router;