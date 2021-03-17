'use strict';

let myLibrary = [];

const bookGrid =  document.getElementById('book-grid');
const form = document.getElementById('form');
const newBookBtn = document.getElementById('new-book');
const closeFormBtn = document.getElementById('close-btn');

const formFields = document.getElementById('form-fields');
const formTitle =  document.getElementById('form-title');
const formAuthor =  document.getElementById('form-author');
const formPages =  document.getElementById('form-pages');
const formRead =  document.getElementById('form-read');
const addBookBtn =  document.getElementById('add-book');

newBookBtn.addEventListener('click', () => form.style.display = "block");
closeFormBtn.addEventListener('click', () => form.style.display = "none");
window.addEventListener('click', (event) => {if(event.target == form)form.style.display = "none"});

function Book(title, author, pages, read) {
    let readValue = read === true ? 'Already read' : 'Not read yet';

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {return `${title} by ${author} ${pages} pages, ${readValue}`};
};

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

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

addBookBtn.addEventListener('click', function() {
    if(formTitle.value !== "") {
        if(formAuthor.value !== ""){ 
            if(formPages.value !== ""){
            addBookToLibrary(formTitle.value, formAuthor.value, formPages.value, formRead.checked)
            form.style.display = "none";
            formFields.reset();
            populateGrid();
            }
            else alert("Invalid number of pages");
        }
        else alert("Invalid author");
    }
    else alert("Invalid title");
});