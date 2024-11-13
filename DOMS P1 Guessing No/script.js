"use strict";

//.......selectin element in js......<<

/*console.log(document.querySelector(".message").textContent); //selecting same as css(.,#,etc)

document.querySelector(".message").textContent = "Correct number";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 15;
console.log(document.querySelector(".guess").value);
*/

//.......handling click problem.......<<

/*document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess); //type of is string always need to convert in number

  if (!guess) {
    document.querySelector(".message").textContent = "NO NUMBER";
  }
});
*/

//.......IMPLEMENTING THE GAME LOGIC.......<<

let secretNumber = Math.trunc(Math.random() * 20) + 1; //math.trunc use to not getting decimal number and 20 so max point + 1 show 1 to 20

let score = 20;
let highScore = 0;

//here we make function of repeated queryselector of message class
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "NO NUMBER";
    displayMessage("➖ NO NUMBER");

    //When player wins
  } else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "Correct number";
    displayMessage("Correct number");
    //document.querySelector(".number").textContent = secretNumber;
    displayNumber(secretNumber);

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    //when guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "To High" : "To Low";
      displayMessage(guess > secretNumber ? "To High" : "To Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".message").textContent = "You lost the game";
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }

  //   //when guess too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "To High";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   //when guess too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "To Low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector(".message").textContent = "Start guessing";
  displayMessage("Start guessing");

  document.querySelector(".score").textContent = score;

  //document.querySelector(".number").textContent = "?";
  displayNumber("?");
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
