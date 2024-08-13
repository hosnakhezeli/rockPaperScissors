document.addEventListener("DOMContentLoaded", () => {
  const choices = ["✊", "✋", "✌️"];
  const resultText = document.getElementById("resultText");
  const userChoiceDiv = document.getElementById("userChoice");
  const computerChoiceDiv = document.getElementById("computerChoice");
  const countUser = document.getElementById("user-result");
  const countComputer = document.getElementById("computer-result");
  const LightMode = document.getElementById("light-mode");
  const numberForm = document.getElementById('numberForm');
  const numberInput = document.getElementById('numberInput');
  const bottonItem = document.querySelectorAll(".button-choice");
  const result_box = document.getElementById("resultText");

  
  document.getElementById("reset-game").addEventListener("click", ()=> Reset());
  document
    .getElementById("rock")
    .addEventListener("click", () => playGame("✊"));
  document
    .getElementById("paper")
    .addEventListener("click", () => playGame("✋"));
  document
    .getElementById("scissors")
    .addEventListener("click", () => playGame("✌️"));

  LightMode.addEventListener("click", () => light());

  let test;
  let timerGame = 15;
  let count_user = 0;
  let count_computer = 0;
  let enteredNumber;


  window.addEventListener('DOMContentLoaded', function() {
    startTimer();
  });

  
  numberForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    enteredNumber = parseFloat(numberInput.value);
  });


  function startTimer() {
    test = setInterval(function() {
      document.getElementById("timer").textContent = timerGame;
      timerGame--;
      if (timerGame < 0) {
        clearInterval(test);
        document.getElementById("time-out").innerText = "زمان تمام شد!";
      }
    }, 1000);
  }

  function light() {
    document.body.classList.toggle("light-theme");
  }


  function Reset() {
    count_user = 0;
    count_computer = 0;
    countComputer.textContent = count_computer;
    countUser.innerText = count_user;
    userChoiceDiv.innerText = " ";
    computerChoiceDiv.innerText = " ";
    resultText.innerText = " ";
    document.getElementById("time-out").innerText = " ";
    bottonItem.forEach(div => div.disabled = false);
    result_box.classList.remove("red_text", "green_text");
    numberInput.value = " ";
    enteredNumber = parseFloat(" ");
    timerGame = 15;
    clearInterval(test);
    startTimer();
  }


  function playGame(userChoice) {
    timerGame = 15;
    clearInterval(test);
    startTimer();
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = getResult(userChoice, computerChoice);
    userChoiceDiv.textContent = userChoice;
    computerChoiceDiv.textContent = computerChoice;
    resultText.textContent = result;
    if (result === "شما برنده شدید!") {
      count_user++;
      countUser.innerText = count_user;
      resultText.textContent += " 😊";
    } else if (result === "شما باختید!") {
      count_computer++;
      countComputer.textContent = count_computer;
      resultText.textContent += " 😢";
    }

    
    if (enteredNumber === count_user) {
      bottonItem.forEach(div => div.disabled = true);
      result_box.classList.add("green_text");
    }else if(enteredNumber === count_computer) {
      bottonItem.forEach(div => div.disabled = true);
      result_box.classList.add("red_text");
    }
  }

  function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "مساوی!";
    } else if (
      (userChoice === "✊" && computerChoice === "✌️") ||
      (userChoice === "✋" && computerChoice === "✊") ||
      (userChoice === "✌️" && computerChoice === "✋")
    ) {
      return "شما برنده شدید!";
    } else {
      return "شما باختید!";
    }
  }
});
