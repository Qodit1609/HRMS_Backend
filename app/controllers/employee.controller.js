const _ = require('lodash');
const db = require("../config/database.js");
const Employees = db.employees;
const Op = db.Sequelize.Op;

const marital_Status_list = ["Married", "Widowed ", "Separated","Divorced ","Single", "Unmarried" ];
//retrive all employee from the databse
exports.findAll = (req, res) =>{
    Employees.findAll()
    .then(data=>{
        res.send(data);
    })
    .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving tutorials."
              });
            });
}


//find Single Employee with emp_id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Employees.findByPk(id)
  .then(data => {
    if(data){
      res.status(200).send(data);
    }else{
      res.status(400).send({
        message: `Cannot find Tutorial with id=${id}.`
      });
    }
  })
  .catch(err =>{
    res.status(500).send({
      message:  err.message || "Some error occurred while Registering the Employee."
    })
  })
}

//update the Single Employee by id
exports.update = (req, res) => {
  const id = req.params.id;
  Employees.update(req.body,{
    where: { emp_id: id}
  }).then(num =>{
    if(num == 1){
      res.status(200).send({
        message: "Employee was updated successfully."
      });
    }else{
      res.status(400).send({
        message: `Cannot update Employee with id= ${id} Maybe Employee was not found or req.body is empty`
      });
    }
  })
  .catch(err =>{
    res.status(500).send({
      message: "Error updating Employee with id=" + id
    });
  });
}


//Delete The single Enmployee by ID
exports.delete = (req, res) =>{
  const id = req.params.id;
  Employees.destroy({
    where: {emp_id: id}
  })
  .then(num =>{
    if(num == 1){
      res.status(200).send({
        message: "Employee was Delete Successfully!"
      });
    }else{
      res.status(200).send({
        message: `Cannot Delete Employee with id= ${id} Maybe Employee was not found or req.body is empty.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error Delete Employee with id=" + id
    });
  })
}

//Create the employee
exports.create = async (req, res, next) => {
  //Checking the Empty String
  const obj = req.body;
  for (const prop in obj) {
       if(_.isEmpty(obj[prop])){
      return res.send({
        message: "Something is Missing In Object"
      })
    }
  }
  //Checking Employee already Exisit Or Not
  let emp = await Employees.findOne({
    where: {adhaar_number: req.body.adhaar_number}
  });

  if(emp){
    return res.send({
      message: "The Employee Alrady exisits! Or Aadhar Number Alrady exisits "
    });
  }
  else{              
      if(marital_Status_list.includes(req.body.marital_status)){
            const maritalStatus = (req.body.marital_status == 'Married');
            var marriagedate = maritalStatus ? req.body.marriage_date : null;
            var spousename = maritalStatus ? req.body.spouse_name : null;
            }else{
              res.status.send({
                message: "Give the Valid Marital status"
              })
              return;
            }
            //------------------ Create A Employee --------------
            const employee = {
             role_type: req.body.role_type,
              first_name: req.body.first_name,
              last_name: req.body.last_name,
              gender: req.body.gender,
              age: req.body.age,
              address: req.body.address,
              email_id: req.body.email_id,
              birth_date: req.body.birth_date,
              joining_date: req.body.joining_date,
              permanent_number: req.body.permanent_number,
              alternate_number: req.body.alternate_number,
              emergency_number: req.body.emergency_number,
              emergency_name: req.body.emergency_name,
              adhaar_number: req.body.adhaar_number,
              pan_number: req.body.pan_number,
              passport_avail: req.body.passport_avail,
              passport_number: req.body.passport_number,
              address_permanent: req.body.address_permanent,
              address_temp: req.body.address_temp,
              marital_status: req.body.marital_status,
              marriage_date: marriagedate,
              father_name: req.body.father_name,
              mother_name: req.body.mother_name,
              spouse_name: spousename,
              no_of_children: req.body.no_of_children
            }//save the Employee
            Employees.create(employee)
            .then(data=>{
              res.status(200).send({
                message: 'Employee Registered..' 
              });
            })
            .catch(err =>{
              res.status(500).send({
                message:  err.message || "Some error occurred while Registering the Employee."
              });
            });
  }
  
}