const users = [];

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", function() {
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !email || !password) {
    alert("Fill all fields");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Invalid email");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  const user = {
    username: username,
    email: email,
    password: password
  };

  users.push(user);
  console.log(users);

  usernameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
});
