/* =========================================================
   JAVERIA KHALID — DATA ANALYST PORTFOLIO
   Main JavaScript
========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Close mobile menu after clicking a link */

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

}


/* =========================================================
   2. NAVBAR ON SCROLL
========================================================= */

const navbar = document.querySelector(".navbar");

function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
);

updateNavbar();


/* =========================================================
   3. PROJECT FILTERS
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active state */

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        /* Activate clicked button */

        button.classList.add("active");

        const selectedCategory =
            button.dataset.filter;


        /* Show / hide projects */

        projectCards.forEach(project => {

            const projectCategory =
                project.dataset.category;


            if (
                selectedCategory === "all" ||
                projectCategory === selectedCategory
            ) {

                project.classList.remove("hidden");

            } else {

                project.classList.add("hidden");

            }

        });

    });

});


/* =========================================================
   4. SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".about-text, " +
        ".stat-card, " +
        ".skill-card, " +
        ".project-card, " +
        ".process-item, " +
        ".timeline-item, " +
        ".github-box, " +
        ".contact-container"
    );


/*
   Add initial reveal class
*/

revealElements.forEach(element => {

    element.classList.add("reveal");

});


/*
   Intersection Observer
*/

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   5. STAGGER PROJECT / SKILL ANIMATIONS
========================================================= */

document
    .querySelectorAll(
        ".skills-grid, .projects-grid, .process-grid"
    )
    .forEach(container => {

        const children =
            container.children;

        Array.from(children).forEach(
            (child, index) => {

                child.style.transitionDelay =
                    `${index * 80}ms`;

            }
        );

    });


/* =========================================================
   6. ACTIVE NAVIGATION LINK
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

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


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (
            target === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);

updateActiveNavigation();


/* =========================================================
   7. EXTERNAL LINKS
========================================================= */

document
    .querySelectorAll(
        'a[target="_blank"]'
    )
    .forEach(link => {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


/* =========================================================
   8. PROJECT LINK PROTECTION
========================================================= */

document
    .querySelectorAll(
        '.project-btn, .github-link'
    )
    .forEach(link => {

        link.addEventListener("click", event => {

            const href =
                link.getAttribute("href");


            /*
               Don't allow empty # links
               to jump to the top.
            */

            if (
                !href ||
                href === "#"
            ) {

                event.preventDefault();

                alert(
                    "Project link will be added soon."
                );

            }

        });

    });


/* =========================================================
   9. CURRENT YEAR
========================================================= */

const yearElements =
    document.querySelectorAll(
        ".copyright"
    );


yearElements.forEach(element => {

    /*
       This keeps the copyright year
       automatically updated.
    */

    element.innerHTML =
        element.innerHTML.replace(
            /©\s*\d{4}/,
            `© ${new Date().getFullYear()}`
        );

});


/* =========================================================
   10. REDUCED MOTION
========================================================= */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (prefersReducedMotion.matches) {

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* =========================================================
   11. CONSOLE MESSAGE
========================================================= */

console.log(
    "Javeria Khalid | Junior Data Analyst Portfolio"
);

console.log(
    "Portfolio loaded successfully."
);
