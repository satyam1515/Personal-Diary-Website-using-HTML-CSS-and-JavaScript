// settings.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input");
  const themeSelect = form.querySelector("select");

  // Load saved data
  const savedProfile = JSON.parse(localStorage.getItem("userProfile")) || {};

  if (savedProfile.name) inputs[0].value = savedProfile.name;
  if (savedProfile.email) inputs[1].value = savedProfile.email;

  // Save new data
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const theme = themeSelect.value;

    const updatedProfile = {
      name,
      email,
      since: savedProfile.since || new Date().toLocaleDateString()
    };

    localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
    localStorage.setItem("userTheme", theme);

    alert("Settings saved!");
  });
});
