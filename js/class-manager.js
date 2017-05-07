// Append className to element with id
function addClass (id, className) {
    var element = document.getElementById(id);
    element.classList.add(className);
}

// Remove class from element with id
function removeClass (id, className) {
    var element = document.getElementById(id);
    element.classList.remove(className);
}
