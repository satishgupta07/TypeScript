function getAllBooks() {

    let books = [
        {title:'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction},
        {title:'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction},
        {title:'I know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry}
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

enum Category { Biography, Poetry, Fiction, History, Children }

function getBookTitlesByCategory(categoryFilter: Category): Array<string> {
    
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

const allBooks = getAllBooks();
allBooks.push({title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction})
// logFirstAvailabe(allBooks);

const poetryBooks = getBookTitlesByCategory(Category.Poetry);
logBookTitles(poetryBooks);