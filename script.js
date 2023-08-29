const myLibrary = [];
const bookForm = document.querySelector(".form");

function Book(author, bookTitle, pages) {
    this.author = author;
    this.bookTitle = bookTitle;
    this.pages = pages;
}

function addBookToLibrary(e) {
    e.preventDefault();
    const author = document.querySelector(".author").value;
    const bookTitle = document.querySelector(".book-title").value;
    const pages = document.querySelector(".pages").value;
    const newBook = new Book(author, bookTitle, pages);
    console.log(newBook);
    myLibrary.push(newBook);
}

function outputBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(`these are the books ${myLibrary[i]}`);
    }
}

bookForm.addEventListener("submit", addBookToLibrary);
