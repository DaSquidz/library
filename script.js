'use strict'; //I did it yay

let myLibrary = [];

const bookGrid      = document.getElementById('book-grid');
const form          = document.getElementById('form');
const newBookBtn    = document.getElementById('new-book');
const closeFormBtn  = document.getElementById('close-btn');
const formFields    = document.getElementById('form-fields');
const formTitle     = document.getElementById('form-title');
const formAuthor    = document.getElementById('form-author');
const formPages     = document.getElementById('form-pages');
const formRead      = document.getElementById('form-read');
const addBookBtn    = document.getElementById('add-book');
let removeButtons   = document.getElementsByClassName('remove-btn');

newBookBtn.addEventListener('click', () =>      form.style.display = "flex");
closeFormBtn.addEventListener('click', () =>    form.style.display = "none");
window.addEventListener('click', (event) =>     {if(event.target == form)form.style.display = "none"});

function Book(title, author, pages, read) {
  this.title      = title;
  this.author     = author;
  this.pages      = pages;
  this.read       = read;
  let readValue = read === true ? 'Already read' : 'Not read yet';
};
function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  saveLibrary();
};
function populateGrid(){
  clearGrid();
  for(let i = 0; i < myLibrary.length; i++){
  const bookCard      = document.createElement('div');
  const bookInfo      = document.createElement('div');
  const cardFunctions = document.createElement('div');
  const readDiv       = document.createElement('div');
  const readCheckbox  = document.createElement('input');
  const readLabel     = document.createElement('label');
  const removeButton  = document.createElement('button');

  bookCard.className      = 'book';
  bookInfo.className      = 'book-info';
  cardFunctions.className = 'card-func';
  readCheckbox.className  = 'read-checkbox';
  removeButton.className  = 'remove-btn';

  readCheckbox.type = 'checkbox';
  readLabel.innerText = 'Finished reading';
  readCheckbox.addEventListener('change', function() {
    if(this.checked) myLibrary[i].read = true
    else myLibrary[i].read = false;
    saveLibrary();
  });
  removeButton.value = i;
  removeButton.addEventListener('click', () => removeBook(removeButton.value));

  bookInfo.innerText = displayInfo(myLibrary[i]);
  removeButton.innerText = 'Remove book';
    
  readDiv.appendChild(readCheckbox);
  readDiv.appendChild(readLabel);
  cardFunctions.appendChild(readDiv);
  cardFunctions.appendChild(removeButton);
  bookCard.appendChild(bookInfo);
  bookCard.appendChild(cardFunctions);

  bookGrid.appendChild(bookCard);
  myLibrary[i].read === true ? readCheckbox.checked = true : readCheckbox.checked = false;
  };
};
function clearGrid(){
  document.querySelectorAll('.book').forEach(function(book){
    book.remove();
  });
};
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
function displayInfo(obj) {
  let string = '';
  string = `${obj.title}
  by ${obj.author}
  ${obj.pages} pages`;
  return string;
}



function removeBook(value) {
  myLibrary.splice(value, 1);
  populateGrid();
  saveLibrary();
};

function saveLibrary () {
  localStorage.setItem('savedLibrary', JSON.stringify(myLibrary));
}

function loadLibrary () {
  myLibrary = JSON.parse(localStorage.getItem('savedLibrary'));
  if (myLibrary === null) {
    myLibrary = [];
    return;
  };
  populateGrid();
}

loadLibrary();