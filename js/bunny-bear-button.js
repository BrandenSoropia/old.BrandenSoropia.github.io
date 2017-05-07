// Create material-icon with icon name and append to parent
function createChildIcon (iconName, parent) {
    var icon = document.createElement("i");

    icon.id = "nav-controller-icon";
    icon.className = "material-icons";
    icon.innerHTML = iconName;
    parent.appendChild(icon);
}

// Change icons of button as it's clicked, turns into bunny and polar bear
function buttonBunnyBearToggle (button) {
    if (JSON.parse(localStorage.getItem("isDemoActive")) === "true") {
        localStorage.setItem("isDemoActive", JSON.stringify("false"));
        button.removeChild(button.childNodes[0]); // Remove menu icon

        createChildIcon("close", button); // Replace with close icon
    } else {
        localStorage.setItem("isDemoActive", JSON.stringify("true"));
        button.removeChild(button.childNodes[0]); // Remove close icon

        createChildIcon("title", button); // Replace with menu icon
    }
}
