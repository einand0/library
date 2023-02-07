const library = document.querySelector('.container');

let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};

function addBookToLibrary(title, author, pages, status) {
    myLibrary.push(new Book(title, author, pages, status));
};





function deleteBook(e) {
    myLibrary.splice(e.target.dataset.index, 1);
    displayBooks();
};


function displayBooks() {

    library.innerHTML = " "

    myLibrary.forEach((e, i) => {
        const bookCard = document.createElement('div');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const bookStatus = document.createElement('div');
        const deleteBtn = document.createElement('button');
    
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.textContent = "Deletar";


        bookCard.classList.add('bookcard')
        bookTitle.innerHTML = `<span>Título do Livro: </span> <p> ${myLibrary[i].title}`;
        bookAuthor.innerHTML = `<span>Autor do Livro: </span> <p> ${myLibrary[i].author}`;
        bookPages.innerHTML = `<span>Quantidade de Páginas: </span> <p> ${myLibrary[i].pages}`;
        bookStatus.innerHTML = `<span>Status: </span> <p> ${myLibrary[i].status}`;

        deleteBtn.setAttribute('data-index', i);

        deleteBtn.addEventListener('click', deleteBook);


        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookStatus);
        bookCard.appendChild(deleteBtn);
        library.appendChild(bookCard);
    })
};

const btnAddBook = document.querySelector('.addNewBook');

btnAddBook.addEventListener('click', newBookForm);

const body = document.querySelector('body');
const containerForm = document.createElement('div');
const inputTitle = document.createElement('input');
const inputAuthor = document.createElement('input');
const inputPages = document.createElement('input');
const inputStatus = document.createElement('input')
const btnAddBookForm = document.createElement('input');
inputTitle.type = "text";
inputAuthor.type = "text";
inputPages.type = "number";
inputStatus.type = "checkbox";
btnAddBookForm.type = "submit";

const labelForTitle = document.createElement('label');
labelForTitle.textContent = "Título do livro:";

const labelForAuthor = document.createElement('label');
labelForAuthor.textContent = "Autor do livro:";

const labelForPages = document.createElement('label');
labelForPages.textContent = "Quantidade de páginas:"

const labelForStatus = document.createElement('label');
labelForStatus.textContent = "Já leu o livro?"


function newBookForm() {

    inputAuthor.value = " ";
    inputTitle.value = " ";
    inputPages.value = " ";

    containerForm.classList.toggle("display");
    containerForm.classList.add('containerForm');
    containerForm.appendChild(labelForTitle);
    containerForm.appendChild(inputTitle);
    containerForm.appendChild(labelForAuthor);
    containerForm.appendChild(inputAuthor);
    containerForm.appendChild(labelForPages);
    containerForm.appendChild(inputPages);
    containerForm.appendChild(labelForStatus);
    containerForm.appendChild(inputStatus);
    containerForm.appendChild(btnAddBookForm);


    body.appendChild(containerForm);

}

btnAddBookForm.addEventListener('click', submitForm);

function submitForm() {

    const bookTitleForm = inputTitle.value;
    const bookTitleAuthor = inputAuthor.value;
    const bookPagesForm = inputPages.value;
    let bookStatusForm = "";

    if (inputStatus.checked) {
        bookStatusForm = "Lido";
    } else {
        bookStatusForm = "Não lido";
    }

    addBookToLibrary(bookTitleForm, bookTitleAuthor, bookPagesForm, bookStatusForm);

    containerForm.classList.toggle("display");

    displayBooks();


};