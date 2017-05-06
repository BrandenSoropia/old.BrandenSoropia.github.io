// Create material-icon with icon name and append to parent
function createChildIcon (iconName, parent) {
    var icon = document.createElement("i");

    icon.id = "nav-controller-icon";
    icon.className = "material-icons";
    icon.innerHTML = iconName;
    parent.appendChild(icon);
}

function removeNode (node) {
    node.parentNode.removeChild(node);
}

// Return navigation container, controller and icon elements
function getNavElements () {
    var container = document.getElementById("circle-nav");
    var controller = document.getElementById("nav-controller");
    var icon = document.getElementById("nav-controller-icon");

    return {
        CONTAINER: container,
        CONTROLLER: controller,
        ICON: icon
    }
}

// Show navigation and change button icon to "close"
function openNav () {
    var nav = getNavElements();

    nav.CONTAINER.classList.remove("hidden");
    removeNode(nav.ICON);
    createChildIcon("close", nav.CONTROLLER);

}

// Hide navigation and change button icon to "open"
function closeNav() {
    var nav = getNavElements();

    nav.CONTAINER.classList.add("hidden");
    removeNode(nav.ICON);
    createChildIcon("menu", nav.CONTROLLER);
}

// Toggle navigation display
function toggleNav () {
    if (JSON.parse(localStorage.getItem("isSideNavActive")) === "true") { // Close
        localStorage.setItem("isSideNavActive", JSON.stringify("false"));
        closeNav();
    } else { // Open
        localStorage.setItem("isSideNavActive", JSON.stringify("true"));
        openNav();
    }
}
