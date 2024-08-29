const express=require("express");
const router=express.Router();

// Import controlllers
const {allBooks, createBook}=require("../controllers/book-controller");

router.get("/", allBooks);

router.post("/", createBook);

module.exports=router;