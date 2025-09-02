// ================== Part 1: Event Handling ==================

// Show a message when button is clicked
document.getElementById("messageBtn").addEventListener("click", function () {
  document.getElementById("message").textContent = "Hello! You clicked the button 🎉";
});

// ================== Part 2: Interactive Elements ==================

// Light/Dark Mode Toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
document.getElementById("increase").addEventListener("click", () => {
  count++;
  document.getElementById("count").textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  document.getElementById("count").textContent = count;
});

// Collapsible FAQ
const faqQuestion = document.querySelector(".faq-question");
faqQuestion.addEventListener("click", function () {
  const answer = this.nextElementSibling;
  answer.style.display = (answer.style.display === "block") ? "none" : "block";
});

// ================== Part 3: Form Validation ==================
const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop form submission
  let valid = true;

  // Clear old messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    valid = false;
  }

  // Email validation with regex
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    valid = false;
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // Success message
  if (valid) {
    document.getElementById("formSuccess").textContent = "✅ Registration successful!";
    form.reset();
  }
});
