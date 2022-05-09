
const express= require("express");
const bodyParser=require("body-parser");

const mongoose =require("mongoose");



const app= express();


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));





var con1= mongoose.createConnection("mongodb://localhost:27017/patientDetails");

// Cilic Schema



// Patient model
const Patient=con1.model("Patient",PatientSchema);
// Doctor Model




 app.listen(process.env.PORT|| 2000,function(){
     console.log("Server is running on port 2000");
 });