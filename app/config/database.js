var DataTypes = require('sequelize/lib/data-types');
const Sequelize = require("sequelize");

const sequelize = new Sequelize('hrms_edited', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});


// Database Connection
sequelize.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

// CREATE TABLE IF NOT EXISTS In Database
// sequelize.sync().then(() => {
//   console.log('Database Created');
// }).catch(err => console.log("Error: " + err));


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employees = require("../models/employees.js")(sequelize, DataTypes);
db.leave = require("../models/leave.js")(sequelize, DataTypes);
db.projects = require("../models/projects.js")(sequelize, DataTypes);
db.leaveDetail = require("../models/leave_detail")(sequelize, DataTypes);

module.exports = db;