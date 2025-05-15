import axios from 'axios';

const baseUrl = 'http://localhost:3000/api';

export const getAllBooks = async () => {
    try {
        const response = await axios.get(`${baseUrl}/books`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении книг', error);
        throw error;
    }
}

export const getBookById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/books/${id}`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении книги', error);
        throw error;
    }

}

export const createBook = async (book) => {
    try {
        const response = await axios.post(`${baseUrl}/books`, book);
        return response.data;
    } catch (error) {
        console.error('Ошибка при создании книги', error);
        throw error;
    }
}

export const updateBook = async (id, book) => {
    try {
        const response = await axios.put(`${baseUrl}/books/${id}`, book);
        return response.data;
    } catch (error) {
        console.error('Ошибка при обновлении книги', error);
        throw error;
    }
}

export const deleteBook = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/books/${id}`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при удалении книги', error);
        throw error;
    }
}

export const searchBooks = async (query) => {
    try {
        const response = await axios.get(`${baseUrl}/books/search?query=${query}`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при поиске книг', error);
        throw error;
    }
}

