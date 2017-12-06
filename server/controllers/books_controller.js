
const books = []
let id = 0;

module.exports = {
    create(req, res) {
        console.log('You sent me this data', req.body);
        books.push({
            id: id,
            title: req.body.title,
            author: req.body.author,
        });
        id++;
        console.log('books', books);
        res.status(200).json(books);
    },

    update(req, res) {
        console.log('You sent me this data', req.body);
        const bookId = req.params.id;
        const bookIndex = books.findIndex(book => book.id === parseInt(bookId, 10));
        books[bookIndex].title = req.body.title
        books[bookIndex].author = req.body.author
        res.status(200).json(books);
    },

    delete(req, res) {
        console.log('You sent me this data', req.body);
        const bookId = req.params.id;
        const bookIndex = books.findIndex(book => book.id === parseInt(bookId, 10));
        books.splice(bookIndex, 1);
        res.json(books);
    },

    read(req, res) {
        console.log('You sent me this data', req.body);
        res.status(200).json(books);
       }
}



// app.delete('/api/books/:id', (req, res) => {
//     console.log('You sent me this data', req.body);
//     const bookId = req.params.id;
//     const bookIndex = books.findIndex(book => book.id === parseInt(bookId, 10));
//     books.splice(bookIndex, 1);
//     res.json(books);
// })

// books[bookIndex] = {
//     id: books[ bookIndex ].id,
//     title: req.body.title || books[ bookIndex ].title,
//     author: req.body.author || books[ bookIndex ].author
//   };