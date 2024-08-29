const express=require("express");
const router=express.Router();

// Import controlllers
const {allBooks, getBook,createBook, updateBook, deleteBook}=require("../controllers/book-controller");

router.get("/", allBooks);

router.post("/", createBook);

router.get("/:id", getBook);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

module.exports=router;