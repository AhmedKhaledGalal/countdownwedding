/* =========================================================
   AHMED & SHOROK — WEDDING WEBSITE
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   LOADER
   ========================================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1000);

});


/* =========================================================
   COUNTDOWN
   Wedding Date:
   14 August 2026 — 8:00 PM
   Egypt Time
   ========================================================= */

const weddingDate = new Date("2026-08-14T20:00:00+03:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;


    // If wedding date has passed
    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;

    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


// Run immediately
updateCountdown();


// Update every second
setInterval(updateCountdown, 1000);


/* =========================================================
   NAVBAR SCROLL EFFECT
   ========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   PARALLAX EFFECT FOR HERO
   ========================================================= */

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        heroImage.style.transform =
            `scale(1.08) translateY(${scrollPosition * 0.12}px)`;

    }

});


/* =========================================================
   GOLD PARTICLES
   ========================================================= */

const particlesContainer =
    document.querySelector(".gold-particles");


function createParticle() {

    if (!particlesContainer) return;


    const particle = document.createElement("span");

    particle.style.position = "absolute";

    particle.style.width = "2px";

    particle.style.height = "2px";

    particle.style.borderRadius = "50%";

    particle.style.background = "#d4af37";

    particle.style.boxShadow =
        "0 0 8px rgba(212,175,55,.8)";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.opacity =
        Math.random() * 0.7 + 0.2;

    particle.style.animation =
        `floatParticle ${Math.random() * 6 + 5}s ease-in-out infinite`;

    particlesContainer.appendChild(particle);

}


// Create particles
for (let i = 0; i < 30; i++) {

    createParticle();

}


/* =========================================================
   DYNAMIC PARTICLE ANIMATION
   ========================================================= */

const particleStyle = document.createElement("style");

particleStyle.innerHTML = `

@keyframes floatParticle {

    0% {
        transform: translateY(0) scale(1);
        opacity: .2;
    }

    50% {
        transform: translateY(-30px) scale(1.5);
        opacity: .8;
    }

    100% {
        transform: translateY(-60px) scale(.5);
        opacity: 0;
    }

}

`;

document.head.appendChild(particleStyle);


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(
    ".menu a"
);


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   GALLERY IMAGE CLICK
   ========================================================= */

const galleryImage =
    document.querySelector(".gallery-item img");


if (galleryImage) {

    galleryImage.addEventListener("click", () => {

        const overlay =
            document.createElement("div");


        overlay.style.position = "fixed";

        overlay.style.inset = "0";

        overlay.style.zIndex = "99999";

        overlay.style.background =
            "rgba(0,0,0,.95)";

        overlay.style.display = "flex";

        overlay.style.alignItems = "center";

        overlay.style.justifyContent = "center";

        overlay.style.padding = "30px";

        overlay.style.cursor = "zoom-out";


        const image =
            document.createElement("img");


        image.src = galleryImage.src;

        image.style.maxWidth = "95%";

        image.style.maxHeight = "90vh";

        image.style.objectFit = "contain";

        image.style.filter = "grayscale(100%)";

        image.style.boxShadow =
            "0 0 80px rgba(212,175,55,.15)";


        overlay.appendChild(image);

        document.body.appendChild(overlay);


        overlay.addEventListener("click", () => {

            overlay.remove();

        });

    });

}


/* =========================================================
   PREVENT IMAGE DRAGGING
   ========================================================= */

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("dragstart", event => {

        event.preventDefault();

    });

});


/* =========================================================
   CONSOLE MESSAGE
   ========================================================= */

console.log(
    "❤️ Ahmed & Shorok — 14 August 2026"
);
