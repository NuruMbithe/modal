
//modal
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});


//form submit
const form = document.getElementById ("form")

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  console.log(email);
})