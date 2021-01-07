"use strict";
function getAllBooks() {
    var books = [
        { title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { title: 'I know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry }
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
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
function getBookTitlesByCategory(categoryFilter) {
    console.log('Getting books in category: ' + Category[categoryFilter]);
    var allBooks = getAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function logBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
var allBooks = getAllBooks();
allBooks.push({ title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction });
// logFirstAvailabe(allBooks);
var poetryBooks = getBookTitlesByCategory(Category.Poetry);
logBookTitles(poetryBooks);
