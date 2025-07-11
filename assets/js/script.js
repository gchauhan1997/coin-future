// js for bottom navigation

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav__item");

  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      navItems.forEach(function (el) {
        el.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});
