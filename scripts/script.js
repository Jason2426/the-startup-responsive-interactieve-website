/* If the menu contains the showMenu class, we remove it to hide the menu. 
We also toggle the display to hide the close icon and show the menu icon. */
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const menuLabel = document.querySelector(".menuLabel");

/*Javascript above, all menu items with querySelectorAll. */

/* Clicking on the hamburger button will call toggleMenu(). */ 
/* It checks if the menu contains the class showMenu. */ 

function toggleMenu() {
    /* If the menu doesn't have the showMenu class, we add it, 
    show the close icon and hide the menu icon. */

  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    menuLabel.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    menuLabel.style.display = "none"
  }
}

hamburger.addEventListener("click", toggleMenu);