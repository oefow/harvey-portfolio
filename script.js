/* =========================
   DARK / LIGHT MODE
========================= */

function toggleTheme() {

    document.body.classList.toggle("light");

    const button = document.getElementById("theme-toggle");
    const photo = document.getElementById("profile-photo");

    if (document.body.classList.contains("light")) {

        button.textContent = "🌙 Dark";
        photo.src = "images/profile-light.jpg";

    } else {

        button.textContent = "☀ Light";
        photo.src = "images/profile.jpg";

    }
}


/* =========================
   SKILLS SCROLL ANIMATION
========================= */

const skillsSection = document.querySelector(".skills-section");

window.addEventListener("scroll", function () {

    if (!skillsSection) return;

    const position = skillsSection.getBoundingClientRect();

    if (position.top < window.innerHeight * 0.80) {
        skillsSection.classList.add("show-skills");
    }

});


/* =========================
   E-BORROW MODAL
========================= */

function openProject() {

    const modal = document.getElementById("projectModal");

    if (!modal) return;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";

}


function closeProject() {

    const modal = document.getElementById("projectModal");

    if (!modal) return;

    modal.classList.remove("active");
    document.body.style.overflow = "";

}


/* =========================
   SIGNSPEAK MODAL
========================= */

function openSignSpeak() {

    const modal = document.getElementById("signspeakModal");

    if (!modal) return;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";

}


function closeSignSpeak() {

    const modal = document.getElementById("signspeakModal");

    if (!modal) return;

    modal.classList.remove("active");
    document.body.style.overflow = "";

}


/* =========================
   JAVA CERTIFICATE
========================= */

function openCertificate() {

    const certificate = document.getElementById("javaCertificate");

    if (!certificate) return;

    certificate.classList.add("active");
    document.body.style.overflow = "hidden";

}


function closeCertificate() {

    const certificate = document.getElementById("javaCertificate");

    if (!certificate) return;

    certificate.classList.remove("active");
    document.body.style.overflow = "";

}


/* =========================
   CLOSE MODALS
   WHEN CLICKING OUTSIDE
========================= */

const projectModal = document.getElementById("projectModal");

if (projectModal) {

    projectModal.addEventListener("click", function (event) {

        if (event.target === projectModal) {
            closeProject();
        }

    });

}


const signSpeakModal = document.getElementById("signspeakModal");

if (signSpeakModal) {

    signSpeakModal.addEventListener("click", function (event) {

        if (event.target === signSpeakModal) {
            closeSignSpeak();
        }

    });

}


const javaCertificate = document.getElementById("javaCertificate");

if (javaCertificate) {

    javaCertificate.addEventListener("click", function (event) {

        if (event.target === javaCertificate) {
            closeCertificate();
        }

    });

}


/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeProject();
        closeSignSpeak();
        closeCertificate();

    }

});
/* =========================
   CONTACT SECTION
========================= */

function toggleContact() {

    const options = document.getElementById("contact-options");
    const button = document.querySelector(".connect-btn");

    options.classList.toggle("show");
    button.classList.toggle("open");

}


/* =========================
   COPY EMAIL
========================= */

function copyEmail() {

    const email = "harveyjasper14@gmail.com";

    navigator.clipboard.writeText(email);

    document.getElementById("copy-message").textContent =
        "✓ Email copied!";

    setTimeout(function () {

        document.getElementById("copy-message").textContent = "";

    }, 2500);

}


/* =========================
   MESSAGE FORM
========================= */

function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("sender-name").value;
    const email = document.getElementById("sender-email").value;
    const message = document.getElementById("sender-message").value;

    const subject = encodeURIComponent(
        "Portfolio Contact from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    window.location.href =
        "mailto:harveyjasper14@gmail.com?subject=" +
        subject +
        "&body=" +
        body;

}
/* =========================
   LEARNING JOURNEY
========================= */

function toggleJourney(item) {

    const allItems = document.querySelectorAll(".journey-item");

    allItems.forEach(function(otherItem) {

        if (otherItem !== item) {
            otherItem.classList.remove("active");
        }

    });

    item.classList.toggle("active");

}
/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".section, .project-card, .credential-card, .timeline-item, .interest-card, .profile-card, .message-area"
);

function revealOnScroll() {

    revealElements.forEach(function(element) {

        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight - 100) {

            element.classList.add("show-reveal");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
/* =========================================================
   PREMIUM EFFECTS JAVASCRIPT
========================================================= */


/* =========================
   1. MOUSE FOLLOW GLOW
========================= */

const cursorGlow = document.createElement("div");

cursorGlow.className = "cursor-glow";

document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", function(e) {

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

});


/* =========================
   2. SCROLL PROGRESS
========================= */

window.addEventListener("scroll", function() {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    document.body.style.setProperty(
        "--scroll-progress",
        progress + "%"
    );

});


/* =========================
   3. ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll(
    "section[id]"
);

const navLinks = document.querySelectorAll(
    "nav a[href^='#']"
);

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
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

}

window.addEventListener(
    "scroll",
    updateActiveNav
);

updateActiveNav();


/* =========================
   4. PROJECT 3D TILT
========================= */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", function(e) {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -3;

        const rotateY =
            ((x - centerX) / centerX) * 3;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });


    card.addEventListener("mouseleave", function() {

        card.style.transform = "";

    });

});


/* =========================
   5. MAGNETIC BUTTONS
========================= */

const magneticButtons =
    document.querySelectorAll(
        ".btn, .connect-btn, .send-btn"
    );

magneticButtons.forEach(button => {

    button.addEventListener(
        "mousemove",
        function(e) {

            const rect =
                button.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const moveX =
                (x - rect.width / 2) * 0.08;

            const moveY =
                (y - rect.height / 2) * 0.08;

            button.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        }
    );


    button.addEventListener(
        "mouseleave",
        function() {

            button.style.transform = "";

        }
    );

});
/* =============================
   3D PROJECT CARD TILT
============================= */

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0) translateY(0)";

    });

});
/* =============================
   SCROLL PROGRESS BAR
============================= */

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercent =
        (scrollTop / documentHeight) * 100;

    document.getElementById("scroll-progress").style.width =
        scrollPercent + "%";

});