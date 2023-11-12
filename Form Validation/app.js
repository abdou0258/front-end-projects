document.getElementById("Form").addEventListener("submit", function (event) {
  event.preventDefault(); 

  // Get the email input and error message element
  const name = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("errorMessage");
  const phone = document.getElementById("phone");
  const phoneError = document.getElementById("phoneError");
  const message = document.getElementById("message");
  const messageError = document.getElementById("messageError");

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneRegex = /^\d{10}$/;

  let isValid = true;

  if (!nameRegex.test(name.value)) {
    nameError.textContent = "Invalid full name. Please enter a valid name.";
    name.focus();
    let isValid = false;
  } else {
    nameError.textContent = "";
  }
  // Check if the email is valid
  if (!emailRegex.test(emailInput.value)) {
    errorMessage.textContent =
      "Invalid email format. Please enter a valid email.";
    emailInput.focus();
    let isValid = false; // Set focus back to the email input
  } else {
    errorMessage.textContent = ""; // Clear any previous error message
  }
  if (!phoneRegex.test(phone.value)) {
    phoneError.textContent =
      "Invalid phone number format. Please enter a valid phone number.";
    phone.focus();
    let isValid = false;
  } else {
    phoneError.textContent = ""; // Clear the phone number error message
  }
    // Check if the message textarea is not empty
    if (
      message.value.trim() === "" ||
      message.value.length < 30
    ) {
      messageError.textContent = "Please enter your message with 30 caracters or more";
      message.focus();
      let isValid = false;
      
    } else {
      messageError.textContent = "";
      
    }
  
  if (!isValid) {
    return;
  }
});
document.getElementById("email").addEventListener("input", function () {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = ""; // Clear the error message
});
document.getElementById("name").addEventListener("input", function () {
  const nameError = document.getElementById("nameError");
  nameError.textContent = "";
});
document.getElementById("phone").addEventListener("input", function () {
  const phoneError = document.getElementById("phoneError");
  phoneError.textContent = "";
});

document.getElementById("message").addEventListener("input", function () {
  const messageError = document.getElementById("messageError");
  messageError.textContent = "";
});
