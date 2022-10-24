const authorInput = document.querySelector('.form-author');
const titleInput = document.querySelector('.form-title');
const booksSection = document.querySelector('.books-section');
const addButton = document.querySelector('.add-button');
let library = [];

let data = JSON.parse(localStorage.getItem('libraryData'));

if (data !== null) {
  for (let i=0; i<data.length; i+=1) {
    const newBook = document.createElement('div');
    newBook.classList.add('book-info');
    booksSection.appendChild(newBook);

    const titleSpan = document.createElement('span');
    titleSpan.textContent = data[i]['title'];
    newBook.appendChild(titleSpan);
  
    const authorSpan = document.createElement('span');
    authorSpan.textContent = data[i]['author'];
    newBook.appendChild(authorSpan);
  
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.textContent = 'Remove';
    newBook.appendChild(removeButton);
  
    newBook.appendChild(document.createElement('hr'));

    library.push({title: data[i]['title'], author: data[i]['author']});
  }
  localStorage.setItem('libraryData', JSON.stringify(library));
}


function AddBook (e) {
  e.preventDefault();

  const newBook = document.createElement('div');
  newBook.classList.add('book-info');
  booksSection.appendChild(newBook);

  const titleSpan = document.createElement('span');
  titleSpan.textContent = titleInput.value;
  newBook.appendChild(titleSpan);

  const authorSpan = document.createElement('span');
  authorSpan.textContent = authorInput.value;
  newBook.appendChild(authorSpan);

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.textContent = 'Remove';
  newBook.appendChild(removeButton);

  newBook.appendChild(document.createElement('hr'));

  library.push({title:titleInput.value, author:authorInput.value});
  localStorage.setItem('libraryData', JSON.stringify(library));
}

addButton.addEventListener('click', AddBook);


const removeButton = document.querySelectorAll('.remove-button');

function removeBook (e) {
  e.preventDefault();
  const parentDiv = e.currentTarget.parentNode;
  parentDiv.remove();

  const bookTitle = e.currentTarget.previousElementSibling.previousElementSibling.textContent;

  library = library.filter(obj => obj.title!==bookTitle);
  localStorage.setItem('libraryData', JSON.stringify(library));
}

removeButton.forEach((btn) => btn.addEventListener('click', removeBook));