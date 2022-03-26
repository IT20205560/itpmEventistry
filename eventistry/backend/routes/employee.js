const router = require('express').Router();
let Employee = require('../models/employee.model');

router.route('/').get((req, res) => {
    Employee.find()
    .then(employee => res.json(employee))
    .catch(err =>res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const employeename = req.body.employeename; 
  const gender = req.body.gender;
  const email = req.body.email;
  const nic = req.body.nic;
  const mobileno = Number(req.body.mobileno);
  const designation = req.body.designation;
  const date = Date.parse(req.body.date);

  const newPatient = new Patient({
    employeename,
    gender,
    email,
    nic,
    mobileno,
    designation, 
    date,
  });

  newEmployee.save()
  .then(() => res.json('New Employee added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Employee.findById(req.params.id)
      .then(employee => res.json(employee))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id)
      .then(() => res.json('Employee deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Employee.findById(req.params.id)
      .then(employee => {
        employee.employeename = req.body.employeename;
        employee.gender = req.body.gender;
        employee.email = req.body.email;
        employee.nic = req.body.nic;
        employee.mobileno = Number(req.body.mobileno);
        employee.designation = req.body.disease;
        employee.date = Date.parse(req.body.date);
       
        employee.save()
          .then(() => res.json('Employee updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;