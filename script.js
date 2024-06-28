const myLibrary = [
    {
        title : "The Assassin's Blade",
        author : "Sarah J. Maas",
        pageCount : 435,
        read : false
    },
    {
        title : "Throne of Glass",
        author : "Sarah J. Maas",
        pageCount : 406,
        read : false
    },
    {
        title : "Fourth Wing",
        author : "Rebecca Yarros",
        pageCount : 518,
        read : false
    }
];

function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}

function addBookToLibrary(newBook) {
    myLibrary.unshift(newBook);
    displayBooks();
}

function createNewCell(data) {
    const newCell = document.createElement("td");
    newCell.innerHTML = data;
    return newCell
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const titleData = document.getElementById("book-title").value;
    const authorData = document.getElementById("book-author").value;
    const pageData = document.getElementById("page-count").value;
    const readStatus = document.querySelector('input[name="read-status"]').checked;

    const newBook = new Book(titleData, authorData, pageData, readStatus);
    addBookToLibrary(newBook);
    
    dialog.close();
    form.reset();
})

function createNewRow(book, index) {
    const newRow = document.createElement("tr");
    newRow.dataset.index = index;
    newRow.appendChild(createNewCell(book.title));
    newRow.appendChild(createNewCell(book.author));
    newRow.appendChild(createNewCell(book.pageCount));
    return newRow
}

function displayBooks() {
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";

    myLibrary.forEach((book, index) => {
        tableBody.appendChild(createNewRow(book, index))
    })
}

const dialog = document.querySelector("dialog");
const newBookButton = document.querySelector(".open-form")

newBookButton.addEventListener("click", () => {
    dialog.showModal();
})

const closeForm = document.querySelector(".close-form-button")

closeForm.addEventListener("click", () => {
    dialog.close();
})

displayBooks();

console.log(myLibrary)