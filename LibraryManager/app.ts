function getAllBooks() {

    let books = [
        {title:'Ulysses', author: 'James Joyce', available: true},
        {title:'A Farewell to Arms', author: 'Ernest Hemingway', available: false},
        {title:'I know Why the Caged Bird Sings', author: 'Maya Angelou', available: true},
    ];

    return books;
}

function logFirstAvailabe(books : any): void {

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

const allBooks = getAllBooks();
allBooks.push({title: 'Moby Dick', author: 'Herman Melville', available: true})
logFirstAvailabe(allBooks);