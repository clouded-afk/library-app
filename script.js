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

class Book {
    constructor(title, author, pageCount, read) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.read = read;
    }
}

function toggleRead(book) {
    if (book.read === false) {
        book.read = true;
    } else {
        book.read = false;
    }
}

function addBookToLibrary(newBook) {
    myLibrary.unshift(newBook);
    displayBooks();
}

function deleteBookFromLibrary(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function createNewCell(data) {
    const newCell = document.createElement("td");
    newCell.innerText = data;
    return newCell;
}

function createReadToggle(book) {
    const cell = document.createElement("td");
    cell.classList.add("read-cell");

    const readButton = document.createElement("button");
    readButton.innerText = book.read ? "Read" : "Not Read Yet";
    readButton.classList.toggle("read", book.read);
    readButton.classList.toggle("not-read", !book.read);

    readButton.addEventListener("click", function () {
        toggleRead(book);
        displayBooks();
    })

    cell.appendChild(readButton);

    return cell;
}

function createBookDelete() {
    const cell = document.createElement("td");
    cell.classList.add("del-cell");

    const delButton = document.createElement("button");
    delButton.id = "delete-button";
    delButton.innerText = "Delete";
    delButton.addEventListener("click", (event) => {
        const rowIndex = event.currentTarget.closest("tr").dataset.index;
        deleteBookFromLibrary(rowIndex);
    })

    cell.appendChild(delButton);

    return cell;
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
    newRow.appendChild(createReadToggle(book));
    newRow.appendChild(createBookDelete());
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
const newBookButton = document.querySelector(".open-form");

newBookButton.addEventListener("click", () => {
    dialog.showModal();
})

const closeForm = document.querySelector(".close-form-button");

closeForm.addEventListener("click", () => {
    dialog.close();
    form.reset();
})

displayBooks();
