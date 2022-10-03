let x = Math.floor((Math.random() * 6) + 1);
let y = Math.floor((Math.random() * 6) + 1);

var randomDiceImage1 = "dice" + x + ".png";
var randomImageSource1 = "images/" + randomDiceImage1;
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomImageSource1);


var randomDiceImage2 = "dice" + y + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", randomImageSource2);

if(x>y){
    document.querySelector("h1").innerHTML = "Player 1";
}else{
    document.querySelector("h1").innerHTML = "Player 2";
}

