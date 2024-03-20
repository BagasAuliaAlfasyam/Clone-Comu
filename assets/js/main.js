const wrapper = document.querySelector(".nav__wrapper");
const menu = document.querySelector(".nav__menu");

let navbarHeight = 0;
const finalHeight = 90;
let id;

const toggleNavbar = () => {
  clearInterval(id);
  id = setInterval(() => {
    navbarHeight = wrapper.classList.contains("open")
      ? Math.min(navbarHeight + 1, finalHeight)
      : Math.max(navbarHeight - 1, 0);
    wrapper.style.height = navbarHeight + "px";
    if (navbarHeight === 0 || navbarHeight === finalHeight) clearInterval(id);
  }, 0);
};

menu.addEventListener("click", () => {
  wrapper.classList.toggle("open");
  toggleNavbar();
});
