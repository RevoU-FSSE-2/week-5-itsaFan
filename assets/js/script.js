const hamburgerBtn = document.getElementById("hamburgerBtn");
const closeBtn = document.getElementById("closeBtn");
const navigation = document.querySelector(".main-nav");

hamburgerBtn.addEventListener("click", function () {
  navigation.classList.toggle("active"); 
  hamburgerBtn.classList.toggle("active"); 
});

