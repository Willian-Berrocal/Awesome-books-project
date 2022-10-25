class MyBooks {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    MyBooks.val = true;
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

export default MyBooks;