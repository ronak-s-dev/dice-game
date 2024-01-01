function generateRandom(){
// Declaring the range
let min = 1;
let max = 6;
// Creating a random number generator for the specified range using Math.random
var randomVariable1 = Math.floor(Math.random() * (max) + min );
var randomVariable2 = Math.floor(Math.random() * (max) + min );
// Using the querySelector to select the image elements;
var image1 = document.querySelector(".source1");
const path = './cubes-images'+'/cube'+randomVariable1+'.jpg';
image1.setAttribute('src', path);
// For image 2
var image2 = document.querySelector(".source2");
const path1 = './cubes-images'+'/cube'+randomVariable2+'.jpg';
image2.setAttribute('src', path1);
// if else logic to determine the winner;
if (randomVariable1 > randomVariable2){
document.querySelector("h1").innerHTML = "PLAYER ONE WINS!";
document.querySelectorAll(".container div h3")[0].style.color ="#9ADE7B";
document.querySelectorAll(".container div h3")[1].style.color ="whitesmoke";
}
else if(randomVariable1 < randomVariable2){
document.querySelector("h1").innerHTML = "PLAYER TWO WINS!";
document.querySelectorAll(".container div h3")[1].style.color ="#9ADE7B";
document.querySelectorAll(".container div h3")[0].style.color ="whitesmoke";
}
else{
document.querySelector("h1").innerHTML = "TIE!";
document.querySelectorAll(".container div h3")[0].style.color ="#BF3131";
document.querySelectorAll(".container div h3")[1].style.color ="#BF3131";
}
}
// settin the button to call the generateRandom function;
document.querySelector("button").onclick = generateRandom;