const btn = document.getElementById('btn');
const booksDiv = document.getElementById('display-books');
const books = JSON.parse(localStorage.getItem('books') || '[]');

btn.addEventListener('click', () => {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const book = {
    title: bookTitle,
    author: bookAuthor,
  };
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));

  booksDiv.innerHTML += `
  <p id="${books.length - 1}-del">
      <span>${book.title}</span><br>
      <span>${book.author}</span><br>
      <button class="delete-button" id="${books.length - 1}">Remove</button>
      <hr id="${books.length - 1}-hr">
  </p>`;
  history.go(0);
});

function displayBooks() {
  if (books !== null) {
    for (let i = 0; i < books.length; i += 1) {
      booksDiv.innerHTML += `
        <p id="${i}-del">
            <span>${books[i].title}</span><br>
            <span>${books[i].author}</span><br>
            <button class="delete-button" id="${i}">Remove</button>
            <hr id="${i}-hr">
        </p>`;
    }
  }
}

displayBooks();

const del = document.querySelectorAll('.delete-button');
del.forEach((element) => {
  element.addEventListener('click', () => {
    const id = parseInt(element.getAttribute('id'), 10);
    books.splice(id, 1);
    localStorage.setItem('books', JSON.stringify(books));
    const x = id.toString().concat('-hr');
    const y = id.toString().concat('-del');
    document.getElementById(x).style.display = 'none';
    document.getElementById(y).remove();
  });
});
