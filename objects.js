const myLibrary = []

function Book(title, author, length, read){
    if (!new.target){
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.title = title;
    this.author = author;
    this.length = length;
    this.read = read;
    this.getInfo = function(){
        return (title + " by " + author + ", is " + length + ". " + read + ".");
    }
}



function addBookToArray(title, author, length, read) {

}



