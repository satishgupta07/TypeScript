import {Category} from './enum';
import {Book, DamageLogger, Author, Librarian } from './interfaces';
import {UniversityLibrarian, ReferenceItem,  Encyclopedia} from './classes';

function getAllBooks(): Book[] {

    let books = [
        {id:1,title:'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction},
        {id:2,title:'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction},
        {id:3,title:'I know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry},
        {id:4,title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction}
    ];

    return books;
}

function logFirstAvailabe(books = getAllBooks()): void {

    let numberOfBooks: number = books.length;
    let firstAvailabe: string = '';

    for(let currentBook of books) {
        
        if(currentBook.available) {
            firstAvailabe = currentBook.title;
            break;
        }
    }

    console.log('Total Books: '+numberOfBooks);
    console.log('First Available: '+firstAvailabe)
}



function getBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    
    console.log('Getting books in category: '+ Category[categoryFilter]);

    const allBooks = getAllBooks();
    const filteredTitles: string[] = [];

    for(let currentBook of allBooks) {
        if(currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

function logBookTitles(titles: string[]): void {

    for(let title of titles) {
        console.log(title)
    }
}

function getBookById(id: number): Book {
    const allBooks = getAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

function createCustomerID(name: string, id: number): string {
    return name + id;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log('Creating customer ' + name);

    if(age) {
        console.log('Age: '+age);
    }
    if(city) {
        console.log('City: '+city);
    }
}

function checkOutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log('Checking out books for '+customer);
    let booksCheckedOut: string[] = [];

    for(let id of bookIDs) {
        let book = getBookById(id);
        if(book.available) {
            booksCheckedOut.push(book.title);
        }
    }

    return booksCheckedOut;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];

function getTitles(bookProperty: any): string[] {
    const allBooks = getAllBooks();
    const foundTitles: string[] = [];

    if(typeof bookProperty == 'string') {
        //get all books by a particular author
        for(let book of allBooks) {
            if(book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if(typeof bookProperty == 'boolean') {
        //get all books based on specified availability
        for(let book of allBooks) {
            if(book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}

function printBook(book: Book): void {
    console.log(book.title + ' by ' +book.author);
}

// **********************************************************

// let ref: ReferenceItem = new ReferenceItem('New Facts and Figure', 2010)
// ref.printItem();
// ref.publisher = 'Random Data Publishing';
// console.log(ref.publisher);

let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 1900, 10);
refBook.printCitation();

