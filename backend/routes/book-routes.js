const express=require("express");
const router=express.Router();

// Import controlllers
const {allBooks, getBook,createBook}=require("../controllers/book-controller");

router.get("/", allBooks);

router.post("/", createBook);

router.get("/:id", getBook);

module.exports=router;