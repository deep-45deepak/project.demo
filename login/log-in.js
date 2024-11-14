// Function to display messages
function showMessage(element, text) {
  element.style.color = "red";
  element.textContent = text;
}

// Initial form visibility
document.getElementById("logInForm").classList.remove("hidden");
document.getElementById("signInForm").classList.add("hidden");

// Toggle between Sign In and Log In forms
document.querySelectorAll(".switch-btn").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("logInForm").classList.toggle("hidden");
    document.getElementById("signInForm").classList.toggle("hidden");
  })
);

// Sign In event handler
document.getElementById("continue1").addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.getElementById("Username").value;
  const email = document.getElementById("Email").value;
  const password = document.getElementById("Password").value;

  if (username && email && password) {
    console.log({ username, email, password });
    window.location.href = "../index.html"; // Open main page
  } else {
    showMessage(document.querySelector(".signIn .message"), "Please fill in all fields.");
  }
});

// Log In event handler
document.getElementById("continue2").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("Email2").value;
  const password = document.getElementById("Password2").value;
  const msgElement = document.querySelector(".login .message");

  if (!email) {
    showMessage(msgElement, "Enter a correct Email!");
  } else if (!password) {
    showMessage(msgElement, "Enter the correct Password!");
  } else if (email === "dpk.41deep@gmail.com" && password === "password") {
    window.location.href = "../index.html"; // Open main page
  } else {
    showMessage(msgElement, "Wrong Password!");
  }
});
