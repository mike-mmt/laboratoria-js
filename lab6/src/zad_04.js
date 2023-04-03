const books = require('./books.js').booksArray;

const result = books.reduce( (acc, currentBook) => {
    if (typeof(currentBook.genre) === 'string') {
        if (currentBook.genre in acc) {
            const processedBook = {
                title: currentBook.title,
                author: currentBook.author
            };
            acc[currentBook.genre] = [...acc[currentBook.genre], processedBook];
            return acc;
        } else {
            const processedBook = {
                title: currentBook.title,
                author: currentBook.author
            };
            acc[currentBook.genre] = [ processedBook ];
            return acc;
        }
    } else {
        currentBook.genre.reduce( (accGenre, currentGenre) => {
            if (currentGenre in acc) {
                const processedBook = {
                    title: currentBook.title,
                    author: currentBook.author
                };
                acc[currentGenre] = [...acc[currentGenre], processedBook];
                return;
            } else {
                const processedBook = {
                    title: currentBook.title,
                    author: currentBook.author
                };
                acc[currentGenre] = [ processedBook ];
                return;
            }
        }, null);
        return acc;
    }
}, {});

console.dir(result, { depth: null });