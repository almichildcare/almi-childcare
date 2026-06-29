// MOBILE NAVBAR TOGGLE
const navToggle = document.createElement("button");
navToggle.innerHTML = "☰";
navToggle.classList.add("nav-toggle");

const navbar = document.querySelector(".navbar");
const navList = document.querySelector(".navbar ul");

document.querySelector(".nav-container").prepend(navToggle);

navToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
});


// SMOOTH ACTIVE LINK HIGHLIGHT
const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active-link"));
        link.classList.add("active-link");
    });
});


// SCROLL EFFECT (simple fade-in)
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});