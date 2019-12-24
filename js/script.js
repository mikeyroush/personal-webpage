const navToggle = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const home = document.querySelector("#home");

if (navToggle)
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

const headerObserverOptions = { threshold: 0.8 };

const headerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });
}, headerObserverOptions);

headerObserver.observe(home);
