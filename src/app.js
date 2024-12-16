document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('button[aria-controls="mobile-menu"]');
    const mobileMenuIcons = mobileMenuButton.querySelectorAll("svg");
    const mobileMenu = document.getElementById("mobile-menu");
    const nav = document.getElementById("nav");

    mobileMenuButton.addEventListener("click", () => {
        const isExpanded = mobileMenuButton.getAttribute("aria-expanded") === "true";
        mobileMenuButton.setAttribute("aria-expanded", !isExpanded);

        // Toggle the visibility of menu icons
        mobileMenuIcons.forEach((icon) => icon.classList.toggle("hidden"));

        // Show/hide the mobile menu
        if (mobileMenu) {
            mobileMenu.classList.toggle("hidden");
        }
    });

    // Add background when user scrolls
    let oldScrollPos = 0;
    document.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;
        let navList = document.querySelectorAll("nav-item");

        if (scrollPos === 0) {
            nav.classList.remove("bg-bs-white", "shadow-2xl");
            nav.classList.add("bg-none", "pt-12", "transition-all");
        } else if (scrollPos > 40) {
            nav.classList.add("bg-bs-white", "shadow-2xl");
            nav.classList.remove("bg-none", "pt-12", "transition-all");

            navList.forEach((li) => {
                li.classList.add("bg-red-400");
                console.log(li);
            });

            // TODO: finish mobile hide / show of navbar

            // if (oldScrollPos > scrollPos) {
            //     // Scrolled down
            //     nav.classList.add("translate-y-0");
            //     nav.classList.remove("translate-y-[-100%]");
            // } else if (oldScrollPos < scrollPos) {
            //     // Scrolled up
            //     nav.classList.remove("translate-y-0");
            //     nav.classList.add("translate-y-[-100%]");
            // }
        }
        oldScrollPos = scrollPos;
    });
});
