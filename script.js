
function check() {
  let inputFirstName = document.getElementById("input-first-name");
  let errorFirstName = document.getElementById("error-first-name");
  let warningFirstName = document.getElementById("warning-first-name");
  let firstName = document.getElementById("first-name");

  let inputLastName = document.getElementById("input-last-name");
  let errorLastName = document.getElementById("error-last-name");
  let warningLastName = document.getElementById("warning-last-name");
  let lastName = document.getElementById("last-name");

  let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let inputEmail = document.getElementById("input-email");
  let errorEmail = document.getElementById("error-email");
  let warningEmail = document.getElementById("warning-email");
  let email = document.getElementById("email");

  let inputPassword = document.getElementById("input-password");
  let errorPassword = document.getElementById("error-password");
  let warningPassword = document.getElementById("warning-password");
  let password = document.getElementById("password");

  if(inputFirstName.value.trim() === "") {
    errorFirstName.style.display = "initial";
    warningFirstName.style.display = "block";
    firstName.style.borderColor = "var(--clr-primary-100)"
  } else {
    errorFirstName.style.display = "none";
    warningFirstName.style.display = "none";
    firstName.style.borderColor = "var(--clr-neutral-200)"
  }

  if(inputLastName.value.trim() === "") {
    errorLastName.style.display = "initial";
    warningLastName.style.display = "block";
    lastName.style.borderColor = "var(--clr-primary-100)"
  } else {
    errorLastName.style.display = "none";
    warningLastName.style.display = "none";
    lastName.style.borderColor = "var(--clr-neutral-200)"
  }

  if(!inputEmail.value.match(format)) {
    errorEmail.style.display = "initial";
    warningEmail.style.display = "block";
    email.style.borderColor = "var(--clr-primary-100)"
  } else {
    errorEmail.style.display = "none";
    warningEmail.style.display = "none";
    email.style.borderColor = "var(--clr-neutral-200)"
  }


  if(inputPassword.value.trim() === "") {
    errorPassword.style.display = "initial";
    warningPassword.style.display = "block";
    password.style.borderColor = "var(--clr-primary-100)"
  } else {
    errorPassword.style.display = "none";
    warningPassword.style.display = "none";
    password.style.borderColor = "var(--clr-neutral-200)"
  }

}