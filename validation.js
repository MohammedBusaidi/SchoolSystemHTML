const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const numberInput = document.querySelector("#number");
const ageInput = document.querySelector("#age");
const genderSelect = document.querySelector("#gender");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  if (!nameInput.value) {
    alert("Name is required");
    isValid = false;
  }

  if (!emailInput.value) {
    alert("Email is required");
    isValid = false;
  }

  if (!numberInput.value) {
    alert("Phone number is required");
    isValid = false;
  }

  if (!ageInput.value) {
    alert("Age is required");
    isValid = false;
  }

  if (!genderSelect.value) {
    alert("Gender is required");
    isValid = false;
  }

  if (isValid) {
    form.submit();
  }
});