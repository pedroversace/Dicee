//Random Number Generator//
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;



//Variable Images Pull The img number//
var images1 = "images/dice" + randomNumber1 + ".png";
var images2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", images1);
document.querySelector(".dice .img2").setAttribute("src", images2);



//Hint: You'll need to use an if statement, querySelector() 
//and the innerHTML property to change the text in the h1.//
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🏁"
} 
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏁"
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "DRAW! <br>Roll Again"
}