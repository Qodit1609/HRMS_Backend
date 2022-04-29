const { readCSVAsJSON, testing } = require("../../app/utils/ReadFile.js");
const leaveDetailController = require("../controllers/LeaveDetails.controller.js");
const { get_days } = require("../utils/DateFunction");
const _ = require("lodash");
const db = require("../config/database.js");
// const { timeout } = require("nodemon/lib/config");
const date = require('date-and-time');
const { request } = require("express");
const Leave = db.leave;
const Op = db.Sequelize.Op;



//Requesting for the Leave..
exports.RequestingForleave = async (req, res, next) => {
  const srt_date = new Date(req.body.start_day);
  const lst_date = new Date(req.body.end_day);    
  const leave_type = req.body.leave_type;
  
  //THIS WILL GET THOUGH JWTSESSION
  const employee_id = req.body.employee_id;
  var leave_days = get_days(srt_date, lst_date);
  var leaveDate = new Date(srt_date);
  // console.log(leaveDays);
  csvJsonData={}; 

  // await leaveDetailController.getCausalLeave(1)  
  console.log(fullUrl);
   
//this function respose the CSV to Json Data
 await readCSVAsJSON().then((response) => {
    this.csvJsonData = response;
    return this.csvJsonData
  });
  for(let i = 0; i<=leave_days; i++){
    console.log(i);
    for(let j in this.csvJsonData){      
      leaveDate.setDate(srt_date.getDate()+i);
      var holidayDate = new Date(this.csvJsonData[j].Date);
      //Cheking is there any Holiday in Leave Date's.
      if(date.isSameDay(leaveDate, holidayDate)){
        console.log('Holiday In Leave: ',holidayDate);
      }
     
    }
    // console.log('Holiday In Leave: ',holidayDate);
    //Sunday Counter
    leaveDate.getDay() == 0 ? console.log("Sunday", leaveDate) : "";;
    console.log('Lave Days Dates :', leaveDate);
  }    
   console.log('===end===');
};


function checkingLeaveType(leaveType) {
  const leaveTypeList = ["CL", "ML", "LOP", "A", "HD", "CO", "BL"];
  if (leaveTypeList.includes(leaveType)) {
    return leaveType;
  } else {
    return "";
  }
}

function casualLeaveCounter() {}
