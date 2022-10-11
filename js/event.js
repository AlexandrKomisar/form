let btn = document.querySelector(".btn");

btn.addEventListener("click", clicked, Option);

function clicked() {
  let newDiv = document.createElement("div");
  newDiv.className = "my-class";
  newDiv.innerHTML = "ok";
  console.log("ok");
}
