const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({

  employeename: { 
    type: String,
    required: true
   },

   gender: {
    type:String,
   },

   email: { 
    type: String, 
    required: true 
  },

  nic: { 
    type: String, 
    required: true,
   },

  mobileno: { 
    type: Number, 
    required: true, 
    maxlength:10, 
    minlength:10, 
    unique:true
   },

   designation: {
    type:String, 
  },

  date: { 
    type: Date, 
    required: true 
  },

}, {
    timestamps: true,
  });

module.exports = mongoose.model('Employee', employeeSchema);

//module.exports = Employee;