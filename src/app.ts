import { Category } from "./enums";
import { Book, Logger, Author, Librarian, Magazine } from "./interfaces";
import { UniversityLibrarian, ReferenceItem } from "./classes";
import RefBook from './encyclopedia';
import { purge } from './lib/utility-functions';
import Shelf from './shelf';

/*
showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}
*/

// Task 01
//-------------------------------------------------------------------------

/*function getAllBooks(): any[] {
    const books: any[] = [
        { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
        { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true },
    ];
    return books;
}

function logFirstAvailable(books: any[]): void {
    const numberOfBooks: number = books.length;
    let firstAvailableBook: string = '';

    for (let book of books) {
        if (book.available) {
            firstAvailableBook = book.title;
            break;
        }
    }
    console.log(`Total books: ${numberOfBooks}`);
    console.log(`First available book: ${firstAvailableBook}`);
}

logFirstAvailable(getAllBooks());*/

// Task 02
//-------------------------------------------------------------------------
/*enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular}

function getAllBooks(): any[] {
    const books: any[] = [
        { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
        { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript },
    ];
    return books;
}

function logFirstAvailable(books: any[]): void {
    const numberOfBooks: number = books.length;
    let firstAvailableBook: string = '';

    for (let book of books) {
        if (book.available) {
            firstAvailableBook = book.title;
            break;
        }
    }
    console.log(`Total books: ${numberOfBooks}`);
    console.log(`First available book: ${firstAvailableBook}`);
}

function getBookTitlesByCategory(category: Category): Array<string> {
    const allBooks = getAllBooks();
    let titles: string[] = [];

    for (let book of allBooks) {
        if (book.category === category) {
            titles.push(book.title);
        }
    }
    return titles;
}

function logBookTitles(titles: string[]): void {
    titles.length ? titles.forEach(value => console.log(value)) : console.log('Books with this category not found');

}

logBookTitles(getBookTitlesByCategory(Category.CSS));

//logFirstAvailable(getAllBooks());*/

// Task 03
//-------------------------------------------------------------------------
/*enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular}

function getAllBooks(): any[] {
    const books: any[] = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript },
    ];
    return books;
}

function logFirstAvailable(books: any[]): void {
    const numberOfBooks: number = books.length;
    let firstAvailableBook: string = '';

    for (let book of books) {
        if (book.available) {
            firstAvailableBook = book.title;
            break;
        }
    }
    console.log(`Total books: ${numberOfBooks}`);
    console.log(`First available book: ${firstAvailableBook}`);
}

function getBookTitlesByCategory(category: Category): Array<string> {
    const allBooks = getAllBooks();
    let titles: string[] = [];

    for (let book of allBooks) {
        if (book.category === category) {
            titles.push(book.title);
        }
    }
    return titles;
}

let javaScriptBookTitle = getBookTitlesByCategory(Category.JavaScript);
javaScriptBookTitle.forEach(title => console.log(title));

function getBookById(id: number): any {
    const allBooks = getAllBooks();
    return id <= allBooks.length && id > 0
        ? console.log(`Here is a data about book with id ${id}: `, allBooks.find(value => value.id === id))
        : console.log(`Book with id ${id} not found`);
}
getBookById(3);

//logFirstAvailable(getAllBooks());
*/

// Task 04
//-------------------------------------------------------------------------
/*function createCustomerID(name:string, id: number): string {
    return `${name} ${id}`;
}

let myId: string = createCustomerID('Ann', 10);
console.log(myId);

let idGenerator:  (name: string, id: number) => string;

idGenerator = (name: string, id: number) => `${name} ${id}`;
console.log(idGenerator('Andrei', 33));

// idGenerator = createCustomerID;
// myId = createCustomerID('Andrei', 33);
// console.log(myId);
*/

// Task 05
//-------------------------------------------------------------------------
/*function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer Name is: ${name}`);
    if (age) {
        console.log(`Age: ${age}`);
    }
    if (city) {
        console.log(`City: ${city}`);
    }
}
createCustomer('Andrei');
createCustomer('Andrei', 33);
createCustomer('Andrei', 33, 'Gomel');*/

/*enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular}

function getAllBooks(): any[] {
    const books: any[] = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript },
    ];
    return books;
}

function logFirstAvailable(books: any[] = getAllBooks()): void {
    const numberOfBooks: number = books.length;
    let firstAvailableBook: string = '';

    for (let book of books) {
        if (book.available) {
            firstAvailableBook = book.title;
            break;
        }
    }
    console.log(`Total books: ${numberOfBooks}`);
    console.log(`First available book: ${firstAvailableBook}`);
}

function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const allBooks = getAllBooks();
    let titles: string[] = [];

    for (let book of allBooks) {
        if (book.category === category) {
            titles.push(book.title);
        }
    }
    return titles;
}

//let javaScriptBookTitle = getBookTitlesByCategory();
//javaScriptBookTitle.forEach(title => console.log(title));

function getBookById(id: number): any {
    const allBooks = getAllBooks();
    // return id <= allBooks.length && id > 0
    //     ? console.log(`Here is a data about book with id ${id}: `, allBooks.find(value => value.id === id))
    //     : console.log(`Book with id ${id} not found`);
    return allBooks.find(value => value.id === id);
}

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer name is: ${customer}`);
    const titles: string[] = [];

    for (const id of bookIDs) {
        const book = getBookById(id);
        if (book && book.available) {
            titles.push(book.title);
        }
    }
    return titles;
}

const myBooks = checkoutBooks('Ann', 1, 2, 4);
myBooks.forEach(title => console.log(title));

//getBookById(3);
//logFirstAvailable();
*/


// Task 06
//-------------------------------------------------------------------------
/*enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular}

function getAllBooks(): any[] {
    const books: any[] = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript },
    ];
    return books;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookProperty: string | boolean): string[] {
    const allBooks = getAllBooks();
    if (typeof bookProperty === 'string') {
        return allBooks
            .filter(book => book.author === bookProperty)
            .map(book => book.title);

    } else if (typeof bookProperty === 'boolean') {
        return allBooks
            .filter(book => book.available === bookProperty)
            .map(book => book.title);
    }
}

let titles = getTitles(false);
console.log(titles);
titles = getTitles('Lea Verou');
console.log(titles);*/

// Task 07
//-------------------------------------------------------------------------
/*
enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular}

    interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: (reason: string) => void;
}

function getAllBooks(): Book[] {
    const books: Book[] = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript },
    ];
    return books;
}

function getBookById(id: number): Book | undefined {
    const allBooks = getAllBooks();
    // return id <= allBooks.length && id > 0
    //     ? console.log(`Here is a data about book with id ${id}: `, allBooks.find(value => value.id === id))
    //     : console.log(`Book with id ${id} not found`);
    return allBooks.find(value => value.id === id);
}

// let book = getBookById(6);
// console.log(book);

function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

const myBook: Book = {
    id: 5, title: 'Colours, Backgrounds, and Gradients ', author: 'Eric A.Meyer', available: true, category: Category.CSS,
    pages: 200, markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
};

printBook(myBook);

myBook.markDamaged('missing back cover');
*/

// Task 08
//-------------------------------------------------------------------------

/*enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    //markDamaged?: (reason: string) => void;
    markDamaged?: DamageLogger;
}

interface DamageLogger {
    (reason: string): void;
}*/
/*
const logDamage: Logger = (damage: string) => console.log(`Damage: ${damage}`);

logDamage('Stain');*/

// Task 09
//-------------------------------------------------------------------------

/*
interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

const favoriteAuthor: Author = {
    numBooksPublished: 7,
    name: 'Andrei',
    email: 'posya1@mail.ru'
};

const favoriteLibrarian: Librarian = {
    department: 'Classical',
    name: 'Pos',
    email: 'bla@gmail.com',
    assistCustomer: (name: string) => console.log(`Assist ${name}`)
}
*/

// Task 10
//-------------------------------------------------------------------------

/*
interface Person {
    name: string;
    email: string;
}


interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

class UniversityLibrarian implements Librarian {
    department: string;
    name: string;
    email: string;
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

const favoriteLibrarian: Librarian = new UniversityLibrarian();

favoriteLibrarian.name = 'Andrei';
favoriteLibrarian.assistCustomer('ClaraBridge');
*/


// Task 11
//-------------------------------------------------------------------------
/*
class ReferenceItem {
/!*
    title: string;
    year: number;
    constructor(newTitle: string, newYear: number){
        this.title = newTitle;
        this.year = newYear;
        console.log('Creating a new ReferenceItem...');
    }
*!/
    private _publisher: string;
    static department: string = 'BLA';

    constructor(public title: string, private year: number) {
        console.log('Creating a new ReferenceItem...');
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in year ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    };
}
const ref = new ReferenceItem('New Life', 2019);

ref.printItem();

ref.publisher = 'New life is coming';
console.log(ref.publisher);
*/

// Task 12
//-------------------------------------------------------------------------

/*
class ReferenceItem {
    private _publisher: string;
    static department: string = 'BLA';

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in year ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    };
}

class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public  edition: number) {
        super(title, year);
    }
    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`);
    }
}

const refBook = new Encyclopedia('JS', 2012, 6);
refBook.printItem();
*/

// Task 13
//-------------------------------------------------------------------------
/*
abstract class ReferenceItem {
    private _publisher: string;
    static department: string = 'BLA';

    protected constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in year ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    };

    abstract printCitation(): void;
}
*/

/*
class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public  edition: number) {
        super(title, year);
    }
    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`);
    }
    printCitation(): void {
        console.log(`${this.title} - ${this.year}`)
    }

}
*/

/*
const refBook = new RefBook('JS', 2012, 6);
refBook.printItem();
refBook.printCitation();
*/


//Task 17
//_________________________________________
/*const inventory: Array<Book> = [
  { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
  { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
  { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
  { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];


const result = purge<Book>(inventory);
console.log(result);
const result2 = purge([1, 2, 3, 4]);
console.log(result2);*/


//Task 18
//_________________________________________
/*const inventory: Array<Book> = [
  { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
  { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
  { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
  { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

const bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
const firstBook: Book = bookShelf.getFirst();
console.log(firstBook);

const magazines: Magazine[] = [
  { title: 'Programming Language Monthly', publisher: 'Code Mags' },
  { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
  { title: 'Five Points', publisher: 'GSU' }
];

const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
const firstMag: Magazine = magazineShelf.getFirst();
console.log(firstMag);*/

//Task 19
//_________________________________________

/*magazineShelf.printTitles();
console.log(magazineShelf.find('Code Complete'));
console.log(magazineShelf.find('Five Points'));*/

// DECORATORS
//Task 20.1
//_________________________________________

/*const favoriteLibrarian: Librarian = new UniversityLibrarian();

favoriteLibrarian.name = 'Andrei';
favoriteLibrarian.assistCustomer('ClaraBridge');*/


//Task 20.2
//_________________________________________

/*const favoriteLibrarian: Librarian = new UniversityLibrarian();

favoriteLibrarian.name = 'Andrei';
favoriteLibrarian.assistCustomer('ClaraBridge');*/

//Task 21
//_________________________________________

const favoriteLibrarian = new UniversityLibrarian();

favoriteLibrarian.name = 'Andrei';
favoriteLibrarian.assistCustomer('ClaraBridge');

favoriteLibrarian.assistFaculty = () => console.log('!!!!!!!!');
favoriteLibrarian.assistFaculty();
try {
  favoriteLibrarian.teachCommunity = () => console.log('???');
}
catch (err) {
  console.log(err);
}
favoriteLibrarian.teachCommunity();

// Dynamic Import Expressions
//-----------------------------------

// import('./variables')
//     .then(m => console.log(m.a))
//     .catch(err => console.log('Catch error:', err));


// Задание типа для функции
//-----------------------------------
// --------------------------------------
/*function publicationMsg(year: number): string {
    return `Data published: ${year}`;
}

let publishFunction: (year: number) => string;
publishFunction = publicationMsg;
let message: string = publishFunction(2018);
console.log(message);*/

// Указания типа для this
//---------------------------------------------------
/*
interface IBook {
    currentYear: number;
}
function Book(this: IBook) {
    this.currentYear = 2018;
    setInterval(() => console.log(this.currentYear),
        1000);
}

new Book();*/
