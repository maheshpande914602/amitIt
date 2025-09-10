    document.addEventListener("DOMContentLoaded", () => {
        const menuBtn = document.getElementById("mobile-menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");
        const navLinks = mobileMenu.querySelectorAll("a");

        // Toggle mobile menu when hamburger is clicked
        menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        });

        // Close mobile menu when any nav link is clicked
        navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
        });
        });

        // Optional: close menu when clicking outside
        document.addEventListener("click", (e) => {
        if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            mobileMenu.classList.add("hidden");
        }
        });
    });

