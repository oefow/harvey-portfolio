/* =========================================================
   HARVEY JASPER T. CABARLES
   PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   1. DARK / LIGHT MODE
========================================================= */

function toggleTheme() {

    document.body.classList.toggle("light");

    const button = document.getElementById("theme-toggle");
    const photo = document.getElementById("profile-photo");

    if (document.body.classList.contains("light")) {

        if (button) {
            button.textContent = "🌙 Dark";
        }

        if (photo) {
            photo.src = "images/profile-light.jpg";
        }

    } else {

        if (button) {
            button.textContent = "☀ Light";
        }

        if (photo) {
            photo.src = "images/profile.jpg";
        }
    }
}


/* =========================================================
   2. SKILLS SCROLL ANIMATION
========================================================= */

const skillsSection = document.querySelector(".skills-section");

window.addEventListener("scroll", function () {

    if (!skillsSection) return;

    const position =
        skillsSection.getBoundingClientRect();

    if (position.top < window.innerHeight * 0.80) {

        skillsSection.classList.add("show-skills");

    }

});


/* =========================================================
   3. E-BORROW MODAL
========================================================= */

function openProject() {

    const modal =
        document.getElementById("projectModal");

    if (!modal) return;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeProject() {

    const modal =
        document.getElementById("projectModal");

    if (!modal) return;

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


/* =========================================================
   4. SIGNSPEAK MODAL
========================================================= */

function openSignSpeak() {

    const modal =
        document.getElementById("signspeakModal");

    if (!modal) return;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeSignSpeak() {

    const modal =
        document.getElementById("signspeakModal");

    if (!modal) return;

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


/* =========================================================
   5. JAVA CERTIFICATE
========================================================= */

function openCertificate() {

    const certificate =
        document.getElementById("javaCertificate");

    if (!certificate) return;

    certificate.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeCertificate() {

    const certificate =
        document.getElementById("javaCertificate");

    if (!certificate) return;

    certificate.classList.remove("active");

    document.body.style.overflow = "";
}


/* =========================================================
   6. CLOSE MODALS WHEN CLICKING OUTSIDE
========================================================= */

const projectModal =
    document.getElementById("projectModal");

if (projectModal) {

    projectModal.addEventListener("click", function (event) {

        if (event.target === projectModal) {

            closeProject();

        }

    });

}


const signSpeakModal =
    document.getElementById("signspeakModal");

if (signSpeakModal) {

    signSpeakModal.addEventListener("click", function (event) {

        if (event.target === signSpeakModal) {

            closeSignSpeak();

        }

    });

}


const javaCertificate =
    document.getElementById("javaCertificate");

if (javaCertificate) {

    javaCertificate.addEventListener("click", function (event) {

        if (event.target === javaCertificate) {

            closeCertificate();

        }

    });

}


/* =========================================================
   7. ESC KEY
========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeProject();

        closeSignSpeak();

        closeCertificate();

        closeCV();

        const chatbotWindow =
            document.getElementById("chatbot-window");

        if (chatbotWindow) {

            chatbotWindow.classList.remove(
                "chatbot-open"
            );

        }

    }

});


/* =========================================================
   8. CONTACT SECTION
========================================================= */

function toggleContact() {

    const options =
        document.getElementById("contact-options");

    const button =
        document.querySelector(".connect-btn");

    if (!options || !button) return;

    options.classList.toggle("show");

    button.classList.toggle("open");

}


/* =========================================================
   9. COPY EMAIL
========================================================= */

function copyEmail() {

    const email =
        "harveyjasper14@gmail.com";

    navigator.clipboard.writeText(email)
        .then(function () {

            const message =
                document.getElementById("copy-message");

            if (!message) return;

            message.textContent =
                "✓ Email copied!";

            setTimeout(function () {

                message.textContent = "";

            }, 2500);

        })
        .catch(function () {

            const message =
                document.getElementById("copy-message");

            if (!message) return;

            message.textContent =
                "Copy failed. Please copy the email manually.";

        });

}


/* =========================================================
   10. MESSAGE FORM
========================================================= */

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("sender-name");

    const email =
        document.getElementById("sender-email");

    const message =
        document.getElementById("sender-message");

    if (!name || !email || !message) return;

    const subject =
        encodeURIComponent(
            "Portfolio Contact from " + name.value
        );

    const body =
        encodeURIComponent(
            "Name: " + name.value +
            "\nEmail: " + email.value +
            "\n\nMessage:\n" + message.value
        );

    window.location.href =
        "mailto:harveyjasper14@gmail.com?subject=" +
        subject +
        "&body=" +
        body;

}


/* =========================================================
   11. LEARNING JOURNEY
========================================================= */

function toggleJourney(item) {

    if (!item) return;

    const allItems =
        document.querySelectorAll(".journey-item");

    allItems.forEach(function (otherItem) {

        if (otherItem !== item) {

            otherItem.classList.remove("active");

        }

    });

    item.classList.toggle("active");

}


/* =========================================================
   12. SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .credential-card, .timeline-item, .interest-card, .profile-card, .message-area"
    );


function revealOnScroll() {

    revealElements.forEach(function (element) {

        const position =
            element.getBoundingClientRect();

        if (
            position.top <
            window.innerHeight - 100
        ) {

            element.classList.add(
                "show-reveal"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================================================
   13. MOUSE FOLLOW GLOW
========================================================= */

const cursorGlow =
    document.createElement("div");

cursorGlow.className =
    "cursor-glow";

document.body.appendChild(
    cursorGlow
);


document.addEventListener(
    "mousemove",
    function (event) {

        cursorGlow.style.left =
            event.clientX + "px";

        cursorGlow.style.top =
            event.clientY + "px";

    }
);


/* =========================================================
   14. SCROLL PROGRESS
========================================================= */

function updateScrollProgress() {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    if (documentHeight <= 0) return;

    const progress =
        (scrollTop / documentHeight) * 100;

    document.body.style.setProperty(
        "--scroll-progress",
        progress + "%"
    );

}


window.addEventListener(
    "scroll",
    updateScrollProgress
);

updateScrollProgress();


/* =========================================================
   15. ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        "nav a[href^='#']"
    );


function updateActiveNav() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

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


/* =========================================================
   16. NAVBAR SCROLL EFFECT
========================================================= */

const portfolioHeader =
    document.querySelector("header");


function updateHeader() {

    if (!portfolioHeader) return;

    if (window.scrollY > 50) {

        portfolioHeader.classList.add(
            "scrolled"
        );

    } else {

        portfolioHeader.classList.remove(
            "scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);

updateHeader();


/* =========================================================
   17. PROJECT 3D TILT
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(function (card) {

    card.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

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

            card.style.setProperty(
                "--mouse-x",
                x + "px"
            );

            card.style.setProperty(
                "--mouse-y",
                y + "px"
            );

        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            card.style.transform = "";

        }
    );

});


/* =========================================================
   18. MAGNETIC BUTTONS
========================================================= */

const magneticButtons =
    document.querySelectorAll(
        ".btn, .connect-btn, .send-btn"
    );


magneticButtons.forEach(function (button) {

    button.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                button.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

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
        function () {

            button.style.transform = "";

        }
    );

});


/* =========================================================
   19. CV MODAL
========================================================= */

function openCV() {

    const modal =
        document.getElementById("cv-modal");

    if (!modal) return;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeCV() {

    const modal =
        document.getElementById("cv-modal");

    if (!modal) return;

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


const cvModal =
    document.getElementById("cv-modal");


if (cvModal) {

    cvModal.addEventListener(
        "click",
        function (event) {

            if (event.target === cvModal) {

                closeCV();

            }

        }
    );

}


/* =========================================================
   20. HARVEY PORTFOLIO CHATBOT
========================================================= */

const harveyBot = {

    toggle:
        document.getElementById(
            "chatbot-toggle"
        ),

    window:
        document.getElementById(
            "chatbot-window"
        ),

    close:
        document.getElementById(
            "chatbot-close"
        ),

    input:
        document.getElementById(
            "chatbot-input"
        ),

    send:
        document.getElementById(
            "chatbot-send"
        ),

    messages:
        document.getElementById(
            "chatbot-messages"
        )

};


/* =========================================================
   21. OPEN CHATBOT
========================================================= */

if (
    harveyBot.toggle &&
    harveyBot.window
) {

    harveyBot.toggle.addEventListener(
        "click",
        function () {

            harveyBot.window.classList.toggle(
                "chatbot-open"
            );

            if (
                harveyBot.window.classList.contains(
                    "chatbot-open"
                ) &&
                harveyBot.input
            ) {

                harveyBot.input.focus();

            }

        }
    );

}


/* =========================================================
   22. CLOSE CHATBOT
========================================================= */

if (harveyBot.close) {

    harveyBot.close.addEventListener(
        "click",
        function () {

            if (harveyBot.window) {

                harveyBot.window.classList.remove(
                    "chatbot-open"
                );

            }

        }
    );

}


/* =========================================================
   23. SEND CHATBOT MESSAGE
========================================================= */

function sendHarveyMessage() {

    if (!harveyBot.input) return;

    const message =
        harveyBot.input.value.trim();

    if (message === "") return;


    addHarveyMessage(
        message,
        "user"
    );


    harveyBot.input.value = "";


    setTimeout(function () {

        const answer =
            getHarveyAnswer(message);

        addHarveyMessage(
            answer,
            "bot"
        );

    }, 500);

}


/* =========================================================
   24. CHATBOT ENTER KEY
========================================================= */

if (harveyBot.input) {

    harveyBot.input.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                sendHarveyMessage();

            }

        }
    );

}


/* =========================================================
   25. CHATBOT SEND BUTTON
========================================================= */

if (harveyBot.send) {

    harveyBot.send.addEventListener(
        "click",
        sendHarveyMessage
    );

}


/* =========================================================
   26. ADD CHATBOT MESSAGE
========================================================= */

function addHarveyMessage(
    message,
    type
) {

    if (!harveyBot.messages) return;


    const messageElement =
        document.createElement("div");


    messageElement.className =
        "chatbot-message " + type;


    messageElement.textContent =
        message;


    harveyBot.messages.appendChild(
        messageElement
    );


    harveyBot.messages.scrollTop =
        harveyBot.messages.scrollHeight;

}


/* =========================================================
   27. CHATBOT FIXED ANSWERS
========================================================= */

function getHarveyAnswer(question) {

    const text =
        question.toLowerCase().trim();


    /* HELLO */

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return "👋 Hello! I'm Harvey's portfolio assistant. Ask me about his skills, projects, OJT, credentials, education, CV, or contact information.";

    }


    /* NAME */

    if (
        text.includes("name") ||
        text.includes("who are you")
    ) {

        return "I'm Harvey Jasper T. Cabarles, an Information Technology student and the person behind this portfolio.";

    }


    /* SKILLS */

    if (
        text.includes("skill") ||
        text.includes("technology") ||
        text.includes("technologies")
    ) {

        return "Harvey currently has basic knowledge of HTML, CSS, JavaScript, Python, Java, and Git.";

    }


    /* PROJECTS */

    if (
        text.includes("project") ||
        text.includes("projects")
    ) {

        return "Harvey has worked on two capstone projects: E-Borrow and SignSpeak-SafeCheck.";

    }


    /* E-BORROW */

    if (
        text.includes("e-borrow") ||
        text.includes("eborrow")
    ) {

        return "E-Borrow is one of Harvey's capstone projects, developed as part of his Information Technology studies.";

    }


    /* SIGNSPEAK */

    if (
        text.includes("signspeak") ||
        text.includes("sign speak")
    ) {

        return "SignSpeak-SafeCheck is Harvey's second capstone project.";

    }


    /* OJT */

    if (
        text.includes("ojt") ||
        text.includes("internship") ||
        text.includes("intern")
    ) {

        return "Yes! Harvey is open to OJT opportunities and is willing to learn, improve his skills, and gain real-world IT experience.";

    }


    /* CREDENTIALS */

    if (
        text.includes("credential") ||
        text.includes("certificate") ||
        text.includes("certification") ||
        text.includes("seminar")
    ) {

        return "Harvey's portfolio includes credentials and training related to Cybersecurity, Java Programming, SAP, and AWS.";

    }


    /* EDUCATION */

    if (
        text.includes("education") ||
        text.includes("course") ||
        text.includes("degree") ||
        text.includes("school")
    ) {

        return "Harvey is a 4th Year Information Technology student.";

    }


    /* CONTACT */

    if (
        text.includes("contact") ||
        text.includes("email") ||
        text.includes("gmail")
    ) {

        return "You can contact Harvey through his email: harveyjasper14@gmail.com.";

    }


    /* CV */

    if (
        text.includes("cv") ||
        text.includes("resume")
    ) {

        return "You can view Harvey's CV using the 'View My CV' button in the Contact section.";

    }


    /* THANK YOU */

    if (
        text.includes("thank") ||
        text.includes("thanks")
    ) {

        return "You're welcome! 😎 Feel free to explore the rest of Harvey's portfolio.";

    }


    /* DEFAULT */

    return "🤔 I'm not sure about that yet. Try asking me about Harvey's skills, projects, OJT, credentials, education, CV, or contact information.";

}


/* =========================================================
   28. CHATBOT QUICK QUESTIONS
========================================================= */

function askHarvey(topic) {

    if (!harveyBot.input) return;


    if (topic === "skills") {

        harveyBot.input.value =
            "What are your skills?";

    }


    else if (topic === "projects") {

        harveyBot.input.value =
            "What projects have you made?";

    }


    else if (topic === "ojt") {

        harveyBot.input.value =
            "Are you available for OJT?";

    }


    else if (topic === "credentials") {

        harveyBot.input.value =
            "What credentials do you have?";

    }


    sendHarveyMessage();

}


/* =========================================================
   END OF SCRIPT
========================================================= */