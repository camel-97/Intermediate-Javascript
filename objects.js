const myLibrary = []

function Book(title, author, length, read){
    if (!new.target){
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.length = length;
    this.read = read;
    this.getInfo = function(){
        return (title + " by " + author + ", is " + length + ". " + read + ".");
    }
}

const title = document.getElementById("title-input");
const author = document.getElementById("author-input");
const length = document.getElementById("length-input");
const read = document.getElementById("read-input");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn")


function addBookToLibrary(title, author, length, read) {
    const newBook = new Book(title, author, length, read);
    myLibrary.push(newBook);
}

document.addEventListener()
addBookToLibrary(
    title.value,
    author.value,
    length.value,
    read.value
);



