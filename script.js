const myLibrary = [];
const bookModal = document.querySelector('.bookModal');
const addBookModalBtn = document.querySelector('.openModal');
const cancelBookModalBtn = document.querySelector('.cancelBook');
const addBookForm = document.querySelector('.addBookModal');
const addBookFormBtn = document.querySelector('.submitNewBook');
const newAuthor = document.querySelector('.author');
const newTitle = document.querySelector('.bookTitle');
const newPages = document.querySelector('.pages');
const newRead = document.querySelector('.ifRead');
const bookList = document.querySelector('.bookTable');
console.log(addBookForm);

addBookModalBtn.addEventListener('click', () => {
  console.log('clicked');
  bookModal.showModal();
});
cancelBookModalBtn.addEventListener('click', () => {
  console.log('clicked');
  bookModal.close();
});

document.querySelector('.submitNewBook').addEventListener('click', () => {
  console.log('Submit Book button clicked');
  addBookForm.submit(); // Manually submit the form
});
// event.preventDefault();
// const inputs = returnInputs(addBookForm);
// addBookToLibrary(inputs.title, inputs.author, inputs.pages, inputs.read);

class book {
  constructor(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  toggleRead() {
    this.read = !this.read;
    return this.read;
  }
}

const addBookToLibrary = (title, author, pages, read) => {
  myLibrary.push(new book(title, author, pages, read));
};

function returnInputs(form) {
  const inputs = form.querySelectorAll('input');
  let values = {};
  for (const input of inputs) {
    if (input.type === 'checkbox') {
      values[input.name] = input.checked;
      continue;
    }
    values[input.name] = input.value;
  }
  return values;
}
