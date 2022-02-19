const clock = document.querySelector("h2");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // clock.innerText = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ${hours}:${minutes}:${seconds}`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
function sayTimeout() {
  console.log("timeout!!");
}

setInterval(getClock, 1000);

setTimeout(sayTimeout, 1000);
