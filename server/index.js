const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const books = []
let id = 0;

app.post('/api/books', (req, res) => {
    console.log('You sent me this data', req.body);
    books.push({
        id: id,
        title: req.body.title,
        author: req.body.author,
    })
    id++;
    console.log('books', books);
    res.json(books);
})

app.delete('/api/books/:id', (req, res) => {
    console.log('You sent me this data', req.body);
    const bookId = req.params.id;
    const bookIndex = books.findIndex(book => book.id === parseInt(bookId, 10));
    books.splice(bookIndex, 1);
    res.json(books);
})


app.listen(3000, () => {
    console.log('Server listening on port ' + 3000);
});

