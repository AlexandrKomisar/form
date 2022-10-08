let formData = {};
const form = document.querySelector("form");
const LS = localStorage;

// отримуємо данні з

form.addEventListener("input", function (event) {
  formData[event.target.name] = event.target.value;
  LS.setItem("formData", JSON.stringify(formData));
  console.log(formData);
});
