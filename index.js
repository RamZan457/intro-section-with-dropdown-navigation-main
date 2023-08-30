// Normal not advance

// Features DropDown
document.getElementById("features").addEventListener("mouseover", () => {
  document.querySelector(".features-dropdown").style.display = "block";
  document
    .getElementById("icon-arrow")
    .setAttribute("src", "./images/icon-arrow-up.svg");
});
document.getElementById("features").addEventListener("mouseleave", () => {
  document.querySelector(".features-dropdown").style.display = "none";
  document
    .getElementById("icon-arrow")
    .setAttribute("src", "./images/icon-arrow-down.svg");
});

// Company DropDown
document.getElementById("company").addEventListener("mouseover", () => {
  document.querySelector(".company-dropdown").style.display = "block";
  document
    .getElementById("company-arrow")
    .setAttribute("src", "./images/icon-arrow-up.svg");
});
document.getElementById("company").addEventListener("mouseleave", () => {
  document.querySelector(".company-dropdown").style.display = "none";
  document
    .getElementById("company-arrow")
    .setAttribute("src", "./images/icon-arrow-down.svg");
});

// Hamburger Menu
const menuButton = document.getElementById("menu");
const iconMenu = document.querySelector("#icon-menu");
const headButtons = document.querySelector(".head-buttons");
const headUl = document.querySelector("#header-ul");
const Fdropdwon = document.querySelector(".features-dropdown");
const Cdropdwon = document.querySelector(".company-dropdown");
const HeadLast = document.querySelector("#header-last");

menuButton.addEventListener("click", () => {
  const isOpen = headButtons.style.display === "flex";
  headButtons.classList.add("menu-buttons");
  headUl.classList.add("menu-ul");
  HeadLast.classList.add("menu-last");
  Fdropdwon.classList.add("menu-dropdown");
  Cdropdwon.classList.add("menu-dropdown");
  if (isOpen) {
    iconMenu.setAttribute("src", "./images/icon-menu.svg");
    headButtons.style.display = "none";
  } else {
    iconMenu.setAttribute("src", "./images/icon-close-menu.svg");
    headButtons.style.display = "flex";
  }
});

headButtons.addEventListener("mouseleave", () => {
  iconMenu.setAttribute("src", "./images/icon-menu.svg");
  headButtons.classList.remove("menu-buttons");
  headUl.classList.remove("menu-ul");
  HeadLast.classList.remove("menu-last");
  Fdropdwon.classList.remove("menu-dropdown");
  Cdropdwon.classList.remove("menu-dropdown");
});

function handleWidthChange() {
  if (window.innerWidth > 750) {
    headButtons.style.display = "flex";
  } else {
    headButtons.style.display = "none";
  }
}
handleWidthChange();
window.addEventListener("resize", handleWidthChange);
