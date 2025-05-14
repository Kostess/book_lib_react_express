const express = require('express');
const bookRoutes = express.Router();

const { getAllBooks, getBookById, createBook, updateBook, deleteBook} = require('../controllers/bookController');

bookRoutes.get('/books', getAllBooks);
bookRoutes.get('/books/:id', getBookById);
bookRoutes.post('/books', createBook);
bookRoutes.put('/books/:id', updateBook);
bookRoutes.delete('/books/:id', deleteBook);

module.exports = bookRoutes;