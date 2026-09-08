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

        return "I'm Harvey Jasper T. Cabarles, a 4th Year Information Technology student and the person behind this portfolio.";

    }


    /* WHERE DO YOU STUDY? */

    if (
        text.includes("where do you study") ||
        text.includes("where are you studying") ||
        text.includes("what school") ||
        text.includes("where do you go to school") ||
        text.includes("college")
    ) {

        return "I am currently studying at STI College Alabang, where I am pursuing a Bachelor of Science in Information Technology.";

    }


    /* AGE */

    if (
        text.includes("how old") ||
        text.includes("your age") ||
        text.includes("age")
    ) {

        return "I am 21 years old.";

    }


    /* TELL ME ABOUT YOURSELF */

    if (
        text.includes("tell me about yourself") ||
        text.includes("about yourself") ||
        text.includes("introduce yourself") ||
        text === "about"
    ) {

        return "I'm Harvey Jasper T. Cabarles, a 4th Year Information Technology student at STI College Alabang. I am interested in technology and continuously working to develop my technical and professional skills. I am currently preparing for OJT and looking forward to gaining practical experience in a professional IT environment.";

    }


    /* WHAT MAKES YOU UNIQUE */

    if (
        text.includes("what makes you unique") ||
        text.includes("what is your uniqueness") ||
        text.includes("your uniqueness") ||
        text.includes("what makes you different") ||
        text.includes("unique")
    ) {

        return "I consider myself an adaptable person. I can adjust to new environments, learn from different situations, and remain open to new ideas and challenges. I believe adaptability is important in the IT field because technologies and requirements are constantly changing.";

    }


    /* STRONGEST SKILL */

    if (
        text.includes("strongest skill") ||
        text.includes("best skill") ||
        text.includes("what are you good at") ||
        text.includes("what is your strongest")
    ) {

        return "One of my strengths is adaptability. I am willing to adjust to new environments, learn new tools, and improve when given feedback. I am also continuously developing my technical skills.";

    }


    /* STRENGTHS */

    if (
        text.includes("strengths") ||
        text.includes("your strengths") ||
        text.includes("what are your strengths")
    ) {

        return "My strengths are my willingness to learn, adaptability, patience, and determination to improve. I may still be developing my skills, but I am willing to put in the effort to learn, accept feedback, and grow.";

    }


    /* WEAKNESS */

    if (
        text.includes("weakness") ||
        text.includes("weaknesses") ||
        text.includes("your weakness")
    ) {

        return "I am still developing my technical and programming skills, particularly in areas that require more advanced knowledge. However, I continuously practice, explore new concepts, and use every opportunity to improve.";

    }


    /* GOALS */

    if (
        text.includes("goal") ||
        text.includes("goals") ||
        text.includes("future goal") ||
        text.includes("career goal")
    ) {

        return "My goal is to gain practical experience in the IT industry, strengthen my technical skills, and develop the professional skills needed to become a reliable IT professional.";

    }


    /* WHY OJT */

    if (
        text.includes("why ojt") ||
        text.includes("why internship") ||
        text.includes("why do you want an internship") ||
        text.includes("reason for ojt")
    ) {

        return "I want to experience how IT work is done in a professional environment, apply what I have learned in school, and gain hands-on experience while learning from experienced professionals.";

    }


    /* WHY SHOULD WE ACCEPT YOU */

    if (
        text.includes("why should we accept") ||
        text.includes("why should we hire") ||
        text.includes("why should we choose") ||
        text.includes("why accept you") ||
        text.includes("why hire you")
    ) {

        return "You should consider accepting me because I am adaptable, willing to learn, and committed to improving my skills. Although I am still gaining professional experience, I am eager to contribute, accept feedback, and learn from the opportunities provided by the company.";

    }


    /* WHAT CAN YOU CONTRIBUTE */

    if (
        text.includes("what can you contribute") ||
        text.includes("what can you offer") ||
        text.includes("what can you bring") ||
        text.includes("what will you contribute")
    ) {

        return "I can contribute my willingness to learn, adaptability, teamwork, and dedication. I am also willing to assist with tasks, learn the company's processes, and continuously improve throughout my OJT.";

    }


    /* OJT EXPECTATIONS */

    if (
        text.includes("what do you expect from ojt") ||
        text.includes("what are your expectations") ||
        text.includes("ojt expectations") ||
        text.includes("expect from internship")
    ) {

        return "I expect to gain real-world experience, learn from professionals, improve my technical and communication skills, and better understand how an IT team works in a professional environment.";

    }


    /* WILLING TO LEARN */

    if (
        text.includes("willing to learn") ||
        text.includes("learn new technologies") ||
        text.includes("open to learning") ||
        text.includes("new technology")
    ) {

        return "Yes. I am open to learning new technologies and tools. I believe being willing to learn and adapt is essential for continuous growth in the IT industry.";

    }


    /* OJT */

    if (
        text.includes("ojt") ||
        text.includes("internship") ||
        text.includes("intern")
    ) {

        return "Yes! I am open to OJT opportunities and eager to gain real-world IT experience. I am willing to learn, adapt to a professional environment, accept feedback, and contribute where I can.";

    }


    /* WORK EXPERIENCE */

    if (
        text.includes("work experience") ||
        text.includes("job experience") ||
        text.includes("professional experience") ||
        text.includes("have you worked")
    ) {

        return "I do not have professional work experience yet. However, I have gained experience through academic projects, seminars, training, and hands-on activities related to Information Technology.";

    }


    /* CURRENTLY LEARNING */

    if (
        text.includes("currently learning") ||
        text.includes("what are you learning") ||
        text.includes("learning now")
    ) {

        return "I am currently improving my knowledge of web development, programming, IT fundamentals, and professional skills. I am also interested in gaining more hands-on experience with technologies used in real-world IT environments.";

    }


    /* PROJECT ROLE */

    if (
        text.includes("project role") ||
        text.includes("your role in the project") ||
        text.includes("what was your role") ||
        text.includes("your contribution")
    ) {

        return "I contributed to different parts of my capstone projects, including planning, development, testing, documentation, and completing system requirements. These experiences helped me understand how different parts of a project work together.";

    }


    /* PROJECT CHALLENGES */

    if (
        text.includes("project challenge") ||
        text.includes("project challenges") ||
        text.includes("challenge in your project") ||
        text.includes("difficulties in your project")
    ) {

        return "Working on academic projects involved challenges such as understanding requirements, solving technical problems, coordinating with teammates, and completing tasks within a deadline. These experiences taught me to be patient, adaptable, and willing to learn.";

    }


    /* E-BORROW LEARNING */

    if (
        text.includes("what did you learn from e-borrow") ||
        text.includes("what did you learn from eborrow") ||
        text.includes("e-borrow learning") ||
        text.includes("eborrow learning")
    ) {

        return "E-Borrow helped me learn more about system development, teamwork, planning, testing, documentation, and applying IT concepts to a practical system.";

    }


    /* E-BORROW */

    if (
        text.includes("e-borrow") ||
        text.includes("eborrow")
    ) {

        return "E-Borrow is one of my capstone projects. It is an online borrowing system designed to help residents check equipment availability and submit borrowing requests online. I contributed to planning, development, testing, documentation, and completing system requirements.";

    }


    /* SIGNSPEAK LEARNING */

    if (
        text.includes("what did you learn from signspeak") ||
        text.includes("signspeak learning") ||
        text.includes("what did you learn from sign speak")
    ) {

        return "SignSpeak-SafeCheck helped me improve my problem-solving, teamwork, system development, and ability to work with a project that addresses a practical need.";

    }


    /* SIGNSPEAK */

    if (
        text.includes("signspeak") ||
        text.includes("sign speak") ||
        text.includes("safecheck")
    ) {

        return "SignSpeak-SafeCheck is my second capstone project. It combines sign language recognition with a safety-checking concept and gave me an opportunity to apply technical knowledge while working on a practical IT project.";

    }


    /* PROJECTS */

    if (
        text.includes("project") ||
        text.includes("projects") ||
        text.includes("capstone")
    ) {

        return "I have worked on two capstone projects: E-Borrow and SignSpeak-SafeCheck. Both projects helped me apply IT concepts while developing my problem-solving, teamwork, and system development skills.";

    }


    /* SKILLS */

    if (
        text.includes("skill") ||
        text.includes("technology") ||
        text.includes("technologies") ||
        text.includes("programming language")
    ) {

        return "I currently have basic knowledge of HTML, CSS, JavaScript, Python, Java, and Git. I am continuously practicing and improving these skills through academic projects and hands-on learning.";

    }


    /* CREDENTIALS */

    if (
        text.includes("credential") ||
        text.includes("certificate") ||
        text.includes("certification") ||
        text.includes("seminar") ||
        text.includes("training")
    ) {

        return "My portfolio includes credentials and training related to Cybersecurity, Java Programming, SAP, and AWS. These learning experiences helped me broaden my knowledge beyond regular coursework.";

    }


    /* EDUCATION */

    if (
        text.includes("education") ||
        text.includes("course") ||
        text.includes("degree") ||
        text.includes("program") ||
        text.includes("school") ||
        text.includes("college")
    ) {

        return "I am a 4th Year Bachelor of Science in Information Technology student at STI College Alabang.";

    }


    /* CONTACT */

    if (
        text.includes("contact") ||
        text.includes("email") ||
        text.includes("gmail") ||
        text.includes("how can i reach you")
    ) {

        return "You can contact me through my email: harveyjasper14@gmail.com.";

    }


    /* CV */

    if (
        text.includes("cv") ||
        text.includes("resume") ||
        text.includes("curriculum vitae")
    ) {

        return "You can view my CV using the 'View My CV' button in the Contact section of this portfolio.";

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