var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
// This will return a Node list
var selectPlanButton = document.querySelectorAll(".plan button");
// console.dir(backdrop);
for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function() {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}
