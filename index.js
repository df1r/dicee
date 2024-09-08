
var randomNumber1 = 1+Math.floor(Math.random()*6);
var randomNumber2 = 1+Math.floor(Math.random()*6);
var firstPngName = "./images/dice"+randomNumber1+".png";
var secondPngName = "./images/dice"+randomNumber2+".png";
if ( randomNumber1 > randomNumber2 ) {
    winMessage = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1 ) {
    winMessage = "Player 2 Wins!🚩" ;
} else {
    winMessage = "Draw";
}
document.querySelector(".img1").setAttribute("src",firstPngName);
document.querySelector(".img2").setAttribute("src",secondPngName);
document.querySelector("h1").innerText=winMessage;