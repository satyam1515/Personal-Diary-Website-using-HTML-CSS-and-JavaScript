document.addEventListener('DOMContentLoaded', () => {
    const diaryForm = document.querySelector('#diary-form');
    const diaryInput = document.querySelector('#diary-input');
    const diaryList = document.querySelector('#diary-list');

    // Event listener to save the diary entry
    diaryForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting the traditional way

        const entryText = diaryInput.value.trim();
        if (entryText === '') {
            alert('Please write something before submitting.');
            return;
        }

        // Create a new list item
        const newEntry = document.createElement('li');
        newEntry.textContent = entryText;

        // Optionally add a timestamp to each entry
        const timestamp = document.createElement('span');
        timestamp.textContent = ` - ${new Date().toLocaleString()}`;
        timestamp.style.fontSize = '0.8em';
        timestamp.style.color = '#777';
        newEntry.appendChild(timestamp);

        // Add the new entry to the list
        diaryList.appendChild(newEntry);

        // Clear the input field after submission
        diaryInput.value = '';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const acceptTerms = document.getElementById('acceptTerms');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Password match validation
        if (password.value !== confirmPassword.value) {
            alert('Passwords do not match!');
            return;
        }

        // Terms and conditions checkbox validation
        if (!acceptTerms.checked) {
            alert('You must accept the terms and conditions to register.');
            return;
        }

        // If everything is valid, store the user
        const newUser = {
            username: username.value.trim(),
            email: email.value.trim(),
            password: password.value.trim()
        };

        // Get existing users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        // Add the new user to the array
        users.push(newUser);
        // Save the updated users array back to localStorage
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful!');
        // Redirect to login page
        window.location.href = 'login.html';
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');

    loginForm.addEventListener('submit', (event) => {
        // Prevent form from submitting the traditional way
        event.preventDefault();

        // Check if email and password are filled out
        if (emailField.value.trim() === '') {
            alert('Please enter your email.');
            return;
        }

        if (passwordField.value.trim() === '') {
            alert('Please enter your password.');
            return;
        }

        // Here you can add further validation, such as email format check or API validation

        // If everything is valid, proceed with redirect
        alert('Login successful!');

        // Redirect to diary.html after successful login
        window.location.href = 'diary.html';
    });
});

const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const menuToggler = document.querySelector(".menu-toggler");
// Ensure these heights match the CSS sidebar height values
let collapsedSidebarHeight = "56px"; // Height in mobile view (collapsed)
let fullSidebarHeight = "calc(100vh - 32px)"; // Height in larger screen
// Toggle sidebar's collapsed state
sidebarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});
// Update sidebar height and menu toggle text
const toggleMenu = (isMenuActive) => {
  sidebar.style.height = isMenuActive ? `${sidebar.scrollHeight}px` : collapsedSidebarHeight;
  menuToggler.querySelector("span").innerText = isMenuActive ? "close" : "menu";
}
// Toggle menu-active class and adjust height
menuToggler.addEventListener("click", () => {
  toggleMenu(sidebar.classList.toggle("menu-active"));
});
// (Optional code): Adjust sidebar height on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    sidebar.style.height = fullSidebarHeight;
  } else {
    sidebar.classList.remove("collapsed");
    sidebar.style.height = "auto";
    toggleMenu(sidebar.classList.contains("menu-active"));
  }
});
// Font changing
document.getElementById("fontSelect").addEventListener("change", function () {
  const selectedFont = this.value;
  document.getElementById("diaryEntry").style.fontFamily = selectedFont;
});