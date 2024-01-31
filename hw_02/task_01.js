"use strict";

class Library {
  #books = [];
  getAllBooks() {
    return this.#books;
  }
  addBook(title) {
    try {
      if (this.#books.includes(title)) {
        throw new Error("This book in list already");
      } else {
        this.#books.push(title);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  removeBook(title) {
    try {
      if (!this.#books.includes(title)) {
        throw new Error("Ошибка: Такой книги нет в списке");
      }
      const titleId = this.#books.indexOf(title);
      this.#books.splice(titleId, 1);
    } catch (error) {
      return error.message;
    }
  }
  hasBook(title) {
    return this.#books.includes(title);
  }
  constructor(initialBookList) {
    const uniqueList = [...new Set(initialBookList)];
    if (uniqueList.length !== initialBookList.length) {
      throw new Error("There some duplicates");
    }
    this.#books = initialBookList;
  }
}
const bookList = ["Biology", "Chemistry", "English", "History"];

let library = new Library(bookList);
console.log(library.getAllBooks());

library.addBook("Geography");
console.log(library.getAllBooks());

library.addBook("Biology");
console.log(library.getAllBooks());

library.removeBook("History");
console.log(library.hasBook("Chemistry"));
console.log(library.hasBook("History"));
