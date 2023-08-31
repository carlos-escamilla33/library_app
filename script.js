const myLibrary = [];
const bookForm = document.querySelector(".form");

function Book(author, bookTitle, haveRead, pages) {
    this.author = author;
    this.bookTitle = bookTitle;
    this.haveRead = haveRead;
    this.pages = pages;
}

function outputBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(`these are the books ${myLibrary[i]}`);
    }
}

function addBookToLibrary(e) {
    e.preventDefault();
    const author = document.querySelector(".author").value;
    const bookTitle = document.querySelector(".book-title").value;
    const haveRead = document.querySelector(".checkbox").checked;
    const pages = document.querySelector(".pages").value;
    const newBook = new Book(author, bookTitle, haveRead, pages);

    console.log(newBook);
    outputBooks();
    myLibrary.push(newBook);
}6

bookForm.addEventListener("submit", addBookToLibrary);
