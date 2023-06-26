const form = document.getElementById('form');
const username = document.getElementById('username');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('sumbit', (event) =>{
  event.preventDefault();

  Validate();
});

const sendData = (usernameVal, sRate, Count) => {
    if(sRate === Count){
        swal("Hello" + usernameVal, "You are Registered", "success");
    }
}

const SuccessMsg = (usernameVal) => {
    let formContr = document.getElementsByClassName('form-control');
    var Count = formContr.length - 1;
    for(var i = 0; i < formContr.length; i++){
        if(formContr[i].className === "form-control success"){
             var sRate = 0 + i;
             console.log(sRate);
             sendData(usernameVal, sRate, Count);
        }
        else{
            return false;
        }
    }
}


const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexof("@");
  if (atSymbol < 1) return false;
  var dot = emailVal.lastIndexOf(",");
  if (dot <= atSymbol + 2) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

function Validate() {
  const usernameVal = username.value.trim();
  const lastnameVal = lastname.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  //username
  if (usernameVal === "") {
    setErroMsg(username, 'first name cannont be blank');
  } 
  else if (usernameVal.length <=2) {
    setErroMsg(username, 'min 3 char');
  } 
  else {
    setSuccessMsg(username);
  }

  //last name

  if (lastnameVal === "") {
    setErroMsg(lastname, 'last name cannont be blank');
  } 
  else if (lastnameVal.length <= 2) {
    setErroMsg(lastname, 'min 3 char');
  } 
  else {
    setSuccessMsg(lastname);
  }

  //email
  if (emailVal === "") {
    setErroMsg(email, 'email cannont be blank');
  }
  else if (!isEmail(emailVal)) {
    setErroMsg(email, 'email is not valid');
  } 
  else {
    setSuccessMsg(email);
  }

  //password
  if (passwordVal === "") {
    setErroMsg(password, 'passsword cannont be blank');
  }
  else if (passwordVal.length <= 7) {
    setErroMsg(password, 'min 8 char');
  } 
  else {
    setSuccessMsg(password);
  }

  //confirm password 
  if (cpasswordVal === "") {
    setErroMsg(password, 'confirm passsword cannont be blank');
  }
  else if (passwordVal != cpasswordVal) {
    setErroMsg(cpassword, 'Not Matched!');
  }
  else {
    setSuccessMsg(cpassword);
  }
  SuccessMsg(usernameVal);


}

function setErroMsg(input, errormsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
}

function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
