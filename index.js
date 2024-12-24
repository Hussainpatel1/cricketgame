let scoreStr = localStorage.getItem("score");
let score;

resetScore(scoreStr);

function resetScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        tie: 0,
        lose: 0,
      };
  score.displayScore = function () {
    return `Won : ${score.win} , Tie : ${score.tie} , Loce : ${score.lose}`;
  };

  showResult();
}

function computerChoicegen() {
  let randomNumber = Math.random() * 3;

  if (randomNumber > 0 && randomNumber <= 1) {
    return "bat";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return "ball";
  } else {
    return "stump";
  }
}

function getResult(userMove, computerMove) {
  if (userMove === "bat") {
    if (computerMove === "bat") {
      score.tie++;
      return "Match tie";
    } else if (computerMove === "ball") {
      score.win++;
      return "Won";
    } else if (computerMove === "stump") {
      score.lose++;
      return "Lose";
    }
  } else if (userMove === "ball") {
    if (computerMove === "bat") {
      score.lose++;
      return "Lose";
    } else if (computerMove === "ball") {
      score.tie++;
      return "Match tie";
    } else if (computerMove === "stump") {
      score.win++;
      return "Won";
    }
  } else {
    if (computerMove === "bat") {
      score.win++;
      return "Won";
    } else if (computerMove === "ball") {
      score.lose++;
      return "Lose";
    } else if (computerMove === "stump") {
      score.tie++;
      return "Match tie";
    }
  }
}

function showResult(userMove, computerMove, result) {
  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector("#user-move").innerText = userMove || "";
  document.querySelector("#computer-move").innerText = computerMove || "";
  document.querySelector("#result").innerText = result || "";
  document.querySelector("#score").innerText = score.displayScore();
}

function bat() {
  let computerChoise = computerChoicegen();
  let result = getResult("bat", computerChoise);
  showResult("bat", computerChoise, result);
}

function ball() {
  let computerChoise = computerChoicegen();
  let result = getResult("ball", computerChoise);
  showResult("ball", computerChoise, result);
}

function stump() {
  let computerChoise = computerChoicegen();
  let result = getResult("stump", computerChoise);
  showResult("stump", computerChoise, result);
}
