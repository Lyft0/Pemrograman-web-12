var riddle, question, answer;

async function getRiddle() {
  const response = await fetch("https://riddles-api.vercel.app/random"); // API yang digunakan riddles-api
  const data = await response.json();
  let riddles = data.riddle;
  let answer = data.answer;
  let new_riddle = [riddles, answer];
  return new_riddle;
}

async function newRiddle() {
  document.getElementById("result").style.display = "none";
  document.getElementById("answer").style.display = "none";
  riddle = await getRiddle();
  console.log(riddle);
  question = riddle[0];
  answer = riddle[1];
  document.querySelector("#question").textContent = question;
}

const checkBtn = document.querySelector("#check");
checkBtn.addEventListener("click", function () {
  input = document.querySelector("#yourAnswer").value;
  checkAnswer(input);
});

function checkAnswer(input) {
  document.getElementById("result").style.display = "";
  if (input.toLowerCase() == answer.toLowerCase()) {
    disable_input();
    document.getElementById("surren").style.display = "none";
    document.querySelector("#result").textContent = "> Your Right Batman!!";
    document.querySelector("#result").style.color = "rgb(2, 195, 2)";
    document.getElementById("answer").style.display = "";
    document.querySelector("#answer").textContent = answer;
  } else {
    document.querySelector("#result").textContent = "> Nopee, Try Again";
    document.querySelector("#result").style.color = "rgb(201, 32, 32)";
  }
}

const surrenBtn = document.querySelector("#surren");
surrenBtn.addEventListener("click", function () {
  document.getElementById("result").style.display = "none";
  document.getElementById("answer").style.display = "";
  document.querySelector("#answer").textContent = answer;
  document.getElementById("surren").style.display = "none";
  disable_input();
});

const newBtn = document.querySelector("#newRiddle");
newBtn.addEventListener("click", function () {
  document.querySelector("#question").textContent = "";
  document.querySelector("#result").textContent = "";
  document.querySelector("#answer").textContent = "";
  document.getElementById("surren").style.display = "";
  document.getElementById("yourAnswer").value = "";
  enable_input();
  newRiddle();
});

function disable_input() {
  document.querySelector("#yourAnswer").disabled = true;
  document.querySelector("#check").disabled = true;
}

function enable_input() {
  document.querySelector("#yourAnswer").disabled = false;
  document.querySelector("#check").disabled = false;
}

newRiddle();
