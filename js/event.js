let btn = document.querySelector(".btn");

const options = {
  //фаза на якій повинен спрацювати обработчик
  capture: true,
  //якщо true то обработчик видалиться після виконання
  once: false,
  //
  passive: false,
};

btn.addEventListener("click", clicked, options);

function clicked() {
  let newDiv = document.createElement("div");
  newDiv.className = "my-class";
  newDiv.innerHTML = "<div></div>";
  console.log("click");
}

// drop menu
const menuBody = document.querySelector(".menu");
document.addEventListener("click", menu);

function menu(event) {
  if (event.target.closest(".menu__button")) {
    menuBody.classList.toggle("_active");
  }
  if (!event.target.closest(".menu")) {
    menuBody.classList.remove("_active");
  }
}
