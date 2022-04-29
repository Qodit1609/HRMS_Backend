const { readCSVAsJSON, testing } = require("../../app/utils/ReadFile.js");
const { get_days } = require("../utils/DateFunction");
const _ = require("lodash");
const db = require("../config/database.js");
const date = require('date-and-time');
const { leaveDetail } = require("../config/database.js");
const LeaveDetail = db.leaveDetail;
const Leave = db.leave;
const Op = db.Sequelize.Op;


/*
Causal Leave
For the Causal Leave  we First get the Month 
then after calculate the taken Causal Leave of current Month
*/
exports.getCausalLeave = (req, res, next) =>{
    const empid = req.params.id
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const first_date = new Date(year, 01, 1);
    const last_date = new Date(year, 12, 31); 
    const totalCausalLeave = currentDate.getMonth();
    console.log(totalCausalLeave+1);
    leaveDetail.findAndCountAll({
        where:{
            emp_id: empid,
            leave_type: 'CL',
            leave_date: {
                [Op.between]: [first_date, last_date]
            }
        }
    }).then(data=>{
        res.send(data);
    }).catch(error =>{
        res.send(error);
    })
    
} 

