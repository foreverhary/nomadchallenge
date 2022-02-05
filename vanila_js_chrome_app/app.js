const title = document.querySelector("div.hello h1");
console.dir(title);
function handlerTitleClick() {
  title.style.color = "blue";
}

function handlerMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handlerMouseLeave() {
  title.innerText = "Mouse is not here!!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

title.addEventListener("click", handlerTitleClick);
title.addEventListener("mouseenter", handlerMouseEnter);
title.addEventListener("mouseleave", handlerMouseLeave);

window.addEventListener("resize", handleWindowResize);
console.log(document.scripts);
