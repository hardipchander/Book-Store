const Book=require("../models/bookModel");

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
      console.log(err);
      return res.status(500).json({message: err.message});   
    }
};

module.exports={createBook};