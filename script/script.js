function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        if (this.read === true){
           return this.title + " by " + this.author + ", " + this.pages + ", is already read"
        }
        else{
            return this.title + " by " + this.author + ", " + this.pages + ", not read yet"
        }
    };
}

const myLibrary = [];

function addBookToLibrary(event){
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;
    const warning = document.querySelector("#dialog");
    if(title===""||author===""||pages===""||read===""){
        displayWarning("Por favor rellene todos los campos",warning);
    }
    else{
        const book = new Book(title,author,pages,read);
        myLibrary.push(book);
        document.getElementById('dialog').close();
        const containerBook = document.createElement("div");
        containerBook.classList.add("Book");
        const deleteBookButton = document.createElement("button");
        deleteBookButton.classList.add("deleteBookButton");
        deleteBookButton.textContent = "Delete Book";
        containerBook.textContent = book.info();
        containerBook.appendChild(deleteBookButton);
        container.appendChild(containerBook);
    }
}

document.getElementById("New-Book").addEventListener('click',function(){
    document.getElementById('dialog').show();
});

document.getElementById('exit').addEventListener('click',function(){
    document.getElementById('dialog').close();
});

const save = document.querySelector('.save');
save.addEventListener('click', addBookToLibrary,'false');

const deleteBook = document.querySelector(".deleteBookButton");
deleteBook.addEventListener('click',function(){
    const book = this.parentNode;
    console.log(book.title);
});

//Logica de Tiempo de Muestra del mensaje de error de que todos los campos no estan llenos
let warningTimeout;
const warningBox = document.createElement("div");
warningBox.className = "warning";

function displayWarning(msg,warning) {
  warningBox.textContent = msg;

  if (document.body.contains(warningBox)) {
    clearTimeout(warningTimeout);
  } else {
    warning.appendChild(warningBox);
  }

  warningTimeout = setTimeout(() => {
    warningBox.parentNode.removeChild(warningBox);
    warningTimeout = -1;
  }, 2000);
}

//Este pedazo lo borro al final, es solo para mostrar los dos primeros libros

const container = document.querySelector("#books-section");

const book1 = new Book("El Padrino","Mario Puzo",400,true);
const book2 = new Book("Los Miserables","Victor Hugo", 600,true);

myLibrary.push(book1);
myLibrary.push(book2);

for(let i=0;i<myLibrary.length;i++){
    const containerBook = document.createElement("div");
    containerBook.classList.add("Book");
    const deleteBookButton = document.createElement("button");
    deleteBookButton.classList.add("deleteBookButton");
    deleteBookButton.textContent = "Delete Book";
    console.log(myLibrary[i].info());
    containerBook.textContent = myLibrary[i].info();
    containerBook.appendChild(deleteBookButton);
    container.appendChild(containerBook);
}