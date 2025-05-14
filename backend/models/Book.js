const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        default: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-88/406/113/110/161/715/600022371713b1.png',
    },
    genre: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "",
    },
    totalCopies: {
        type: Number,
        default: 0,
        min: 0,
    },
    borrowedCopies: {
        type: Number,
        default: 0,
        min: 0,
    }
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;