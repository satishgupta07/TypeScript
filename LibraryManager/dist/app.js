"use strict";
function getAllBooks() {
    var books = [
        { title: 'Ulysses', author: 'James Joyce', available: true },
        { title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false },
        { title: 'I know Why the Caged Bird Sings', author: 'Maya Angelou', available: true },
    ];
    return books;
}
function logFirstAvailabe(books) {
    var numberOfBooks = books.length;
    var firstAvailabe = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailabe = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailabe);
}
var allBooks = getAllBooks();
logFirstAvailabe(allBooks);
