function createChildIcon (iconName, parent) {
    var icon = document.createElement("i");

    icon.className = "material-icons";
    icon.innerHTML = iconName;
    parent.appendChild(icon);
}

function openNav () {
    document.getElementById("side-nav").style.width = "100px";
    document.getElementById("content").style.marginLeft = "100px";

    var sideNavController = document.getElementById("side-nav-controller");
    console.log(sideNavController);
    sideNavController.removeChild(sideNavController.childNodes[0]); // Remove menu icon

    createChildIcon("close", sideNavController); // Replace with close icon
    sideNavController.style.marginLeft = "100px";
}

function closeNav() {
    document.getElementById("side-nav").style.width = "0";
    document.getElementById("content").style.marginLeft = "0";

    var sideNavController = document.getElementById("side-nav-controller");
    sideNavController.removeChild(sideNavController.childNodes[0]); // Remove close icon

    createChildIcon("title", sideNavController); // Replace with menu icon
    sideNavController.style.marginLeft = "0";
}

function toggleNav () {
    if (JSON.parse(localStorage.getItem('isSideNavActive')) === "true") { // Close
        localStorage.setItem('isSideNavActive', JSON.stringify("false"));
        closeNav();
    } else { // Open
        localStorage.setItem('isSideNavActive', JSON.stringify("true"));
        openNav();
    }
}
