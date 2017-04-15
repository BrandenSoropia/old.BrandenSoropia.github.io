function createChildIcon (iconName, parent) {
    var icon = document.createElement("i");

    icon.id = "side-nav-controller-icon";
    icon.className = "material-icons";
    icon.innerHTML = iconName;
    parent.appendChild(icon);
}

function removeNode (node) {
    node.parentNode.removeChild(node);
}

function openNav () {
    document.getElementById("side-nav").style.width = "100px";
    document.getElementById("content").style.marginLeft = "100px";

    var sideNavController = document.getElementById("side-nav-controller");
    var sideNavControllerIcon = document.getElementById("side-nav-controller-icon");

    removeNode(sideNavControllerIcon); // Remove menu icon
    createChildIcon("close", sideNavController); // Replace with close icon
    sideNavController.style.marginLeft = "100px";
}

function closeNav() {
    document.getElementById("side-nav").style.width = "0";
    document.getElementById("content").style.marginLeft = "0";

    var sideNavController = document.getElementById("side-nav-controller");
    var sideNavControllerIcon = document.getElementById("side-nav-controller-icon");

    removeNode(sideNavControllerIcon); // Remove close icon
    createChildIcon("menu", sideNavController); // Replace with menu icon
    sideNavController.style.marginLeft = "0";
}

function toggleNav () {
    if (JSON.parse(localStorage.getItem("isSideNavActive")) === "true") { // Close
        localStorage.setItem("isSideNavActive", JSON.stringify("false"));
        closeNav();
    } else { // Open
        localStorage.setItem("isSideNavActive", JSON.stringify("true"));
        openNav();
    }
}
