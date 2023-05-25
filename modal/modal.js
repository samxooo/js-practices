const openModalBtn = document.getElementById('open-modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalBtn = document.getElementById('close-modal-btn');

openModalBtn.addEventListener("click", () => {
    modalOverlay.classList.add('open-modal')
})

closeModalBtn.addEventListener("click", () => {
    modalOverlay.classList.remove('open-modal')
})