document.addEventListener("DOMContentLoaded", function () {
  let formData = {};
  const form = document.querySelector("form");
  const LS = localStorage;

  // отримуємо данні з

  form.addEventListener("input", function (event) {
    formData[event.target.name] = event.target.value;
    LS.setItem("formData", JSON.stringify(formData));
    console.log(formData);
  });

  // відновити данні

  if (LS.getItem("formData")) {
    formData = JSON.parse(LS.getItem("formData"));
    // form.elements[name];
    for (let key in formData) {
      form.elements[key].value = formData[key];
    }
  }
});
