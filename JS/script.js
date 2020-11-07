//NewBookBtn
const form = document.querySelector(".form-container");
form.style.display = "none";
document.getElementById("btnNewBook").addEventListener("click", () => {
    if(form.style.display === "none") {
        form.style.display = "block";
    }
    else {
        form.style.display = "none";
    }
});

//Library
let myLibrary = [];

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

document.getElementById("submitBtn").addEventListener("click", (e) => {
    e.preventDefault();
    let titleValue = title.value;
    let authorValue = author.value;
    let pagesValue = pages.value;
    console.log(title.value, author.value, pages.value);
    if(title.value !== "" && author.value !== "" && pages.value !== "") {
        title.value = author.value = pages.value = "";
        form.style.display = "none";
        const newBook = new Book(titleValue, authorValue, pagesValue);
        myLibrary.push(newBook);
        console.log(myLibrary);
        addBookToLibrary();
    };
})

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    const flexDiv = document.querySelector(".flex-container");
    console.log(myLibrary[myLibrary.length - 1]);
    let currentBook = myLibrary[myLibrary.length - 1];
    console.log(currentBook.title);
    const bookCard = document.querySelector(".card");
    const newCard = bookCard.cloneNode(true);
    console.log(newCard);
    flexDiv.appendChild(newCard);

}

//Delete

function deleteBook() {

}


// function addBookToLibrary() {
//     console.log(myLibrary[myLibrary.length - 1]);
//     let currentBook = myLibrary[myLibrary.length - 1];
//     console.log(currentBook.title);
//     let flexDiv = document.createElement("div");
//     flexDiv.className = "flex-container";
//     let cardDiv = document.createElement("div");
//     cardDiv.className = "card";
//     flexDiv.appendChild(cardDiv);
//     let titleH2 = document.createElement("h2");
//     titleH2.className = "card-title";
//     titleH2.textContent = currentBook.title;
//     cardDiv.appendChild(titleH2);
//     let authorH5 = document.createElement("h5");
//     authorH5.className = "card-author";
//     authorH5.textContent = currentBook.author;
//     cardDiv.appendChild(authorH5);
//     let span = document.createElement("span");
//     span.textContent = currentBook.pages;
//     cardDiv
// }