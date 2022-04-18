var DataTypes = require("sequelize").DataTypes;
var _atten_regularization = require("./atten_regularization");
var _attendance = require("./attendance");
var _employees = require("./employees");
var _job_title = require("./job_title");
var _leave = require("./leave");
var _projects = require("./projects");

function initModels(sequelize) {
  var atten_regularization = _atten_regularization(sequelize, DataTypes);
  var attendance = _attendance(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var job_title = _job_title(sequelize, DataTypes);
  var leave = _leave(sequelize, DataTypes);
  var projects = _projects(sequelize, DataTypes);

  atten_regularization.belongsTo(attendance, { as: "atten", foreignKey: "atten_id"});
  attendance.hasMany(atten_regularization, { as: "atten_regularizations", foreignKey: "atten_id"});
  leave.belongsTo(employees, { as: "emp", foreignKey: "emp_id"});
  employees.hasMany(leave, { as: "leaves", foreignKey: "emp_id"});
  projects.belongsTo(job_title, { as: "job", foreignKey: "job_id"});
  job_title.hasMany(projects, { as: "projects", foreignKey: "job_id"});
  attendance.belongsTo(leave, { as: "leave", foreignKey: "leave_id"});
  leave.hasMany(attendance, { as: "attendances", foreignKey: "leave_id"});
  attendance.belongsTo(projects, { as: "project", foreignKey: "project_id"});
  projects.hasMany(attendance, { as: "attendances", foreignKey: "project_id"});

  return {
    atten_regularization,
    attendance,
    employees,
    job_title,
    leave,
    projects,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
