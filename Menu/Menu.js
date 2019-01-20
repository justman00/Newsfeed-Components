const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle("menu--open");
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

window.addEventListener("click", e => {
  let res;
  console.log(e.target);
  if (e.target !== menuButton && e.target !== menu) {
    if (
      !Array.from(document.querySelectorAll(".menu ul li")).includes(e.target)
    ) {
      menu.classList.remove("menu--open");
    }
  }
});
