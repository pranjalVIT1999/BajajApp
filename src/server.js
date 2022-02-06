const patient = require("/Users/pranjalpatel/Downloads/Bajaj/src/Models/Todo.js");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();
const mongoURI = "mongodb+srv://pranjal:vuYjz7DXv4j4MdnI@cluster0.6vlzh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.use(express.json())
app.use(cors())
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

if (mongoose) {
    console.log("connected to mongoose")
}
else {
    console.log("unable to connected to mongoose")
}
app.listen(
    3000,
    () => { console.log("started at ", 3000) }
)
app.get(
    '/getPatient',(req, res) => {
        var data = req.query;
        console.log(data)

    
    const findResult = patient.find({
        content: data.content,
        completed: data.completed

         },
        (error, result) => {
            console.log(result, error);
            if (error || result.length == 0) {
                console.log("error in finding user");
                res.status(404).send("error in finding user");
            }
            else {
                console.log(result);
                tosend = {
                    content: result[0].content,
                    completed: result[0].completed,
                    
                    status: 200

                }
                { res.status(201).send(tosend) }
            }
        })
    }
)
app.post('/Patient', (req, res) => {
    const data = req.body;
    console.log(data)
    // id = Math.random().toString(16).slice(2);
    // const user_data = new user({
    //     userId: id,
    //     fname: data.fname,
    //     lname: data.lname,
    //     email: data.email,
    //     mobile: data.mnum,
    //     password: data.pass,
    //     role: data.role
    // })
    // // console.log(user_data);
    // try {
    //     user_data.save()
    // }
    // catch (e) {
    //     console.log("this is error in try block", e)
    // }
    // // console.log(data)
    // res.status(200).send({
    //     message: 'You Have Successfully Registered with ESTORE',
    // })
})