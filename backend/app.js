const express=require("express")
const app=express();

app.listen(3000, ()=> {
    console.log("Listening for requests on http://localhost:3000")
});