'use strict';

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {return `${title} by ${author}, ${pages} pages, ${read}`};
}

function addBookToLibrary(title, author, pages, read) {
    newBook = newBook(title, author, pages, read);
    myLibrary.push(newBook);
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);