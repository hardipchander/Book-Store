const Book=require("../models/bookModel");

// INDEX for Book Resource
const allBooks=async (req, res) => {
    try {
        const books=await Book.find({});
        res.status(200).json({
            count: books.length,
            data: books
        });
    } 
    catch(err) {
        return res.status(500).json({message: err.message});
    }
};

// CREATE for Book Resource
const createBook=async (req, res)=> {
    try {
        // If any of the fields are missing in the req.body   
        if(!req.body.title || !req.body.author  || !req.body.publishYear ) {
            return res.status(400).json({message: "Send All Required Fields !!!"});
        }

        const bookInfor={title: req.body.title, author: req.body.author, publishYear: req.body.publishYear};
        const book=await Book.create(bookInfor);

        return res.status(201).send(book);
    } 
    catch(err) {     
      return res.status(500).json({message: err.message});   
    }
};

module.exports={allBooks, createBook};