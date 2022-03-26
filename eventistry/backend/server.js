const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


const employeeRouter = require('./routes/employee');
// const chargeRouter = require('./routes/charge');



app.use('/employee', employeeRouter);

// app.use('/charge', chargeRouter);



// app.use('/users', require('./routes/auth'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});