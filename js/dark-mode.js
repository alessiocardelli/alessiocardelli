document.addEventListener("DOMContentLoaded", function() {
    const hasDarkMode = window.localStorage.getItem("dark-mode-active") === "true";
    const htmlElement = document.documentElement;
    if (!hasDarkMode) {
        htmlElement.classList.remove("dark-mode");
    } else {
        htmlElement.classList.add("dark-mode");
    }
});
function toggleDarkMode() {
    const htmlElement = document.documentElement;

    const hasDarkModeClass = htmlElement.classList.contains("dark-mode");
    window.localStorage.setItem("dark-mode-active", !hasDarkModeClass);
    if (hasDarkModeClass) {
        htmlElement.classList.remove("dark-mode");
    } else {
        htmlElement.classList.add("dark-mode");
    }
}

const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", toggleDarkMode);