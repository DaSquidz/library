'use strict';

let myLibrary = [];
const bookGrid = document.getElementById("book-grid");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function populateGrid() {
    let bookCard = document.createElement("div");
    let title = document.createElement("h2");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let read = document.createElement("button");

    
}

addBookToLibrary("Inferno", "Dante", 562, true);

addBookToLibrary("1984", "George Orwell", 385, true);

addBookToLibrary("Il mistero di Babbo Natale", "Abbefana", 43, false);

