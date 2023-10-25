
const mongoose=require("mongoose");
const express=require("express");
const studentRoute = require("./controller/studentRoute");
const bodyParser=require("body-parser");
const cors=require("cors");

const app=express();


mongoose.set("strictQuery",true);//To suppress the "Deprection warning", we use this line.
mongoose.connect("mongodb+srv://dhruvagarwal743:12345@cluster0.tigmpof.mongodb.net/schooldb");
var db=mongoose.connection;
db.on("open",()=>{
    console.log("Connected to DB");
});
db.on("error",()=>{
    console.log("Error Occurred")
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/studentRoute",studentRoute);

app.listen(4000,()=>
{
    console.log("Server started at 4000");
});