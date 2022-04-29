const uploadFile = require("../middleware/upload");
const fs = require("fs");
const path = require("path");
const csv_parse_1 = require("csv-parse");

exports.uploads = (req, res, next) => {
    try {       
        if(req.file == undefined){
           return res.status(400).send({message: "PLEASE UPLOAD FILE !"});
        }
        res.status(200).send({
            message: "Uploaded File Successfully"+ req.file.originalname,
        });
    } catch (err) {
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
          });
    }
}

exports.Readfile =(req, res, next) => {
    var currentYear= new Date().getFullYear(); 
    var csvFilePath = path.resolve(__dirname, `../assets/uploads/YearlyHoliday-files-${currentYear}.csv`);
    var headers = ['Date', 'Day', 'LeaveType', 'Noofdays'];
    var fileContent = fs.readFileSync(csvFilePath,{encoding: 'utf-8'});
    (0, csv_parse_1.parse)(fileContent, {
        delimiter: ',',
        columns: headers,
    }, function (error, result) {
        if (error) {
            res.status(500).send({
                message: "Please Formated the list  "+ error
            })
        }
        res.status(200).send(result)
        // console.log("Result", result);
    });
 
}