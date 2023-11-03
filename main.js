let totop = document.querySelector(".to-top");
let header = document.querySelector(".header");
let text = document.querySelector(".about-content");
let img = document.querySelector(".skills-container");

window.onscroll = function () {
  if (this.scrollY > 0) {
    totop.classList.add("show");
    header.classList.add("scrolled");
    text.classList.add("scrolled");
    img.classList.add("scrolled");
    // document.getElementById("logo").src = "images/white-logo.png";
  } else {
    totop.classList.remove("show");
    header.classList.remove("scrolled");
    // document.getElementById("logo").src = "images/black-logo.png";
  }
};

let typeText = "Front-End Delevoper";
i = 0;
let typewriter = setInterval(function () {
  document.getElementById("typewriter").textContent += typeText[i];
  i++;
  if (i > typeText.length - 1) {
    clearInterval(typewriter);
  }
}, 150);

history.scrollRestoration = "manual";
$(window).on("beforeunload", function () {
  $(window).scrollTop(0);
});
