function addClass (id, className) {
    var element = document.getElementById(id);
    element.className += " " + className;
}

function removeAllClasses (id) {
    var element = document.getElementById(id);
    element.className = "";
}
