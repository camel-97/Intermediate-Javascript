//Create Library Array
const myLibrary = []

//Function for book creation
function Book(title, author, length, read){
    if (!new.target){
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.length = length;
    this.read = read;
}

const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");

//Add book to library function that calls book creation function
function addBookToLibrary(title, author, length, read) {
    const newBook = new Book(title, author, length, read);
    myLibrary.push(newBook);
}

//Event listener to submit button, calling add book function
submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Critical!

    //Setting form elements to constants
    const title = document.getElementById("title-input").value;
    const author = document.getElementById("author-input").value;
    const length = document.getElementById("length-input").value;
    const read = document.querySelector('input[name="read-status"]:checked').value;
    
    addBookToLibrary(title, author, length, read);
    
    // run function, clear form
    displayLibrary();
    document.getElementById("book-form").reset();
});

//function to clear library, rebuild upon run appending children using the template
function displayLibrary() {
    const libraryGrid = document.getElementById("library-grid");
    const template = document.getElementById("book-template");

    libraryGrid.innerHTML = ""; //clear grid to rebuild with latest array

// clone each book into the template within html and populate with each parameter value respectively
    myLibrary.forEach(book => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".title").textContent = book.title;
        clone.querySelector(".author").textContent = book.author;
        clone.querySelector(".length").textContent = book.length;
        clone.querySelector(".read").textContent = book.read;

        const card = clone.querySelector(".book-card");
        card.dataset.id = book.id;

        const toggleBtn = clone.querySelector(".toggle-read");
        toggleBtn.addEventListener("click", () => {
            if (book.read === "You've read this!") {
                book.read = "Not read yet";
            }
            else {
                book.read = "You've read this!";
            }
            displayLibrary();
        })

        const deleteBtn = clone.querySelector(".remove");
        deleteBtn.addEventListener("click", () => {
            const index = myLibrary.findIndex(item => item.id === book.id);
            if (index !== -1) {
                myLibrary.splice(index, 1);
                displayLibrary();
            }
        })
        
        libraryGrid.appendChild(clone);
        
    });
}