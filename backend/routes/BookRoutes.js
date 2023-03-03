const bookSchema= require('../model/BookModel');
const express= require('express');
const {getAllBooks, getOneBook, deleteBook, deleteBooks, updateBook, addToWish, rating }= require('../controllers/Admin');
const {multipleUpload } = require('../controllers/UploadBookCover-pdf');
const bookRouter= express.Router();
const { authMiddleware, isAdmin } = require('../middleWare/authMiddleware');

//add new book
bookRouter.post('/add',authMiddleware,isAdmin,multipleUpload,async(req,res)=>{    
    try {
        const {bookName, bookQuantity, bookAuthor,bookPrice,bookDescription } = req.body;
        const Img = req.files.picture[0].filename;
        const Pdf = req.files.pdf[0].filename;       
        const newBook = new bookSchema({bookName,bookQuantity,bookAuthor,bookPrice,bookDescription,bookImage :Img,bookPdf : Pdf});
        await newBook.save(); 
        if(!newBook) return res.status(400).json([{ message: 'book not created' }]);
        res.json(newBook);
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
})
//get all books
bookRouter.get('/list',getAllBooks)
//get one book by id
bookRouter.get('/list/:id',getOneBook)
//add to wishlist
bookRouter.put('/wishlist',authMiddleware,addToWish)
//rate a book
bookRouter.put('/rating',authMiddleware,rating)
//delete one book
bookRouter.delete('/delete/:id',authMiddleware,isAdmin,deleteBook)
//delete all books
bookRouter.delete('/delete',authMiddleware,isAdmin,deleteBooks)
//update a book 
bookRouter.put('/update/:id',authMiddleware,isAdmin,updateBook)


module.exports= bookRouter;
