const myLibrary = [];
// const addBookFormBtn = document.querySelector('.submitNewBook');
// const newAuthor = document.querySelector('.author');
// const newTitle = document.querySelector('.title');
// const newPages = document.querySelector('.pages');
// const newRead = document.querySelector('.ifRead');
const bookModal = document.querySelector('.bookModal');
const addBookModalBtn = document.querySelector('.openModal');
const cancelBookModalBtn = document.querySelector('.cancelBook');
const addBookForm = document.querySelector('.addBookModal');
const bookList = document.querySelector('.bookTable');
console.log(addBookForm);

addBookModalBtn.addEventListener('click', () => {
  bookModal.showModal();
});
cancelBookModalBtn.addEventListener('click', () => {
  bookModal.close();
  addBookForm.reset();
});

document.querySelector('.submitNewBook').addEventListener('click', event => {
  event.preventDefault();
  const inputs = returnInputs(addBookForm);
  addBookToLibrary(inputs);
  addBookForm.reset();
});

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
    if (input.type === 'checkbox') {
      values[input.name] = input.checked;
      continue;
    }
    values[input.name] = input.value;
  }

  return values;
}

const addBookToLibrary = inputs => {
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
    updateBookDisplay();
  } else {
    console.error('Invalid inputs:', inputs);
  }
};

function updateBookDisplay() {
  while (bookList.lastElementChild) {
    bookList.removeChild(bookList.lastElementChild);
  }
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const title = document.createElement('td');
    title.textContent = book.title;
    const author = document.createElement('td');
    author.textContent = book.author;
    const pages = document.createElement('td');
    pages.textContent = book.pages;

    const read = document.createElement('td');
    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.dataset.action = 'toggle';
    toggleBtn.textContent = book.read ? 'Yes' : 'No';
    toggleBtn.className = book.read ? 'toggle-btn read' : 'toggle-btn';
    read.appendChild(toggleBtn);

    const deleteTd = document.createElement('td');

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.dataset.action = 'delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'DELETE';
    deleteTd.appendChild(deleteBtn);

    const row = document.createElement('tr');
    row.dataset.index = i;
    row.append(author, title, pages, read, deleteTd);
    bookList.appendChild(row);
  }
}
