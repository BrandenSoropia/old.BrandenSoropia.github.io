// Show navigation and change button icon to "close"
function openNav () {
    document.getElementById("circle-nav").classList.remove("hidden");
}

// Hide navigation and change button icon to "open"
function closeNav() {
    document.getElementById("circle-nav").classList.add("hidden");
}

// Toggle display of navigation or sections with id
function toggleNav (sectionId) {
    if (JSON.parse(localStorage.getItem("isNavActive")) === "true") { // Close nav
        localStorage.setItem("isNavActive", JSON.stringify("false"));
        // Show sectionand close section butotn
        removeClass(sectionId, "hidden");
        removeClass("close-section-button", "hidden");

        closeNav();

        window.scrollTo(0, 0); // Scroll to top of section
    } else { // Open nav
        localStorage.setItem("isNavActive", JSON.stringify("true"));
        // Hide displayed section and close section button
        var sectionIds = ["about", "portfolio", "contact"];
        sectionIds.forEach(function (sectionId) {
            var section = document.getElementById(sectionId);
            if (!section.classList.contains("hidden")) {
                section.classList.add("hidden");
            }
        });

        addClass("close-section-button", "hidden");

        openNav();
    }
}
