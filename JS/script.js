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
    console.log(newCard.children);
    console.log(newCard.children[0]);
    newCard.children[0].textContent = currentBook.title;
    newCard.children[1].textContent = "By " + currentBook.author;
    newCard.children[2].textContent = currentBook.pages + " pages";
    newCard.setAttribute("data-book-index", myLibrary.length - 1);
    newCard.children[4].addEventListener("click", removeBook);
    flexDiv.appendChild(newCard);
}

//Delete
const btnDelete = document.getElementsByClassName("btn-delete");

for(let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener("click", removeBook);
};

function removeBook(e) {
    console.log(e);
    console.log(e.currentTarget.parentNode);
    console.log(e.currentTarget.parentNode.getAttribute("data-book-index"));
    if(e.currentTarget.parentNode.getAttribute("data-book-index") !== "") {
        myLibrary.splice(e.currentTarget.parentNode.getAttribute("data-book-index"), 1);
        e.parent.remove();
    }
    else {
        
    }
}

