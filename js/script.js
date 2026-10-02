const header = document.querySelector("#site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
const revealItems = document.querySelectorAll(".reveal");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

// Mobile navigation
menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

navAnchors.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open menu");
  });
});

// Scroll reveal
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    obs.unobserve(entry.target);
  });
}, {
  threshold: 0.12,
  rootMargin: "0px 0px -45px 0px"
});

revealItems.forEach(item => observer.observe(item));

// Active navigation section
const sections = document.querySelectorAll("main section[id]");
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const current = entry.target.id;
    navAnchors.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  });
}, {
  rootMargin: "-40% 0px -50% 0px",
  threshold: 0
});

sections.forEach(section => sectionObserver.observe(section));

// Small parallax movement for the hero visual
const heroPerson = document.querySelector(".hero-person");
window.addEventListener("scroll", () => {
  if (!heroPerson || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const y = Math.min(window.scrollY * 0.10, 60);
  heroPerson.style.transform = `translateY(${y}px)`;
}, { passive: true });

// Contact form: front-end confirmation until a backend/email service is connected.
const form = document.querySelector("#contact-form");
const status = document.querySelector(".form-status");

form?.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "there").trim();

  status.textContent = `Thanks, ${name}. Your message is ready to be connected to your preferred form service.`;
  form.reset();
});

// Current year
document.querySelector("#year").textContent = new Date().getFullYear();
