function collapseFunc() {
    let x = document.getElementById("navigation-menu");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}