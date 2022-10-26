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

  static time() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const hrs = date.getHours();
    const mns = date.getMinutes();
    const sc = date.getSeconds();
    const tm = hrs > 12 ? 'PM' : 'AM';
    const nhrs = hrs > 12 ? hrs - 12 : hrs;

    return `${months[month]} ${day} ${year}, ${nhrs}:${mns}:${sc} ${tm}`;
  }
}

const btn = document.getElementById('btn');
const booksDiv = document.getElementById('display-books');
const books = JSON.parse(localStorage.getItem('books') || '[]');
const DisplayBookListDiv = document.getElementById('all-books');
const DisplayContact = document.getElementById('contact-div');
const DisplayAddNew = document.getElementById('add-books');
const listLink = document.getElementById('list');
const addBookLink = document.getElementById('add-new');
const contactLink = document.getElementById('contact-link');

document.querySelector('.date').innerHTML = MyBooks.time();

listLink.addEventListener('click', () => {
  DisplayBookListDiv.style.display = 'block';
  DisplayContact.style.display = 'none';
  DisplayAddNew.style.display = 'none';
});

addBookLink.addEventListener('click', () => {
  DisplayBookListDiv.style.display = 'none';
  DisplayContact.style.display = 'none';
  DisplayAddNew.style.display = 'block';
});

contactLink.addEventListener('click', () => {
  DisplayBookListDiv.style.display = 'none';
  DisplayContact.style.display = 'block';
  DisplayAddNew.style.display = 'none';
});

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
