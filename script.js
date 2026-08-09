/* =========================================================
   LIOR BOUTIQUE MAROC
   Interactive JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ================= MOBILE MENU ================= */

  const menuBtn = document.getElementById("menuBtn");
  const mainNav = document.getElementById("mainNav");

  if (menuBtn && mainNav) {

    menuBtn.addEventListener("click", () => {

      mainNav.classList.toggle("active");

      const icon = menuBtn.querySelector("i");

      if (mainNav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }

    });


    /* Close menu after clicking a link */

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(link => {

      link.addEventListener("click", () => {

        mainNav.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

      });

    });

  }


  /* ================= HEADER SCROLL ================= */

  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  });


  /* ================= REVEAL ANIMATION ================= */

  const revealElements = document.querySelectorAll(
    ".section-heading, .collection-card, .product-card, .contact-card, .feature"
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

  });


  /* ================= SMOOTH ANCHOR ================= */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      const headerHeight = header
        ? header.offsetHeight
        : 0;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

    });

  });


  /* ================= WHATSAPP BUTTON ================= */

  const whatsappButton =
    document.querySelector(".whatsapp-float");

  if (whatsappButton) {

    whatsappButton.addEventListener("click", () => {

      console.log(
        "Lior Boutique Maroc - WhatsApp opened"
      );

    });

  }


  /* ================= CURRENT YEAR ================= */

  const yearElement =
    document.querySelector(".footer-bottom p");

  if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.innerHTML =
      `© ${currentYear} Lior Boutique Maroc. Tous droits réservés.`;

  }


});
/* ================= PRODUCT SEARCH & FILTER ================= */

const searchInput = document.getElementById("productSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

function filterProducts() {

  const searchValue = searchInput
    ? searchInput.value.toLowerCase().trim()
    : "";

  const activeFilter =
    document.querySelector(".filter-btn.active")?.dataset.filter || "all";

  productCards.forEach(card => {

    const name =
      (card.dataset.name || "").toLowerCase();

    const category =
      card.dataset.category || "";

    const matchesSearch =
      name.includes(searchValue);

    const matchesCategory =
      activeFilter === "all" ||
      category === activeFilter;

    if (matchesSearch && matchesCategory) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }

  });

}


/* Search */

if (searchInput) {

  searchInput.addEventListener("input", filterProducts);

}


/* Filters */

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    filterProducts();

  });

});
