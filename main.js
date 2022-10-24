const author = document.querySelector('.form-author');
const title = document.querySelector('.form-title');

const addButton = document.querySelector('.add-button');

const addedBooks = document.querySelector('.added-books');

const library = [];

function AddBook (e) {
  e.preventDefault();
  
  const book = {bookTitle: title, bookAuthor: author};
  library.push(book);

  localStorage.setItem('library', JSON.stringify(library));

  const paragraph = document.createElement('p');
  paragraph.textContent = author;
  addedBooks.appendChild(paragraph);
  paragraph.textContent = title;
  addedBooks.appendChild(paragraph);

  const button = document.createElement('button');
  button.textContent = 'Remove';
  addedBooks.appendChild(button);

  const line = document.createElement('hr');
  addedBooks.appendChild(line);
}

addButton.addEventListener('click', AddBook);