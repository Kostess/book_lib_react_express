const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/books-lib");
        console.log("Соединение в бд успешно");
    } catch (error) {
        console.log(`Ошибка соединения ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;

