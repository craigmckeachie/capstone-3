const form = document.getElementById("form");
const username = document.getElementById("username");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  Validate();
});

const sendData = (usernameVal, sRate, Count) => {
  console.log(sRate, Count);
  if (sRate === Count) {
    console.log("https://microbloglite.herokuapp.com/api/users");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.value,
        fullName: fullname.value,
        password: password.value,
      }),
    };
    fetch("https://microbloglite.herokuapp.com/api/users", options)
      .then((response) => response.json())
      .then(function (user) {
        swal("Hello " + usernameVal, "You are Registered", "success");
        setTimeout(function () {
          window.location.replace("index.html");
        }, 3000);
      })
      .catch((error) => console.log(error));
  }
};

const SuccessMsg = (usernameVal) => {
  let formContr = document.getElementsByClassName("form-control");
  var Count = formContr.length - 1;
  for (var i = 0; i < formContr.length; i++) {
    if (formContr[i].className === "form-control success") {
      var sRate = 0 + i;
      console.log(sRate);
      sendData(usernameVal, sRate, Count);
    } else {
      return false;
    }
  }
};

const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;
  var dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

function Validate() {
  const usernameVal = username.value.trim();
  const fullnameVal = fullname.value.trim();
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

  if (fullnameVal === "") {
    setErrorMsg(fullname, "last name cannot be blank");
  } else if (fullnameVal.length <= 2) {
    setErrorMsg(fullname, "min 3 char");
  } else {
    setSuccessMsg(fullname);
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
  SuccessMsg(usernameVal);
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
