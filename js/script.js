const navToggle = document.querySelector(".nav__toggle");
if (navToggle)
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });
