const clockTitle = document.querySelector(".js-clock");
const chrismasEve = new Date("2022-12-24T00:00:00+0900");

function getDdayTime() {
  const now = new Date();
  const diff = chrismasEve - now;
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  clockTitle.innerText = `${day}d ${hours
    .toString()
    .padStart(2, "0")}h ${minutes.toString().padStart(2, "0")}m ${seconds
    .toString()
    .padStart(2, "0")}s`;
}

setInterval(getDdayTime, 1000);
