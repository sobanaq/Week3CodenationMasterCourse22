// Activity 1
const toggleBtn = document.querySelector("#toggleBtn");
const toggleImg = document.getElementsByClassName("toggleImg")[0];

toggleBtn.addEventListener("click", () => {
  if (toggleImg.style.display === "none") {
    toggleImg.style.display = "flex";
  } else {
    toggleImg.style.display = "none";
  }
});

// Activity 2
const updateImg = document.getElementById("updateImg");
const imageInput = document.getElementById("imageInput");
const displayedImg = document.querySelectorAll(".displayedImg")[0];

updateImg.addEventListener("click", () => {
  displayedImg.src = imageInput.value;
  imageInput.value = "";
});


// Activity 3

const boxInput = document.getElementsByTagName("input")[0];
const changeColourBtn = document.getElementsByClassName("changeBtn")[0];
const mainHeading = document.getElementById("header");

changeColourBtn.addEventListener("click", () => {
  mainHeading.style.color = boxInput.value;
});
console.log(changeColourBtn);

// Activity 4
