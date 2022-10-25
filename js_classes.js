class myBooks {
    
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

    static removeBook(id) {
      const books = JSON.parse(localStorage.getItem('books') || '[]');
      books.splice(id, 1);
      localStorage.setItem('books', JSON.stringify(books));
      return true;
    }

    static displayBooks() {
      const books = JSON.parse(localStorage.getItem('books') || '[]');
      if (books !== null){
        for (let i = 0; i < books.length; i += 1){
        booksDiv.innerHTML += `
            <p id="${i}-del" class="book-class">
                <span>"${books[i].title}" by ${books[i].author}</span>
                <button class="delete-button" id="${i}">Remove</button>
            </p>`;
        }
      }
    }
}