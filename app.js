const openModal = document.querySelector('#open-modal')
const modalPanel = document.querySelector('#modal')

console.log(modalPanel)

openModal.addEventListener('click', function(e) {
  e.preventDefault()
  modalPanel.style.display = 'block'
})