var submit = document.getElementById('submit');
submit.addEventListener("click", betGame)

var story = document.getElementById("story")
var score = document.getElementById("score")

score.value = 0
score.innerHTML = score.value

var Uguess = document.getElementsByName("guessSide");
var guess;

var changeText = story.innerHTML;

function betGame() {

  n = Math.round(Math.random() * 10);
  ans = "Tails"
  if (n >= 5) {
    ans = "Heads"
  } else if (n < 5) {
    ans = "Tails"
  }

  for (let i = 0; i < Uguess.length; i++) {
    if (Uguess[i].checked) {
      guess = Uguess[i].value
    }
  }

  if (guess == ans) {
    console.log(ans)
    console.log(guess)
    console.log(n)
    document.getElementById("story").style.backgroundColor = "lightGreen";
    story.innerHTML = "Win!"
    score.value = score.value + 1
    score.innerHTML = score.value

  } else if (guess != ans) {
    console.log(ans)
    console.log(guess)
    console.log(n)
    document.getElementById("story").style.backgroundColor = '#cc4747';
    story.innerHTML = "Lose!"
    score.value = score.value - 1
    score.innerHTML = score.value
  }

  if( score.value < 0){
    story.innerHTML = "Damn you suck"
  }
}
