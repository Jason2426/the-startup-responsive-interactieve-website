const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const menuLabel = document.querySelector(".menuLabel");

// const hideItem = document.querySelector(".hideItem");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    menuLabel.style.display = "block";

  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    menuLabel.style.display = "none";
    // menuLabel.classList.toggle("hideItem");
  }
}

hamburger.addEventListener("click", toggleMenu);

