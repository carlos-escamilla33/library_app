const myLibrary = [];
const submitFormBtns = document.querySelectorAll("[data-submit-button]");
const openFormBtns = document.querySelectorAll("[data-form-target]");
const closeFormBtns = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const booksContainer = document.getElementById("books-container");

function Book(author, bookTitle, haveRead, pages) {
    this.author = author;
    this.bookTitle = bookTitle;
    this.haveRead = haveRead;
    this.pages = pages;
    this.id;
}

function outputBooks() {
    const lastBook = myLibrary.length - 1;
    const currBook = myLibrary[lastBook];

    const title = document.createElement("h3");
    title.textContent = `Title: ${currBook.bookTitle}`;

    const author = document.createElement("h4");
    author.textContent = `Author: ${currBook.author}`;

    const haveRead = document.createElement("p");
    haveRead.textContent = `Have Read Book: ${currBook.haveRead}`;

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${currBook.pages}`;

    const bookInfo = [title, author, haveRead, pages];
    const newBookDiv = document.createElement("div");

    for (const info of bookInfo) {
        newBookDiv.appendChild(info);
    };

    newBookDiv.classList.add("book");


    booksContainer.appendChild(newBookDiv);
}

function createBook() {
    const author = document.querySelector(".author").value;
    const bookTitle = document.querySelector(".book-title").value;
    const haveRead = document.querySelector(".checkbox").checked;
    const pages = document.querySelector(".pages").value;
    const newBook = new Book(author, bookTitle, haveRead, pages);
    return newBook;
}

function addBookToLibrary() {
    newBook = createBook();
    myLibrary.push(newBook);
    outputBooks();
}

function clearFormFields() {
    document.querySelector(".author").value = "";
    document.querySelector(".book-title").value = "";
    document.querySelector(".checkbox").checked = false;
    document.querySelector(".pages").value = "";
}

function openForm(form) {
    if (form == null) {
        return;
    }
    form.classList.add("active");
    overlay.classList.add("active");
}

function closeForm(form) {
    if (form == null) {
        return;
    }
    form.classList.remove("active");
    overlay.classList.remove("active");
}

openFormBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const form = document.querySelector(btn.dataset.formTarget);
        openForm(form);
    });
});

closeFormBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const form = btn.closest("#form-container");
        clearFormFields();
        closeForm(form);
    });
});

submitFormBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const formContainer = btn.closest("#form-container");
        addBookToLibrary();
        clearFormFields();
        closeForm(formContainer);
    });
});
