/* Ramdomly roll dice */

//left
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var rolledDice1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", rolledDice1);
//add "." for class

//leftDice.setAttribute("src", "image/dice + randomNumber1 + .png");

// if(randomNumber1 === 1){
//   leftDice.setAttribute("src", "images/dice1.png");
// }
// else if(randomNumber1 === 2){
//   leftDice.setAttribute("src", "images/dice2.png");
// }
// else if(randomNumber1 === 3){
//   leftDice.setAttribute("src", "images/dice3.png");
// }
// else if(randomNumber1 === 4){
//   leftDice.setAttribute("src", "images/dice4.png");
// }
// else if(randomNumber1 === 5){
//   leftDice.setAttribute("src", "images/dice5.png");
// }
// else{
//   leftDice.setAttribute("src", "images/dice6.png");
// }

//Right
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var rolledDice2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", rolledDice2);


/* Display Winner */

//if player 1 wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "👾 Player 1 Wins 👾";
}

//if player 2 wins
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "👾 Player 2 Wins 👾";
}

//if it's tie
else{
  document.querySelector("h1").innerHTML = "👾 Draw 👾";
}
