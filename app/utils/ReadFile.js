const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");
const CSVToJSON = require("csvtojson");

function readCSVAsJSON() {
  var currentYear = new Date().getFullYear();
  var csvFilePath = path.resolve(
    __dirname,
    `../assets/uploads/YearlyHoliday-files-${currentYear}.csv`
  );
//   console.log("csvFilePath : ", csvFilePath);
  return CSVToJSON().fromFile(csvFilePath);
}


async function testing(){
     
 }

module.exports = { readCSVAsJSON, testing };
