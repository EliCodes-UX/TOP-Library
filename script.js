const bookModal = document.querySelector('.bookModal');
const addBookModal = document.querySelector('.openModal');
const cancelBookModal = document.querySelector('.cancelBook');

addBookModal.addEventListener('click', () => {
  bookModal.showModal();
});
cancelBookModal.addEventListener('click', () => {
  bookModal.close();
});
