const prompt = require("prompt-sync")({ sigint: true });

let bookList = [];

function addBook() {
    const isbn = prompt("Please input ISBN: ");

    const existed = bookList.find(b => b.isbn === isbn);
    if (existed) {
        console.log(`Book with ISBN <${isbn}> already exists!`);
        return;
    }

    const title = prompt("Please input title: ");
    const author = prompt("Please input author: ");
    const year = prompt("Please input year: ");

    const book = { isbn, title, author, year };
    bookList.push(book);

    console.log(`The book is saved into DB with info: Book {${isbn}, ${title}, ${author}, ${year}}`);
}

function findBook() {
    const isbn = prompt("Please input ISBN: ");

    const book = bookList.find(b => b.isbn === isbn);

    if (book) {
        console.log(`Book {${book.isbn}, ${book.title}, ${book.author}, ${book.year}}`);
    } else {
        console.log(`Book with ISBN <${isbn}> is not found`);
    }
}

function updateBook() {
    const isbn = prompt("Please input ISBN: ");

    const book = bookList.find(b => b.isbn === isbn);

    if (!book) {
        console.log(`Book with ISBN <${isbn}> is not found`);
        return;
    }

    const newTitle = prompt("Please input new title: ");
    const newAuthor = prompt("Please input new author name: ");
    const newYear = prompt("Please input new year: ");

    book.title = newTitle;
    book.author = newAuthor;
    book.year = newYear;

    console.log(`The book is now updated with new content: Book {${book.isbn}, ${book.title}, ${book.author}, ${book.year}}`);
}

function deleteBook() {
    const isbn = prompt("Please input ISBN: ");

    const index = bookList.findIndex(b => b.isbn === isbn);

    if (index === -1) {
        console.log(`Book with ISBN <${isbn}> is not found`);
        return;
    }

    bookList.splice(index, 1);
    console.log("Delete book successfully!");
}

function printBooks() {
    if (bookList.length === 0) {
        console.log("Empty book list!");
        return;
    }

    console.log("\n===== Book List =====");

    bookList.forEach((book, index) => {
        console.log(`Book ${String(index + 1).padStart(2, '0')}: ${book.title}`);
        console.log(`    ISBN: ${book.isbn}`);
        console.log(`    author: ${book.author}`);
        console.log(`    year: ${book.year}`);
        console.log("");
    });
}

function menu() {
    while (true) {
        console.log(`
======= Book Management Program (CRUD)============
1. New book
2. Find a book(ISBN)
3. Update a book
4. Delete a book
5. Print the book list
0. Exit
        `);

        const choice = prompt("Choose option: ");

        switch (choice) {
            case "1":
                addBook();
                break;
            case "2":
                findBook();
                break;
            case "3":
                updateBook();
                break;
            case "4":
                deleteBook();
                break;
            case "5":
                printBooks();
                break;
            case "0":
                console.log("Exit program!");
                return;
            default:
                console.log("Invalid option!");
        }
    }
}

menu();