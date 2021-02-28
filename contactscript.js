const form = document.querySelector ("form");
form.addEventListener("submit", validate);

const name = document.querySelector("input#name");
const subject = document.querySelector("input#subject");
const email = document.querySelector("input#email");
const address = document.querySelector("input#address");

const nameMsg = document.querySelector(".namesTxt");
const subjectMsg = document.querySelector(".subjectTxt");
const emailMsg = document.querySelector(".emailTxt");
const addressMsg = document.querySelector(".addressTxt");


// Makes name required
name.setAttribute("required", "")

function validate(r){

r.preventDefault();

// Validate subject
let subjectSub = subject.value.trim();
console.log("Subject: " + subjectSub);
subjectMsg.innerHTML = "";
if (subjectSub.length < 10) {
    subjectMsg.innerHTML += "Must be at least 10 characters!"
}

// Validate email
let emailSub = email.value.trim();
  console.log("Email: " + emailSub); 
  emailMsg.innerHTML = ""; 
  let emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailTest.test(emailSub)) {
    emailMsg.innerHTML += "This is not a valid E-mail address";
  }
// validate address
  let addressSub = address.value.trim();
console.log("Address: " + addressSub);
addressMsg.innerHTML = "";
if (addressSub.length < 25) {
    addressMsg.innerHTML += "Must be at least 25 characters!"
}
}
