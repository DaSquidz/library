'use strict';

let myLibrary = [];

const bookGrid =  document.getElementById('book-grid');
const form = document.getElementById('form');
const newBookBtn = document.getElementById('new-book');
const closeFormBtn = document.getElementsByClassName("close")[0];

newBookBtn.addEventListener('click', () => form.style.display = "block");
closeFormBtn.addEventListener('click', () => form.style.display = "none");
window.addEventListener('click', (event) => {if(event.target == form)form.style.display = "none"});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {return `${title} by ${author} ${pages} pages, ${read}`};
};

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

//2 books already defined for testing
addBookToLibrary('Inferno', 'Dante', 656, 'Already read');
addBookToLibrary('Paradiso', 'Virgil', 295, 'Not read');
let Inferno = myLibrary[0];

//clear the grid first,and then populate to avoid duplicates
function populateGrid(){
  clearGrid();
  for(let i = 0; i < myLibrary.length; i++){
    let bookInfo = document.createElement('div');
    bookInfo.className = 'book';
    bookInfo.textContent = myLibrary[i].info();
    
    bookGrid.appendChild(bookInfo);
  }
}

function clearGrid(){
  document.querySelectorAll('.book').forEach(function(book){
        book.remove();
  });
}

function clearForm() {
  
}