const express = require('express');
const router = express.Router();
const axios = require('axios');

// بيانات الكتب
let books = {
    1: { author: "Chinua Achebe", title: "Things Fall Apart", reviews: {} },
    2: { author: "Hans Christian Andersen", title: "Fairy tales", reviews: {} },
    3: { author: "Dante Alighieri", title: "The Divine Comedy", reviews: {} },
    4: { author: "Unknown", title: "The Epic Of Gilgamesh", reviews: {} },
    5: { author: "Unknown", title: "The Book Of Job", reviews: {} },
    6: { author: "Unknown", title: "One Thousand and One Nights", reviews: {} },
    7: { author: "Unknown", title: "Njál's Saga", reviews: {} },
    8: { author: "Jane Austen", title: "Pride and Prejudice", reviews: {} },
    9: { author: "Honoré de Balzac", title: "Le Père Goriot", reviews: {} },
    10: { author: "Unknown", title: "The Canterbury Tales", reviews: {} }
};

// **المهمة 10**: جلب جميع الكتب
router.get('/books', async (req, res) => {
    try {
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// **المهمة 11**: جلب كتاب بواسطة ISBN
router.get('/books/isbn/:isbn', async (req, res) => {
    try {
        const isbn = req.params.isbn;
        if (books[isbn]) {
            res.json(books[isbn]);
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// **المهمة 12**: جلب كتب بواسطة المؤلف
router.get('/books/author/:author', async (req, res) => {
    try {
        const author = req.params.author;
        const result = Object.values(books).filter(book => book.author.toLowerCase() === author.toLowerCase());
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// **المهمة 13**: جلب كتب بواسطة العنوان
router.get('/books/title/:title', async (req, res) => {
    try {
        const title = req.params.title;
        const result = Object.values(books).filter(book => book.title.toLowerCase() === title.toLowerCase());
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;