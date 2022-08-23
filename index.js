let toglebtn = document.querySelector("#tog");
let ul = document.querySelector("#unorderedlist");

toglebtn.addEventListener("click", function () {
  if (toglebtn.classList.contains("tt")) {
    toglebtn.classList.remove("tt");
    ul.style.display = "none";
  } else {
    toglebtn.classList.add("tt");
    ul.style.display = "block";
    toglebtn.src = "mighty pictures/close icon.png";
  }
});

document.querySelectorAll(".anc").forEach(function (param) {
  param.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
