// Thêm chức năng nếu cần
console.log("Welcome to my website!");
// JavaScript để chuyển đổi giữa Dark Mode và Light Mode
const themeToggleButton = document.getElementById('theme-toggle');
const bodyElement = document.body;

themeToggleButton.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
    bodyElement.classList.toggle('light-mode');
    
    // Đổi tên button tùy theo chế độ hiện tại
    if (bodyElement.classList.contains('dark-mode')) {
        themeToggleButton.textContent = "Switch to Light Mode";
    } else {
        themeToggleButton.textContent = "Switch to Dark Mode";
    }
});
