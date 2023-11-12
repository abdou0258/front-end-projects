const passwordBox = document.getElementById("password");
const length = 12;

const caracters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:',.<>?/`~";

function createPassword() {
  let password = "";
  while (password.length < length) {
    password += caracters[Math.floor(Math.random() * caracters.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value);
}
