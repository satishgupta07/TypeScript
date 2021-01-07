"use strict";
function getAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];
    return books;
}
function logFirstAvailabe(books) {
    if (books === void 0) { books = getAllBooks(); }
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
    if (categoryFilter === void 0) { categoryFilter = Category.Fiction; }
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
function getBookById(id) {
    var allBooks = getAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function createCustomerID(name, id) {
    return name + id;
}
function createCustomer(name, age, city) {
    console.log('Creating customer ' + name);
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}
function checkOutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log('Checking out books for ' + customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = getBookById(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function getTitles(bookProperty) {
    var allBooks = getAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        //get all books by a particular author
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        //get all books based on specified availability
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
// **********************************************************
// let hermanBooks = getTitles('Herman Melville');
// hermanBooks.forEach(title => console.log(title));
var checkedOutBooks = getTitles(false);
checkedOutBooks.forEach(function (title) { return console.log(title); });
// let myBooks: string[] = checkOutBooks('Throne', 1, 2, 3);
// myBooks.forEach(title => console.log(title));
// logFirstAvailabe();
// let fictionBooks = getBookTitlesByCategory();
// fictionBooks.forEach(title => console.log(title));
// createCustomer('Michelle')
// createCustomer('Leigh', 6)
// createCustomer('Marie', 12, 'Atlanta')
// let myID: string = createCustomerID('daniel', 10);
// console.log(myID);
// const fictionBooks = getBookTitlesByCategory(Category.Fiction);
// fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' +val));
