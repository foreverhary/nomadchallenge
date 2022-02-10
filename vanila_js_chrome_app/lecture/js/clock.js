const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log(Date.toString("yyyy:mm:dd hh:MM:ss"));
}
function sayTimeout() {
  console.log("timeout!!");
}

setInterval(sayHello, 1000);

setTimeout(sayTimeout, 1000);
