const express=require("express");
const router=express.Router();

// Import controlllers
const {createBook}=require("../controllers/book-controller");

// Route for Saving a Book
router.post("/", createBook);

module.exports=router;