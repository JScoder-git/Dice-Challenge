var randomnumber = Math.floor(Math.random()*6) + 1;
var randomdice = "dice"+randomnumber+".png";
var randomimage = "images/"+randomdice;
var image = document.querySelectorAll("img")[0];
image.setAttribute("src",randomimage);



var randomnumber2 = Math.floor(Math.random()*6) + 1;
var randomdice2 = "dice"+randomnumber2+".png";
var randomimage2 = "images/"+randomdice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);


if(randomnumber > randomnumber2){
    document.querySelector("h1").innerHTML ="Player 1 Wins! ";
}
else if(randomdice<randomdice2){
    document.querySelector("h1").innerHTML ="Player 2 Wins! ";
}
else{
    document.querySelector("h1").innerHTML ="Draw";
}