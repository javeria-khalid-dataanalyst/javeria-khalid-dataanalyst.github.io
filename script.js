document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       01. SMOOTH SCROLLING
    ====================================================== */

    const anchorLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    anchorLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });



    /* =====================================================
       02. SCROLL REVEAL
    ====================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section, .project-card, .github-section, .contact-section"
        );


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
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });



    /* =====================================================
       03. PROJECT CARD STAGGER
    ====================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 80}ms`;

    });



    /* =====================================================
       04. ACTIVE SECTION TRACKING
    ====================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting &&
                        entry.intersectionRatio > 0.15
                    ) {

                        history.replaceState(
                            null,
                            "",
                            `#${entry.target.id}`
                        );

                    }

                });

            },
            {
                threshold: [0.15, 0.5],
                rootMargin:
                    "-15% 0px -65% 0px"
            }
        );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });



    /* =====================================================
       05. BACK-TO-TOP BUTTON
    ====================================================== */

    const backToTop =
        document.querySelector(
            '.footer-bottom a[href="#home"]'
        );


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            event => {

                event.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }



    /* =====================================================
       06. BUTTON MICRO-INTERACTION
    ====================================================== */

    const interactiveButtons =
        document.querySelectorAll(
            ".primary-button, .secondary-button, .social-button, .contact-button, .project-link"
        );


    interactiveButtons.forEach(button => {

        button.addEventListener(
            "mouseenter",
            () => {

                button.style.setProperty(
                    "--button-hover",
                    "1"
                );

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.setProperty(
                    "--button-hover",
                    "0"
                );

            }
        );

    });



    /* =====================================================
       07. PREVENT EMPTY LINKS
    ====================================================== */

    const emptyLinks =
        document.querySelectorAll(
            'a[href="#"]'
        );


    emptyLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

            }
        );

    });



    /* =====================================================
       08. YEAR
    ====================================================== */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );


    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });

});
