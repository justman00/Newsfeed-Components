const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  // toggling 2 classes
  if (menu.classList.contains("menu--open")) {
    menu.classList.remove("menu--open");
    menu.classList.add("menu--close");
  } else if (menu.classList.contains("menu--close")) {
    menu.classList.remove("menu--close");
    menu.classList.add("menu--open");
  } else {
    menu.classList.add("menu--open");
  }
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", e => {
  e.stopPropagation();
  toggleMenu();
});

// makes clicking anywhere but the header or the menu close the menu
window.addEventListener("click", e => {
  if (e.target !== menuButton && e.target !== menu) {
    if (
      !Array.from(document.querySelectorAll(".menu ul li")).includes(e.target)
    ) {
      menu.classList.remove("menu--open");
      menu.classList.add("menu--close");
    }
  }
});
