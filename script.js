/* =========================================================
   AHMED & SHOROK — LUXURY WEDDING WEBSITE
   ========================================================= */

:root {
    --black: #080808;
    --black-soft: #101010;
    --gold: #d4af37;
    --gold-light: #f1d77a;
    --white: #f7f5ef;
    --muted: #b7b3a9;
    --border: rgba(212, 175, 55, 0.25);
    --glass: rgba(255, 255, 255, 0.045);
}


/* =========================================================
   RESET
   ========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--black);
    color: var(--white);
    font-family: "Cormorant Garamond", Georgia, serif;
    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

img {
    max-width: 100%;
    display: block;
}


/* =========================================================
   LOADER
   ========================================================= */

#loader {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: #050505;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: opacity 0.8s ease, visibility 0.8s ease;
}

.loader-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.loader-monogram {
    font-family: "Cinzel", serif;
    font-size: 42px;
    letter-spacing: 8px;
}

.loader-monogram span {
    color: var(--gold);
}

.loader-line {
    width: 80px;
    height: 1px;
    background: var(--gold);
    margin: 20px 0;
    animation: loaderLine 1.8s ease-in-out infinite;
}

.loader-content p {
    color: var(--muted);
    font-size: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
}

#loader.hide {
    opacity: 0;
    visibility: hidden;
}

@keyframes loaderLine {
    0%,
    100% {
        transform: scaleX(0.3);
        opacity: 0.4;
    }

    50% {
        transform: scaleX(1);
        opacity: 1;
    }
}


/* =========================================================
   NAVBAR
   ========================================================= */

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 24px 5%;

    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.7),
        transparent
    );

    transition: 0.4s ease;
}

.navbar.scrolled {
    background: rgba(8, 8, 8, 0.92);
    backdrop-filter: blur(15px);
    padding: 16px 5%;
    border-bottom: 1px solid rgba(212, 175, 55, 0.12);
}

.logo {
    font-family: "Cinzel", serif;
    font-size: 22px;
    letter-spacing: 5px;
}

.logo span {
    color: var(--gold);
}

.menu {
    display: flex;
    gap: 30px;
}

.menu a {
    font-family: "Cinzel", serif;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    position: relative;
    transition: 0.3s ease;
}

.menu a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 0;
    height: 1px;
    background: var(--gold);
    transition: width 0.3s ease;
}

.menu a:hover {
    color: var(--gold);
}

.menu a:hover::after {
    width: 100%;
}


/* =========================================================
   HERO
   ========================================================= */

.hero {
    position: relative;
    height: 100vh;
    min-height: 700px;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-image {
    position: absolute;
    inset: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;

    filter:
        grayscale(100%)
        contrast(1.08)
        brightness(0.68);

    transform: scale(1.04);

    animation: heroZoom 18s ease-in-out infinite alternate;
}

@keyframes heroZoom {
    from {
        transform: scale(1.04);
    }

    to {
        transform: scale(1.13);
    }
}

.hero-overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.65) 0%,
            rgba(0, 0, 0, 0.2) 40%,
            rgba(0, 0, 0, 0.7) 100%
        );
}

.hero::after {
    content: "";
    position: absolute;
    inset: 20px;

    border: 1px solid rgba(212, 175, 55, 0.25);

    pointer-events: none;
}

.hero-content {
    position: relative;
    z-index: 5;

    text-align: center;

    max-width: 900px;
    padding: 30px;
}

.hero-intro {
    font-family: "Cinzel", serif;

    font-size: 12px;
    letter-spacing: 5px;
    text-transform: uppercase;

    color: rgba(255, 255, 255, 0.85);

    margin-bottom: 25px;
}

.couple-names {
    font-family: "Great Vibes", cursive;

    font-size: clamp(75px, 11vw, 150px);

    font-weight: 400;

    line-height: 0.95;

    text-shadow:
        0 5px 30px rgba(0, 0, 0, 0.7);

    white-space: nowrap;
}

.couple-names span {
    color: var(--gold);

    font-family: "Cormorant Garamond", serif;

    font-size: 0.45em;

    margin: 0 12px;

    vertical-align: middle;
}

.gold-divider {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 15px;

    margin: 25px auto;
}

.gold-divider span {
    width: 70px;
    height: 1px;

    background: linear-gradient(
        to right,
        transparent,
        var(--gold)
    );
}

.gold-divider span:last-child {
    background: linear-gradient(
        to left,
        transparent,
        var(--gold)
    );
}

.gold-divider i {
    color: var(--gold);
    font-size: 11px;
}

.wedding-date {
    font-family: "Cinzel", serif;

    font-size: clamp(18px, 2vw, 25px);

    letter-spacing: 7px;

    text-transform: uppercase;

    color: var(--white);
}

.discover-btn {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    margin-top: 55px;

    font-family: "Cinzel", serif;

    font-size: 10px;
    letter-spacing: 3px;

    text-transform: uppercase;

    color: var(--white);

    transition: 0.4s ease;
}

.discover-btn i {
    color: var(--gold);
    font-size: 16px;

    animation: arrowDown 1.8s ease-in-out infinite;
}

.discover-btn:hover {
    color: var(--gold);
}

@keyframes arrowDown {
    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(8px);
    }
}


/* =========================================================
   GOLD PARTICLES
   ========================================================= */

.gold-particles {
    position: absolute;
    inset: 0;

    pointer-events: none;

    background-image:
        radial-gradient(
            circle,
            rgba(212, 175, 55, 0.55) 1px,
            transparent 1px
        );

    background-size: 180px 180px;

    opacity: 0.25;

    animation: particlesMove 20s linear infinite;
}

@keyframes particlesMove {
    from {
        background-position: 0 0;
    }

    to {
        background-position: 180px 180px;
    }
}


/* =========================================================
   GENERAL SECTIONS
   ========================================================= */

.section {
    position: relative;

    padding: 130px 6%;
}

.section-container {
    max-width: 1100px;
    margin: auto;
}

.section-heading {
    text-align: center;
    margin-bottom: 65px;
}

.small-title {
    font-family: "Cinzel", serif;

    color: var(--gold);

    font-size: 10px;

    letter-spacing: 5px;

    text-transform: uppercase;
}

.section-heading h2 {
    font-family: "Cormorant Garamond", serif;

    font-size: clamp(50px, 7vw, 80px);

    font-weight: 400;

    margin-top: 8px;
}


/* =========================================================
   STORY
   ========================================================= */

.story {
    background:
        radial-gradient(
            circle at center,
            rgba(212, 175, 55, 0.07),
            transparent 45%
        );
}

.story-content {
    max-width: 780px;
    margin: auto;

    text-align: center;
}

.story-content p {
    font-size: 22px;
    line-height: 1.8;

    color: var(--muted);

    margin-bottom: 28px;
}

.story-content p:first-child {
    color: var(--white);
    font-size: 27px;
}


/* =========================================================
   DETAILS
   ========================================================= */

.details {
    background: var(--black-soft);
}

.details-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 25px;
}

.detail-card {
    text-align: center;

    padding: 50px 25px;

    background: var(--glass);

    border: 1px solid var(--border);

    backdrop-filter: blur(15px);

    transition:
        transform 0.4s ease,
        border-color 0.4s ease,
        box-shadow 0.4s ease;
}

.detail-card:hover {
    transform: translateY(-10px);

    border-color: rgba(212, 175, 55, 0.7);

    box-shadow:
        0 20px 60px rgba(0, 0, 0, 0.4),
        0 0 30px rgba(212, 175, 55, 0.05);
}

.detail-icon {
    width: 60px;
    height: 60px;

    border: 1px solid var(--gold);

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 auto 25px;

    color: var(--gold);

    font-size: 20px;
}

.detail-card > span {
    font-family: "Cinzel", serif;

    font-size: 10px;

    letter-spacing: 4px;

    color: var(--gold);
}

.detail-card h3 {
    font-family: "Cormorant Garamond", serif;

    font-size: 25px;

    font-weight: 500;

    margin-top: 12px;
}

.detail-card p {
    color: var(--muted);

    margin-top: 5px;

    font-size: 18px;
}


/* =========================================================
   COUNTDOWN
   ========================================================= */

.countdown-section {
    background:
        linear-gradient(
            rgba(0, 0, 0, 0.88),
            rgba(0, 0, 0, 0.96)
        ),
        url("assets/hero.jpg");

    background-size: cover;
    background-position: center;

    background-attachment: fixed;
}

.countdown {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    max-width: 850px;

    margin: auto;

    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

.count-box {
    text-align: center;

    padding: 35px 15px;

    border-right: 1px solid var(--border);
}

.count-box:last-child {
    border-right: none;
}

.count-box strong {
    display: block;

    font-family: "Cinzel", serif;

    font-size: clamp(35px, 5vw, 65px);

    font-weight: 400;

    color: var(--gold);
}

.count-box span {
    display: block;

    margin-top: 8px;

    font-family: "Cinzel", serif;

    font-size: 9px;

    letter-spacing: 4px;

    color: var(--muted);
}


/* =========================================================
   LOCATION
   ========================================================= */

.location {
    text-align: center;
}

.venue-content {
    max-width: 750px;
    margin: auto;

    padding: 70px 30px;

    border: 1px solid var(--border);

    background: var(--glass);

    backdrop-filter: blur(15px);
}

.venue-info h3 {
    font-family: "Cormorant Garamond", serif;

    font-size: 42px;

    font-weight: 400;
}

.venue-info p {
    color: var(--muted);

    font-size: 22px;

    margin: 5px 0 30px;
}

.location-btn {
    display: inline-flex;

    align-items: center;

    gap: 10px;

    padding: 15px 28px;

    border: 1px solid var(--gold);

    color: var(--gold);

    font-family: "Cinzel", serif;

    font-size: 10px;

    letter-spacing: 2px;

    text-transform: uppercase;

    transition: 0.4s ease;
}

.location-btn:hover {
    background: var(--gold);

    color: #000;

    transform: translateY(-3px);

    box-shadow:
        0 10px 35px rgba(212, 175, 55, 0.2);
}


/* =========================================================
   GALLERY
   ========================================================= */

.gallery-section {
    background: var(--black-soft);
}

.gallery {
    max-width: 850px;

    margin: auto;
}

.gallery-item {
    position: relative;

    overflow: hidden;

    border: 1px solid var(--border);
}

.gallery-item::after {
    content: "";

    position: absolute;

    inset: 20px;

    border: 1px solid rgba(255, 255, 255, 0.35);

    pointer-events: none;

    transition: 0.5s ease;
}

.gallery-item img {
    width: 100%;

    aspect-ratio: 1 / 1;

    object-fit: cover;

    filter: grayscale(100%);

    transition:
        transform 1s ease,
        filter 1s ease;
}

.gallery-item:hover img {
    transform: scale(1.06);

    filter: grayscale(0%);
}

.gallery-item:hover::after {
    inset: 30px;

    border-color: var(--gold);
}


/* =========================================================
   CLOSING
   ========================================================= */

.closing {
    min-height: 650px;

    display: flex;

    align-items: center;

    justify-content: center;

    text-align: center;

    background:
        radial-gradient(
            circle at center,
            rgba(212, 175, 55, 0.08),
            transparent 45%
        );
}

.closing-content {
    max-width: 700px;
}

.closing-heart {
    color: var(--gold);

    font-size: 28px;

    margin-bottom: 25px;

    animation: heartPulse 2s infinite;
}

@keyframes heartPulse {
    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.15);
    }
}

.closing h2 {
    font-family: "Great Vibes", cursive;

    font-size: clamp(65px, 9vw, 110px);

    font-weight: 400;

    color: var(--white);
}

.closing p {
    color: var(--muted);

    font-size: 21px;

    line-height: 1.7;

    margin-top: 12px;
}

.signature {
    font-family: "Great Vibes", cursive;

    font-size: 55px;

    margin-top: 40px;
}

.signature span {
    color: var(--gold);

    margin: 0 8px;
}


/* =========================================================
   FOOTER
   ========================================================= */

footer {
    padding: 50px 20px;

    text-align: center;

    background: #050505;

    border-top: 1px solid rgba(212, 175, 55, 0.15);
}

.footer-monogram {
    font-family: "Cinzel", serif;

    font-size: 25px;

    letter-spacing: 6px;
}

.footer-monogram span {
    color: var(--gold);
}

footer p {
    color: var(--muted);

    font-size: 16px;

    margin: 15px 0;
}

footer small {
    color: var(--gold);

    letter-spacing: 4px;
}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 768px) {

    .navbar {
        padding: 18px 22px;
    }

    .menu {
        display: none;
    }

    .logo {
        font-size: 18px;
    }

    .hero {
        min-height: 650px;
    }

    .hero::after {
        inset: 12px;
    }

    .hero-content {
        padding: 20px;
    }

    .hero-intro {
        font-size: 9px;
        letter-spacing: 3px;
        margin-bottom: 18px;
    }

    .couple-names {
        font-size: clamp(65px, 18vw, 100px);

        white-space: normal;
    }

    .couple-names span {
        display: block;

        font-size: 0.35em;

        margin: 5px 0;
    }

    .gold-divider span {
        width: 45px;
    }

    .wedding-date {
        font-size: 14px;

        letter-spacing: 4px;
    }

    .discover-btn {
        margin-top: 40px;
    }

    .section {
        padding: 90px 20px;
    }

    .section-heading {
        margin-bottom: 45px;
    }

    .section-heading h2 {
        font-size: 52px;
    }

    .story-content p {
        font-size: 19px;

        line-height: 1.7;
    }

    .story-content p:first-child {
        font-size: 22px;
    }

    .details-grid {
        grid-template-columns: 1fr;
    }

    .detail-card {
        padding: 40px 20px;
    }

    .countdown {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .count-box {
        border-bottom: 1px solid var(--border);
    }

    .count-box:nth-child(2) {
        border-right: none;
    }

    .count-box:nth-child(3),
    .count-box:nth-child(4) {
        border-bottom: none;
    }

    .venue-content {
        padding: 50px 20px;
    }

    .venue-info h3 {
        font-size: 34px;
    }

    .gallery-item::after {
        inset: 12px;
    }

    .closing {
        min-height: 550px;
    }

    .closing h2 {
        font-size: 70px;
    }

    .signature {
        font-size: 45px;
    }
}


/* =========================================================
   SMALL PHONES
   ========================================================= */

@media (max-width: 400px) {

    .hero-intro {
        font-size: 8px;
    }

    .couple-names {
        font-size: 65px;
    }

    .wedding-date {
        font-size: 12px;
    }

    .count-box strong {
        font-size: 35px;
    }

    .count-box span {
        font-size: 7px;
        letter-spacing: 2px;
    }

    .closing h2 {
        font-size: 60px;
    }
}


/* =========================================================
   SELECTION
   ========================================================= */

::selection {
    background: var(--gold);
    color: #000;
}


/* =========================================================
   CUSTOM SCROLLBAR
   ========================================================= */

::-webkit-scrollbar {
    width: 7px;
}

::-webkit-scrollbar-track {
    background: #050505;
}

::-webkit-scrollbar-thumb {
    background: var(--gold);
}

::-webkit-scrollbar-thumb:hover {
    background: var(--gold-light);
}
