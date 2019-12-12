class Book {
    constructor (title, genre, author, read, date) {
      this.title = title;
      this.genre = genre;
      this.author = author;
      this.read = read;
      this.date = new Date(date) || Date.now();
    }
  }
    
  class Booklist {
    constructor (book) {
      this.books = [];
      this.books.push(book);
    }
