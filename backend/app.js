const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");

const app=express();
// Set Up Middleware and Routes
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// CORS Policy with Custom Origin
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type"]
    })
);

app.use("/books", require("../backend/routes/book-routes"));

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