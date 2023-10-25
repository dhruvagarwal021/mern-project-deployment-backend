
const express = require("express");
const studentSchema = require("../model/studentSchema");
const studentRoute = express.Router();
const mongoose = require("mongoose");

studentRoute.post("/create-student", (req, res) => {
    studentSchema.create(req.body, (err, data) => {
        if (err) {
            return err;
        }
        else {
            res.json(data);
        }
    });
});

studentRoute.get("/", (req, res) => {
    studentSchema.find((err, data) => {
        if (err) {
            return err;
        }
        else {
            res.json(data);
        }
    });
});



//specifically updating a record using its id;
//ObjectID for Raj -> "652cc513b274f2fe96180d0e"
studentRoute.route("/update-student/:id")
    .get((req, res) => {
        studentSchema.findById(mongoose.Types.ObjectId(req.params.id), (err, data) => {
            if (err) {
                return err;
            }
            else {
                res.json(data);
            }
        });
    }).put((req, res) => {
        studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), { $set: req.body }, (err, data) => {
            if (err) {
                return err;
            }
            else {
                res.json(data);
            }
        });
    });
//http://localhost:4000/studentRoute/update-student/652cc513b274f2fe96180d0e



studentRoute.delete("/delete-student/:id", (req, res) => {
    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if (err) {
            return err;
        }
        else {
            res.json(data);
        }
    });
});


//Axios.put("")
module.exports = studentRoute;