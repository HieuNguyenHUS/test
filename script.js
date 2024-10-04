// Thêm chức năng nếu cần
console.log("Welcome to my website!");
// JavaScript để chuyển đổi giữa Dark Mode và Light Mode
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Kiểm tra và áp dụng chế độ ban đầu
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        body.classList.add(currentTheme);
        updateIcon(currentTheme);
    }

    themeToggle.addEventListener("click", function() {
        if (body.classList.contains("light-mode")) {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode");
            updateIcon("dark-mode");
        } else {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            localStorage.setItem("theme", "light-mode");
            updateIcon("light-mode");
        }
    });

    function updateIcon(theme) {
        const icon = themeToggle.querySelector("i");
        if (theme === "dark-mode") {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        } else {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    }
    
});

