/* =========================================================
   Akib Jalal — Portfolio behaviour
   Plain JavaScript, no dependencies, no backend.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- 1. Theme (dark is the default) ---------- */
  var root = document.documentElement;
  var THEME_KEY = "aj-theme";

  try {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  } catch (e) { /* storage unavailable — keep the default theme */ }

  var themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
  });

  /* ---------- 2. Mobile navigation ---------- */
  var burger = document.getElementById("burger");
  var navLinks = document.getElementById("navLinks");

  function closeMenu() {
    navLinks.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Open menu");
  }

  burger.addEventListener("click", function () {
    var open = navLinks.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  navLinks.addEventListener("click", function (event) {
    if (event.target.tagName === "A") closeMenu();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });

  /* ---------- 3. Sticky header state ---------- */
  var nav = document.getElementById("nav");
  function onScroll() {
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- 4. Reveal on scroll ---------- */
  var revealables = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, index) {
        if (!entry.isIntersecting) return;
        entry.target.style.transitionDelay = Math.min(index * 60, 240) + "ms";
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px" });

    revealables.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- 5. Highlight the section currently in view ---------- */
  var links = Array.prototype.slice.call(navLinks.querySelectorAll("a"));
  var sections = links
    .map(function (link) { return document.querySelector(link.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

  /* ---------- 6. Placeholder links stay inert until real URLs are added ---------- */
  document.querySelectorAll("[data-placeholder]").forEach(function (el) {
    el.addEventListener("click", function (event) { event.preventDefault(); });
  });

  /* ---------- 7. Contact form → opens the visitor's mail client ---------- */
  var EMAIL = "akibjalal16@gmail.com";
  var form = document.getElementById("contactForm");
  var note = document.getElementById("formNote");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var fields = ["cf-name", "cf-email", "cf-subject", "cf-message"].map(function (id) {
      return document.getElementById(id);
    });

    var valid = true;
    fields.forEach(function (field) {
      var ok = field.checkValidity() && field.value.trim() !== "";
      field.setAttribute("aria-invalid", ok ? "false" : "true");
      if (!ok) valid = false;
    });

    if (!valid) {
      note.textContent = "Please complete every field with a valid email address.";
      return;
    }

    var name = fields[0].value.trim();
    var email = fields[1].value.trim();
    var subject = fields[2].value.trim();
    var message = fields[3].value.trim();

    var body = message + "\n\n—\n" + name + "\n" + email;
    window.location.href =
      "mailto:" + EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    note.textContent = "Opening your email app… if nothing happens, write to " + EMAIL + " directly.";
  });

  /* ---------- 8. Footer year ---------- */
  document.getElementById("year").textContent = String(new Date().getFullYear());
})();
