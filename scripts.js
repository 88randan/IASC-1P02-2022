function thescript


//MATH!

var highestNum = Math.max (10.2, 4.5, 15.6, 9, 3, 42);
var roundedNum = Math.round(highestNum);
var =sqNum = Math.sqrt(roundedNum);

document.write(highestNum);
document.write("<br/>");
document.write(roundedNum);
document.write("<br/>");
document.write(sqNum);
document.write("<br/>");
document.write("<br/>");

//Random Math!

var randNum = Math.random();
var randOnetoSix = randNum * 6 + 1;
var flooredNum = Math.floor (randOnetoSix);

//Random NUMBER ; MATH.FLOOR(MATH.RANDOM() * N) + S
//// N
// switch

document.write(randNum);
document.write("<br/>");
document.write(randOnetoSix);
document.write("<br/>");
document.write(flooredNum);

//Loops


for (i = 1; i <= 10; i++){
dovument.write("we have looped the loop" + i + "times!");
document.write("<br/>");
}


//condionals

var var1 = 5;
var var2 = 5;

if (var1 == var2){
  console.log("TRUE");
}else{

  console.log("FALSE");
}

if (var1 > var2){
  console.log("Var1 is larger");
}else if (var1 < var2){
  console.log("Var2 is larger");
}else{
  console.log("The Vars are the same!")
}

//ONLOAD


document.getElementByID("testing").innerHTML = "Hello World!";


}

function repeatScriptsStart(){
setTimeout(repeatScript2, 1000);

}

function repeatScriptsStart2(){
  document.write("div>One Div</div>");
  setTimeout(repeatScript3, 2000);

}

function repeatScriptst3(){
  document.write("div>One Div</div>");
  setTimeout(repeatScriptStart, 1000);


}


document.write("<br/>");
