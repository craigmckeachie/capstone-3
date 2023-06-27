const form = document.getElementById("form");
const username = document.getElementById("username");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  validate();
  if (isValid()) {
    //api call here
    //these two lines should go in the "then" function
    swal("Hello " + username.value, "You are Registered", "success");
    setTimeout(() => window.location.replace("index.html"), 3000);
  }
});

const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;
  var dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

function validate() {
  const usernameVal = username.value.trim();
  const lastnameVal = lastname.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  //username
  if (usernameVal === "") {
    setErrorMsg(username, "first name cannot be blank");
  } else if (usernameVal.length <= 2) {
    setErrorMsg(username, "min 3 char");
  } else {
    setSuccessMsg(username);
  }

  //last name
  if (lastnameVal === "") {
    setErrorMsg(lastname, "last name cannot be blank");
  } else if (lastnameVal.length <= 2) {
    setErrorMsg(lastname, "min 3 char");
  } else {
    setSuccessMsg(lastname);
  }

  //email
  if (emailVal === "") {
    setErrorMsg(email, "email cannot be blank");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "email is not valid");
  } else {
    setSuccessMsg(email);
  }

  //password
  if (passwordVal === "") {
    setErrorMsg(password, "password cannot be blank");
  } else if (passwordVal.length <= 7) {
    setErrorMsg(password, "min 8 char");
  } else {
    setSuccessMsg(password);
  }

  //confirm password
  if (cpasswordVal === "") {
    setErrorMsg(cpassword, "confirm password cannot be blank");
  } else if (passwordVal != cpasswordVal) {
    setErrorMsg(cpassword, "Not Matched!");
  } else {
    setSuccessMsg(cpassword);
  }
}

function isValid() {
  let formControlsWithError =
    document.getElementsByClassName("form-control error");
  return formControlsWithError.length === 0;
}

function setErrorMsg(input, errormsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
}

function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
