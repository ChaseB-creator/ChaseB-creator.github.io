document.addEventListener("DOMContentLoaded", () => {
    const themeSelector = document.getElementById("theme");
    const body = document.body;
    const logo = document.getElementById("logo");

    function changeTheme() {
        const selectedTheme = themeSelector.value;

        if (selectedTheme === "dark") {
            body.classList.add("dark");
            logo.src = "byui-logo_dark.png"; // dark mode image
        } else {
            body.classList.remove("dark");
            logo.src = "BYU-Idaho_pic.jpeg"; // light mode image
        }
    }
    themeSelector.addEventListener("change", changeTheme);
    body.classList.remove("dark");
});
