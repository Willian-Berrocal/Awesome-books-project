class MyBooks {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    const books = JSON.parse(localStorage.getItem('books') || '[]');
    const book = {
      title: this.title,
      author: this.author,
    };
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    return true;
  }

  previewBook(div, arrLength) {
    div.innerHTML += `
      <p id="${arrLength}-del" class="book-class">
          <span>"${this.title}" by ${this.author}</span>
          <button class="delete-button" id="${arrLength}">Remove</button>
      </p>`;
  }

  static removeBook(id) {
    const books = JSON.parse(localStorage.getItem('books') || '[]');
    books.splice(id, 1);
    localStorage.setItem('books', JSON.stringify(books));
    return true;
  }

  static displayBooks(booksDiv) {
    const books = JSON.parse(localStorage.getItem('books') || '[]');
    if (books !== null) {
      for (let i = 0; i < books.length; i += 1) {
        booksDiv.innerHTML += `
          <p id="${i}-del" class="book-class">
              <span>"${books[i].title}" by ${books[i].author}</span>
              <button class="delete-button" id="${i}">Remove</button>
          </p>`;
      }
    }
  }
}

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
