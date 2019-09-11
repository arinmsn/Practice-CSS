var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
// This will return a Node list
var selectPlanButton = document.querySelectorAll(".plan button");
// console.dir(backdrop);
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function() {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

backdrop.addEventListener("click", function() {
  mobileNav.style.display = "none";
  closeModal();
});

modalNoButton.addEventListener("click", closeModal);

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}

toggleButton.addEventListener("click", function() {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
});
