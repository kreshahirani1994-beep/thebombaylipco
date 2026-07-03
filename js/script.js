/* ==========================================
THE BOMBAY LIP CO.
script.js
========================================== */

/* ==========================
PRELOADER
========================== */

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(() => {

        preloader.style.display = "none";

    }, 500);

});


/* ==========================
MOBILE MENU
========================== */

const menuBtn = document.getElementById("menu-btn");

const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    menuBtn.classList.toggle("active");

});


/* Close menu when a link is clicked */

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        menuBtn.classList.remove("active");

    });

});


/* ==========================
HEADER ON SCROLL
========================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(255,255,255,.98)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.background = "rgba(255,255,255,.94)";
        header.style.boxShadow = "none";

    }

});


/* ==========================
SCROLL REVEAL
========================== */

const revealItems = document.querySelectorAll(

".product-card, .feature, .why-card, .testimonial, .faq-item, .founder-grid, .instagram-grid img"

);

const reveal = () => {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();


/* ==========================
ACTIVE NAVIGATION
========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================
FAQ ACCORDION
(Optional)
========================== */

document.querySelectorAll(".faq-item").forEach(item => {

    item.addEventListener("click", () => {

        item.classList.toggle("open");

    });

});


/* ==========================
SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ==========================
CONSOLE MESSAGE
========================== */

console.log("✨ The Bombay Lip Co. website loaded successfully.");