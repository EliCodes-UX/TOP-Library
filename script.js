const myLibrary = [];
const bookModal = document.querySelector('.bookModal');
const addBookModalBtn = document.querySelector('.openModal');
const cancelBookModalBtn = document.querySelector('.cancelBook');
const submitNewBookBtn = document.querySelector('submitNewBook');
const authorInput = document.querySelector('author');
const bookTitleInput = document.querySelector('bookTitle');
const pagesInput = document.querySelector('pages');
const readInput = document.querySelector('ifRead');
const bookList = document.querySelector('bookTable');

function book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
console.log(book);
addBookModalBtn.addEventListener('click', () => {
  bookModal.showModal();
});
cancelBookModalBtn.addEventListener('click', () => {
  bookModal.close();
});

const addBookToLibrary = (name, author, pages, read) => {
  myLibrary.push(new book(name, author, pages, read));
};
