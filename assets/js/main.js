const fname = document.querySelector("#name");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const passCheck = document.querySelector("#passCheck");
const btn = document.getElementById("btn");
let form = document.querySelector(".form");
const togglePass = document.querySelector(".togglePassword");

callEventHandlers();

function callEventHandlers() {
  form.addEventListener("submit", formValidation);
  pass.addEventListener("keyup", validatePassword);
  // passCheck.addEventListener('keyup', checkPassword);
  togglePass.addEventListener("click", togglePasswordVisibility);
}

function formValidation(e) {
  e.preventDefault();

  let username = fname.value.trim();
  let lastname = lname.value.trim();
  let useremail = email.value.trim();
  let password = pass.value.trim();
  let passwordCheck = passCheck.value.trim();

  // Regular expression patterns
  var namePattern = /^[a-zA-Z\s]+$/;
  var lnamePattern = /^[a-zA-Z\s]+$/;

  if (!namePattern.test(username)) {
    notifyMessage("Invalid First Name. Only alphabets and spaces are allowed.");
    return;
  }

  if (!lnamePattern.test(lastname)) {
    notifyMessage("Invalid Last Name. Only alphabets and spaces are allowed.");
    return;
  }
  if (!validateEmail(useremail)) {
    notifyMessage("Invalid Email.");
    return;
  }
  if (passwordCheck != password) {
    notifyMessage("Password confirmation is failed.");
    return;
  }
  console.log("works");
  document.querySelector("#name").value = '';
  document.querySelector("#lname").value = '';
  document.querySelector("#email").value = '';
  document.querySelector("#pass").value = '';
  document.querySelector("#passCheck").value = '';
  document.querySelector(".alert-container").innerHTML = '';
}

// Sub validation functions
function doesContainSym(value) {
  let regex = /[!@#$%^&*(),.?":{}|<>]/;
  return regex.test(value);
}
function validateEmail(email) {
  const pattern = /^[\w.-]+@[\w.-]+\.\w+$/;
  return pattern.test(email);
}

function notifyMessage(message) {
  document.querySelector(".alert-container").innerHTML = `
    <span class="alert" id="alert">${message}</span> 
    `;
}
function notifyPasswordMessage(message) {
  document.querySelector(".alert-container").innerHTML = `
    <span class="alert password" id="alert ">${message}</span> 
    `;
}
function delAlert() {
  document.querySelector(".alert-container").innerHTML = "";
}
let emailEl = "";
function validatePassword(e) {
  emailEl = e.target.value;
  if(emailEl.length < 8) notifyPasswordMessage("Password should be at least 8 charachters");
  else document.querySelector(".alert-container").innerHTML = "";
  console.log(emailEl);
}


function togglePasswordVisibility() {
  const passwordInput = document.querySelector("#pass");
  const eyeIcon = document.getElementById("eyeIcon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}
