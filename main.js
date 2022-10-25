const btn = document.getElementById('btn');
const booksDiv = document.getElementById('display-books');
const books = JSON.parse(localStorage.getItem('books') || '[]');

btn.addEventListener('click', () => {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const myBook = new MyBooks(bookTitle, bookAuthor);
  if (myBook.addBook() === true) {
    myBook.previewBook(booksDiv, books.length - 1);
    window.history.go(0);
  }
});

MyBooks.displayBooks(booksDiv);

const del = document.querySelectorAll('.delete-button');
del.forEach((element) => {
  element.addEventListener('click', () => {
    const id = parseInt(element.getAttribute('id'), 10);
    if (MyBooks.removeBook(id) === true) {
      const y = id.toString().concat('-del');
      document.getElementById(y).remove();
    }
  });
});
