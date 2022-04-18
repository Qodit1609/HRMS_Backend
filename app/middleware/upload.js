const util = require ("util");
const multer = require("multer");
const { diskStorage } = require("multer");

let storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, _basedir + "/assets/uploads/");
        },
        filename:(req, file, cb) => {
            console.log(file.originalname);
            cb(null, file.originalname);
        }
})