const input_range = document.querySelector("h2 input");
const input_guest = document.querySelector("h3 input");
const button = document.querySelector("button");

const choose_number = document.querySelector("#choose_num");
const machine_number = document.querySelector("#machine_num");
const result_text = document.querySelector(".play_clicked");
const win_text = document.querySelector(".play_clicked__result");

function buttonClick() {
  result_text.classList.remove("hidden");
  const rand_num = Math.floor(Math.random() * (Number(input_range.value) + 1));
  choose_number.innerText = input_guest.value;
  machine_number.innerText = rand_num;

  if (input_guest.value == rand_num) {
    win_text.innerText = "You win!";
  } else {
    win_text.innerText = "You lost!";
  }
}

button.addEventListener("click", buttonClick);
