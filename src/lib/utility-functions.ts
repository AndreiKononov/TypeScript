import {Book, LibMgrCallback} from "../interfaces";
import { Category } from "../enums";

export function purge<T>(inventory: Array<T>): Array<T> {
  return inventory.splice(2, inventory.length)
}

export function getAllBooks(): Book[] {
  const books: Book[] = [
    { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
    { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
    { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
    { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript },
  ];
  return books;
}

export function logFirstAvailable(books: any[] = getAllBooks()): void {
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

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
  const allBooks = getAllBooks();
  let titles: string[] = [];

  for (let book of allBooks) {
    if (book.category === category) {
      titles.push(book.title);
    }
  }
  return titles;
}

export function logBookTitles(titles: string[]): void {
  titles.length ? titles.forEach(value => console.log(value)) : console.log('Books with this category not found');
}

export function getBookById(id: number): Book | undefined {
  const allBooks = getAllBooks();
  // return id <= allBooks.length && id > 0
  //     ? console.log(`Here is a data about book with id ${id}: `, allBooks.find(value => value.id === id))
  //     : console.log(`Book with id ${id} not found`);
  return allBooks.find(value => value.id === id);
}

export function createCustomerID(name:string, id: number): string {
  return `${name} ${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Customer Name is: ${name}`);
  if (age) {
    console.log(`Age: ${age}`);
  }
  if (city) {
    console.log(`City: ${city}`);
  }
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
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

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(bookProperty: string | boolean): string[] {
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

export function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

export function publicationMsg(year: number): string {
  return `Data published: ${year}`;
}

export function getBookByCategory(category: Category, callback: LibMgrCallback): void {
  setTimeout(() => {
    try {
      const titles = getBookTitlesByCategory(category);
      if (titles.length > 0) {
        callback(null, titles);
      } else {
        throw new Error('No books found.');
      }
    }
    catch (error) {
      callback(error, null)
    }
  }, 2000 )
}

export function logCategorySearch(error: Error, titles: string[]) {
  error ? console.log(`Error message: ${error.message}`) : console.log(titles);
}

export function getBookByCategoryPromise(category: Category): Promise<Array<string>> {
  const p:Promise<string[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      const titles = getBookTitlesByCategory(category);
        if (titles.length > 0) {
            resolve(titles);
        } else {
          reject('No books found.');
        }
    }, 2000 )
  });

  return p;
}

export async function logSearchResults(category: Category) {
    let foundBooks = await getBookByCategoryPromise(category);
    console.log(foundBooks);
    //return foundBooks;
}
