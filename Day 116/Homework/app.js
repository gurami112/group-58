class User {
    constructor(name, email, password) {
      this._name = name;
      this.email = email;
      this._password = password;
    }
  
    get name() {
      return this._name;
    }
  
    set password(newPass) {
      const hasNumber = /\d/.test(newPass);
      const hasSymbol = /[!@#\$%\^\&*\)\(+=._-]/.test(newPass);
      if (newPass.length > 4 && (hasNumber || hasSymbol)) {
        this._password = newPass;
      }
    }
  }
  
  const users = [];
  
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const registerBtn = document.getElementById("registerBtn");
  
  registerBtn.addEventListener("click", function() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
  
    if (!name || !email || !password) {
      alert("Fill all fields");
      return;
    }
  
    const user = new User(name, email, password);
    users.push(user);
    console.log(users);
  
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  });
  