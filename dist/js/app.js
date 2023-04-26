// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const navFixed = header.offsetTop;
  const Ttop = document.getElementById("Ttop");
  // important
  if (window.pageYOffset > navFixed) {
    header.classList.add("navbar-fixed");
    Ttop.classList.add("flex");
    Ttop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    Ttop.classList.add("hidden");
    Ttop.classList.remove("flex");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const mobileNav = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  mobileNav.classList.toggle("hidden");
});

// click anything to close hamburger except hamburger dan mobileNav
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != mobileNav) {
    hamburger.classList.remove("hamburger-active");
    mobileNav.classList.add("hidden");
  }
});

// dark mode
const DarkMode = document.getElementById("DarkMode");
const html = document.querySelector("html");

DarkMode.addEventListener("click", function () {
  // simple but have a weekness
  //   DarkMode.checked ? html.classList.add("dark") : html.classList.remove("dark");

  if (DarkMode.checked) {
    html.classList.add("dark");
    // theme not thame
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// toggle dark mode sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  DarkMode.checked = true;
} else {
  DarkMode.checked = false;
}
