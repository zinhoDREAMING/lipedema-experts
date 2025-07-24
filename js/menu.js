let navBar = document.querySelector("#header");

document.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  if (scrollTop > 50) {
    navBar.classList.add("rolar");
  } else {
    navBar.classList.remove("rolar");
  }
});

window.addEventListener("scroll", function () {
  const backgroundHeader = document.querySelector(".background-header");
  if (window.scrollY > 50) {
    backgroundHeader.classList.add("transparent");
  } else {
    backgroundHeader.classList.remove("transparent");
  }
});
