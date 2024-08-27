const express=require("express")
const app=express();
const mongoose=require("mongoose");

app.get("/", (req, res) => {
    console.log(req);
    res.status(200).json({"Message": "Welcome to MERN Stack Tutorial"});
});


mongoose.connect("mongodb://localhost:27017/demo")
.then(() => {
    console.log("Connected to local MongoDB server");
    app.listen(3000, ()=> {
        console.log("Listening for requests on http://localhost:3000")
    });
}).catch(err => console.log(err))