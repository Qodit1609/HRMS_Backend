const  multer = require("multer");
const path = require('path');

const basedir =path.join(__dirname,"../");

const csvFilter = (req, file, cb) => {
    if (file.mimetype.includes("csv")) {
      cb(null, true);
    } else {
      cb("Please upload only csv file.", false);
    }
  };

let storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null,  basedir + "/assets/uploads/");
        },
        filename:(req, file, cb) => {
            console.log(file.originalname);
            var currentYear= new Date().getFullYear(); 
          cb(null,`YearlyHoliday-files-${currentYear}.csv`);            
        },
});
var uploadFile = multer({ storage: storage, fileFilter: csvFilter });
module.exports = uploadFile;