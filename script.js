const myLibrary = [];
const bookForm = document.querySelector(".form");
const openFormBtns = document.querySelectorAll("[data-form-target]");
const closeFormBtns = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

console.log(closeFormBtns);

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
    myLibrary.push(newBook);
    outputBooks();
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
    btn.addEventListener("click", () => {
        console.log("click close!")
        const form = btn.closest("#form-container");
        closeForm(form);
    });
});

bookForm.addEventListener("submit", addBookToLibrary);
