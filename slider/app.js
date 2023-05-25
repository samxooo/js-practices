const openModalBtn = document.querySelector('.modal-btn');
const hiddenModal = document.querySelector('.hidden-modal');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener("click", () => {
    hiddenModal.classList.add('open-modal');
})

closeModalBtn.addEventListener("click", () => {
    hiddenModal.classList.remove('open-modal');
})