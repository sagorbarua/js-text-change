function changeText(){
  document.getElementById('txt-cng').innerHTML =
    "My name is Sagor Barua";
}

function bulbOn(){
  document.getElementById('image_cng').src ='images/pic_bulbon.gif';

}

function bulbOff(){
  document.getElementById('image_cng').src ='images/pic_bulboff.gif';

}

function sum(){
 let num1, num2, sum;
 num1 = 50;
 num2 = 20;
 sum = num1 + num2;

 document.getElementById("sum").innerHTML= sum ;
}

function sub(){
  let num1, num2, sub;
  num1 = 50;
  num2 = 20;
  sub = num1 - num2;
 
  document.getElementById("sub").innerHTML= sub ;
 }

 function mul(){
  let num1, num2, mul;
  num1 = 50;
  num2 = 20;
  mul = num1 * num2;
 
  document.getElementById("mul").innerHTML= mul ;
 }


 function div(){
  let num1, num2, div;
  num1 = 50;
  num2 = 5;
  div = num1 / num2;
 
  document.getElementById("div").innerHTML= div ;
 }

 function myFunction(x) {
  x.style.background = "yellow";
 }



