const myLibrary = [];
const bookModal = document.querySelector('.bookModal');
const addBookModalBtn = document.querySelector('.openModal');
const cancelBookModalBtn = document.querySelector('.cancelBook');
const addBookForm = document.querySelector('.addBookModal');
// const addBookFormBtn = document.querySelector('.submitNewBook');
// const newAuthor = document.querySelector('.author');
// const newTitle = document.querySelector('.title');
// const newPages = document.querySelector('.pages');
// const newRead = document.querySelector('.ifRead');
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

document.querySelector('.submitNewBook').addEventListener('click', event => {
  console.log('Submit Book button clicked');
  event.preventDefault();
  const inputs = returnInputs(addBookForm);
  addBookToLibrary(inputs); // Pass the entire inputs object
});
// function submit() {}

class book {
  constructor(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }
  toggleRead() {
    this.read = !this.read;
    return this.read;
  }
}

function returnInputs(form) {
  const inputs = form.querySelectorAll('input');
  let values = {};
  for (const input of inputs) {
    console.log('Input:', input.name, input.value);
    if (input.type === 'checkbox') {
      values[input.name] = input.checked;
      continue;
    }
    values[input.name] = input.value;
  }
  console.log('Inputs', values);
  return values;
}

const addBookToLibrary = inputs => {
  console.log('Adding book to library:', inputs);

  if (
    inputs &&
    inputs.author &&
    inputs.title &&
    inputs.pages !== undefined &&
    inputs.read !== undefined
  ) {
    myLibrary.push(
      new book(inputs.author, inputs.title, inputs.pages, inputs.read)
    );
    console.log('myLibrary:', myLibrary);
  } else {
    console.error('Invalid inputs:', inputs);
  }
};
