const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;
  successMessage.textContent = "";

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  clearErrors();

  if (name.value.trim() === "") {
    showError(name, "Name is required");
    valid = false;
  }

  if (!validateEmail(email.value)) {
    showError(email, "Enter a valid email");
    valid = false;
  }

  if (message.value.trim().length < 10) {
    showError(message, "Message must be at least 10 characters");
    valid = false;
  }

  if (valid) {
    successMessage.textContent =
      "Thank you! Your message has been sent.";
    form.reset();
  }
});

function showError(input, message) {
  input.classList.add("error-border");
  input.nextElementSibling.textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.querySelectorAll("input, textarea").forEach(el =>
    el.classList.remove("error-border")
  );
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
