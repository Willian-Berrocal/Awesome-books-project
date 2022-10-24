const authorInput = document.querySelector('.form-author');
const titleInput = document.querySelector('.form-title');
const booksSection = document.querySelector('.books-section');
const addButton = document.querySelector('.add-button');


let data = JSON.parse(localStorage.getItem('libraryData'));

if (data !== null) {
  for (let i=0; i<data.length; i+=1) {
    const titleSpan = document.createElement('span');
    titleSpan.textContent = data[i]['title'];
    booksSection.appendChild(titleSpan);
  
    const authorSpan = document.createElement('span');
    authorSpan.textContent = data[i]['author'];
    booksSection.appendChild(authorSpan);
  
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.textContent = 'Remove';
    booksSection.appendChild(removeButton);
  
    booksSection.appendChild(document.createElement('hr'));  
  }
}


const library = [];

function AddBook (e) {
  e.preventDefault();

  const titleSpan = document.createElement('span');
  titleSpan.textContent = titleInput.value;
  booksSection.appendChild(titleSpan);

  const authorSpan = document.createElement('span');
  authorSpan.textContent = authorInput.value;
  booksSection.appendChild(authorSpan);

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.textContent = 'Remove';
  booksSection.appendChild(removeButton);

  booksSection.appendChild(document.createElement('hr'));

  library.push({title:titleInput.value, author:authorInput.value});
  localStorage.setItem('libraryData', JSON.stringify(library));
}

addButton.addEventListener('click', AddBook);

