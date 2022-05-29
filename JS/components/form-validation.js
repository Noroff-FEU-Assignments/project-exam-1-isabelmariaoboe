// Form validation //

const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const submitbtn = document.querySelector("#submitbtn")

form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log("validating...")

  if (checkLength(name.value, 0) === true) {
      nameError.style.display = "none";
  } else {
      nameError.style.display = "block";
  }

  if (checkLength(name.value, 5) === true) {
      nameError.style.display = "none";
  } else {
      nameError.style.display = "block";
  }

  if (checkLength(subject.value, 0) === true) {
    subjectError.style.display = "none";
} else {
    subjectError.style.display = "block";
}

if (checkLength(subject.value, 15) === true) {
  subjectError.style.display = "none";
} else {
  subjectError.style.display = "block";
}

if (checkLength(message.value, 25) === true) {
  messageError.style.display = "none";
} else {
  messageError.style.display = "block";
}

  if (validateEmail(email.value) === true) {
      emailError.style.display = "none";
  } else {
      emailError.style.display = "block";
  }

  // if (name.value.trim().length > 0) {
  //     nameError.style.display = "none";
  // } else {
  //     nameError.style.display = "block";
  // }

  // if (subject.value.trim().length > 3) {
  //     subjectError.style.display = "none";
  // } else {
  //     subjectError.style.display = "block";
  // }
})

function checkLength(value, len) {
  if (value.trim().length > len) {
      return true;
  } else {
      return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}