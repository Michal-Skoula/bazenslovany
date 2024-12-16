document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector(
        'button[aria-controls="mobile-menu"]'
    );
    const mobileMenuIcons = mobileMenuButton.querySelectorAll("svg");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenuButton.addEventListener("click", () => {
        const isExpanded =
            mobileMenuButton.getAttribute("aria-expanded") === "true";
        mobileMenuButton.setAttribute("aria-expanded", !isExpanded);

        // Toggle the visibility of menu icons
        mobileMenuIcons.forEach((icon) => icon.classList.toggle("hidden"));

        // Show/hide the mobile menu
        if (mobileMenu) {
            mobileMenu.classList.toggle("hidden");
        }
    });

    // User profile dropdown
    const userMenuButton = document.getElementById("user-menu-button");
    const userMenu = userMenuButton.nextElementSibling;

    userMenuButton.addEventListener("click", () => {
        const isExpanded =
            userMenuButton.getAttribute("aria-expanded") === "true";
        userMenuButton.setAttribute("aria-expanded", !isExpanded);

        // Show/hide the dropdown menu
        if (userMenu) {
            userMenu.classList.toggle("hidden");
        }
    });

    // Close the dropdown menu if clicked outside
    document.addEventListener("click", (event) => {
        if (
            !userMenuButton.contains(event.target) &&
            !userMenu.contains(event.target)
        ) {
            if (!userMenu.classList.contains("hidden")) {
                userMenu.classList.add("hidden");
                userMenuButton.setAttribute("aria-expanded", "false");
            }
        }
    });
});
