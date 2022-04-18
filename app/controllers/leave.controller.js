const _ = require('lodash');
const db = require("../config/database.js");
const Leave = db.leave;
const Op = db.Sequelize.Op;

//create the leave 