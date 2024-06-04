let nav_js_MenuOpened = false;

function openMenu() {
    const menu = document.getElementById("MenuPhone");

    if (nav_js_MenuOpened) {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

    nav_js_MenuOpened = !nav_js_MenuOpened;
}
