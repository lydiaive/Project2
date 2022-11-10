// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("project2 JS imported successfully!");


  
  const likeBtn = document.getElementsByClassName("like-btn")
  console.log(likeBtn)

  const disLikeBtn = document.getElementsByClassName("dislike-btn")
  console.log(disLikeBtn)
  

  for (let i = 0; i < likeBtn.length; i++) {
    
    let button = likeBtn[i];
    let buttondislike = disLikeBtn[i]

    const like = () => {
      button.classList.add("hidden")
      buttondislike.classList.remove("hidden")
    }
    button.addEventListener('click', like);

    const dislike = () => {
      button.classList.remove("hidden")
      buttondislike.classList.add("hidden")
    }
    buttondislike.addEventListener('click', dislike);
  
};


const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-modal")
const btns = document.querySelector(".show-modal")
const overlay = document.querySelector(".overlay")
const body = document.querySelector("body")

const openModal = () => {
  modal.classList.remove("hidden")
  overlay.classList.remove("hidden")
  body.classList.add("noscroll")
}

const closeModal = () => {
  modal.classList.add("hidden")
  overlay.classList.add("hidden")
  body.classList.remove("noscroll")
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

})