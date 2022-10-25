const btn = document.getElementById('btn');
const booksDiv = document.getElementById('display-books');
const books = JSON.parse(localStorage.getItem('books') || '[]');

btn.addEventListener('click', () => {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const myBook = new myBooks(bookTitle, bookAuthor);
  if (myBook.addBook() === true) {
    booksDiv.innerHTML += `
    <p id="${books.length - 1}-del" class="book-class">
        <span>"${bookTitle}" by ${bookAuthor}</span>
        <button class="delete-button" id="${books.length - 1}">Remove</button>
    </p>`;
    history.go(0);
  } else {
    alert('an error occured, please try again later1');
  }
});

myBooks.displayBooks();

const del = document.querySelectorAll('.delete-button');
del.forEach((element) => {
  element.addEventListener('click', () => {
    const id = parseInt(element.getAttribute('id'), 10);
    if (myBooks.removeBook(id) === true){
      const y = id.toString().concat('-del');
      document.getElementById(y).remove();
    } else {
      alert('an error occured, please try again later3');
    } 
  });
});
