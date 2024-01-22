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
    closeIcon.hidden = true;
    menuIcon.hidden = false;
    menuLabel.hidden = false;
    
  } else {
    menu.classList.add("showMenu");
    closeIcon.hidden = false;
    menuIcon.hidden = true;
    menuLabel.hidden = true;
  }
}

hamburger.addEventListener("click", toggleMenu);

