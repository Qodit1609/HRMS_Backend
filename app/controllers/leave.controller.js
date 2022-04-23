const _ = require('lodash');
const db = require("../config/database.js");
const Leave = db.leave;
const Op = db.Sequelize.Op;


//Date Format is YYYY-mm-dd 
function get_days(str_day, end_day){
    const date1 = new Date(str_day);
    const date2 = new Date(end_day);
    // console.log(date1.getDay());
    // console.log(date2.getDay());
    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;
    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();
    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
 }


//Requesting for the Leave..
exports.leaveappliaction = (req, res, next)=> {
var srt_day =  req.body.start_day;
var lst_day = req.body.end_day;
console.log(get_days(srt_day,lst_day ));

}
