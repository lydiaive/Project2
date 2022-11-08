// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("project2 JS imported successfully!");
});

const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-modal")
const btns = document.querySelector(".show-modal")
const overlay = document.querySelector(".overlay");

const openModal = () => {
  modal.classList.remove("hidden")
  overlay.classList.remove("hidden")
}

const closeModal = () => {
  modal.classList.add("hidden")
  overlay.classList.add("hidden")
}

btns.addEventListener("click", () =>{
  openModal()
})

closeButton.addEventListener("click", () => {
  closeModal()
})

overlay.addEventListener("click", () => {
  closeModal();
})