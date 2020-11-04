//NewBookBtn
const form = document.querySelector(".form-container");
form.style.display === "none"
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
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

document.getElementById("submitBtn").addEventListener("click", (e) => {
    e.preventDefault();
    let titleValue = title.value;
    let authorValue = author.value;
    let pagesValue = pages.value;
    console.log(title.value, author.value, pages.value);
    console.log(titleValue === true);
    if(title.value === true && author.value === true && pages.value === true) {
        console.log("yes");
        title.value = author.value = pages.value = "";
        form.style.display = "none";
    }

    

    
})

let myLibrary = [

];
console.log(myLibrary);

function Book() {

}

function addBookToLibrary() {

}

//Delete

function deleteBook() {

}