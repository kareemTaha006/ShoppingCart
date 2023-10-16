//UserNameValidation
var first_name = document.getElementById("firstname");
var P_first_valid = document.getElementById("P_User");
var regex_firstname = /^[A-Za-z]{5,}$/;
function FirstNameValidation() {
  if (regex_firstname.test(first_name.value)) {
    P_first_valid.classList.add("Display_None");
    return true;
  } else {
    P_first_valid.classList.remove("Display_None");
    return false;
  }
}

var last_name = document.getElementById("lastname");
var P_last_valid = document.getElementById("P_User_last");
var regex_lastname = /^[A-Za-z]{5,}$/;
function LastNameValidation() {
  if (regex_lastname.test(last_name.value)) {
    P_last_valid.classList.add("Display_None");
    return true;
  } else {
    P_last_valid.classList.remove("Display_None");
    return false;
  }
}

var Email_s = document.getElementById("email");
var P_Email_valid = document.getElementById("P_email");
var regx_Email = /^[A-Za-z0-9]{4,15}@(gmail.com|outlook.com)$/;
function EmailValidation() {
  if (regx_Email.test(Email_s.value)) {
    P_Email_valid.classList.add("Display_None");
    return true;
  } else {
    P_Email_valid.classList.remove("Display_None");
    return false;
  }
}

var message_m = document.getElementById("message");
var P_message_valid = document.getElementById("P_message");
var regx_message = /\b[\w\s]{50,}\b/g;
function messageValidation() {
  if (message_m.value.match(regx_message)) {
    P_message_valid.classList.add("Display_None");
    return true;
  } else {
    P_message_valid.classList.remove("Display_None");
    return false;
  }
}

first_name.addEventListener("input", FirstNameValidation);
last_name.addEventListener("input", LastNameValidation);
Email_s.addEventListener("input", EmailValidation);
message_m.addEventListener("input", messageValidation);

var btn_submit = document.querySelector("input[type='submit']");
btn_submit.addEventListener("click", function (e) {
  //   e.preventDefault();
  FirstNameValidation();
  LastNameValidation();
  EmailValidation();
  messageValidation();
  if (
    FirstNameValidation() &&
    LastNameValidation() &&
    EmailValidation() &&
    messageValidation()
  ) {
    alert("success");
  }
});
