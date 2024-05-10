// Problem:
// Library Management System

// Define an array to store books in the library
let library = [];

//Q1.// Function to add a new book to the library
function addBook(title, author, isbn) {
    let book = {
        title: title,
        author: author,
        isbn: isbn,
        status: "Available" // Initial status is "Available"
    };
    library.push(book); // Add the book to the library array
    console.log(`Added book: ${title} by ${author} (ISBN: ${isbn})`);
}

//Q2.// Function to display all available books in the library
function displayBooks() {
    console.log("Available Books:");
    library.forEach(book => {
        if (book.status === "Available") {
            console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn})`);
        }
    });
}

//Q3.// Function to borrow a book from the library
function borrowBook(isbn) {
    let found = false;
    for (let book of library) {
        if (book.isbn === isbn) {
            if (book.status === "Available") {
                book.status = "Borrowed"; // Update the status to "Borrowed"
                console.log(`Book with ISBN ${isbn} has been borrowed.`);
            } else {
                console.log(`Book with ISBN ${isbn} is not available for borrowing.`);
            }
            found = true;
            break;
        }
    }
    if (!found) {
        console.log(`Book with ISBN ${isbn} does not exist in the library.`);
    }
}

//Q4.// Function to return a borrowed book to the library
function returnBook(isbn) {
    let found = false;
    for (let book of library) {
        if (book.isbn === isbn) {
            if (book.status === "Borrowed") {
                book.status = "Available"; // Update the status to "Available"
                console.log(`Book with ISBN ${isbn} has been returned.`);
            } else {
                console.log(`Book with ISBN ${isbn} is not borrowed.`);
            }
            found = true;
            break;
        }
    }
    if (!found) {
        console.log(`Book with ISBN ${isbn} does not exist in the library.`);
    }
}

// Example usage:
addBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
addBook("To Kill a Mockingbird", "Harper Lee", "9780061120084");
displayBooks();
borrowBook("9780743273565");
displayBooks();
returnBook("9780743273565");
displayBooks();
