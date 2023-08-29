const myLibrary = [];

function Book() {
    // the constructor
}

function addBookToLibrary() {
    // takes user input and stores it into a variable
    // takes title of book and store it in a variable
    // takes author
    // takes number of pages
    const author = document.querySelector(".author").value;
    const bookTitle = document.querySelector(".bookTitle").value;
    const pages = document.querySelector(".pages").value;
    // whether its been read or not
}

function outputBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(`these are the books ${myLibrary[i]}`);
    }
}