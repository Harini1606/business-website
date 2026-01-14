document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const error = document.getElementById("errorMsg");

  if (name === "" || email === "" || message === "") {
    error.style.color = "red";
    error.innerText = "All fields are required";
    return;
  }

  error.style.color = "green";
  error.innerText = "Message sent successfully!";
});
