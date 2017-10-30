

var maze = [
0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,
1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,
1,0,"c",0,0,1,0,"k",0,0,1,1,1,0,0,0,0,1,1,
1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,
1,1,1,0,"b",1,1,1,1,0,0,1,0,0,1,0,0,1,1,
1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,
1,0,1,0,0,0,0,0,0,"o",0,1,0,0,1,0,0,1,1,
1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,
1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,
1,0,1,0,0,0,1,0,0,1,0,0,"m",0,1,0,0,1,1,
1,0,1,0,0,0,0,"w",0,1,1,0,0,0,1,0,0,1,1,
1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,
1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,
1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,
1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,
1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
];
var msgAr = ["How about you both stare into each other's eyes for 15 seconds?",
              "Alright! Let's hold hands for a minute. Keep talking though!",
              "Move your chairs closer. Come on, do it now.",
              "Exchange drinks/plates. Just for a few bites though.",
              "Talk about your past relationships. No, I'm not kidding here.",
              "Time to give each other a compliment.",
              "Describe your morning routine. Bathroom time included.",
              "Make the ugliest face you can think of.",
              "Have a hidden talent? Now's the time to show it!",
              "Wink fest! Wink at each other 5 times consecutively.",
              "Snort like the little piggy you are. Twice at that!",
              "What's the first nursery rhyme you ever heard? You know what to do.",
              "Enact a scene from your favourite movie. Do it now!",
              "Touch each other's hair. Yes, I'm a monster."];
var randomMsg = "";


function generateMsg () {
  var random = Math.floor((Math.random() * 14));
  console.log(random);
  if (randomMsg === msgAr[random])
  generateMsg();
  else
  document.getElementById('display').innerHTML = msgAr[random];
}

 function checkForIncentives()
 {

      var incentiveFries= 24;
      var incentiveDrinks=59;
      var incentiveEntree=64;
      var incentiveDiscount=142;
      var incentiveNextVisit=202;
      var incentiveDessert=216;
 if(piggieLocation+1==incentiveFries || piggieLocation-1==incentiveFries || piggieLocation+19==incentiveFries || piggieLocation-19==incentiveFries)
{
var d = document.getElementById("block-"+incentiveFries);
d.className = "block Fries";
 }

if(piggieLocation==incentiveFries){
  document.getElementById('display').innerHTML = "Good job! Treat that cutie to an order of fries on us!";
} if(piggieLocation+1==incentiveEntree || piggieLocation-1==incentiveEntree || piggieLocation+19==incentiveEntree || piggieLocation-19==incentiveEntree)
{
var d = document.getElementById("block-"+incentiveEntree);
d.className = "block Entree";
}
if(piggieLocation==incentiveEntree){
 document.getElementById('display').innerHTML = "Looks like you just won yourself an entree of your choosing. Keep going!";
} if(piggieLocation+1==incentiveDessert || piggieLocation-1==incentiveDessert || piggieLocation+19==incentiveDessert || piggieLocation-19==incentiveDessert)
{
var d = document.getElementById("block-"+incentiveDessert);
d.className = "block Dessert";
}
if(piggieLocation==incentiveDessert){
 document.getElementById('display').innerHTML = "Let's sweeten this deal with a nice Banana Split. You deserve it :)";
} if(piggieLocation+1==incentiveNextVisit || piggieLocation-1==incentiveNextVisit || piggieLocation+19==incentiveNextVisit || piggieLocation-19==incentiveNextVisit)
{
var d = document.getElementById("block-"+incentiveNextVisit);
d.className = "block NextVisit";
}
if(piggieLocation==incentiveNextVisit){
 document.getElementById('display').innerHTML = "You're so great, we can't wait to have you back. Half off your order on the next visit!";
} if(piggieLocation+1==incentiveDrinks || piggieLocation-1==incentiveDrinks || piggieLocation+19==incentiveDrinks || piggieLocation-19==incentiveDrinks)
{
var d = document.getElementById("block-"+incentiveDrinks);
d.className = "block Drinks";
}
if(piggieLocation==incentiveDrinks){
 document.getElementById('display').innerHTML = "Bartender! Get these two fine individuals a drink to celebrate!";
} if(piggieLocation+1==incentiveDiscount || piggieLocation-1==incentiveDiscount || piggieLocation+19==incentiveDiscount || piggieLocation-19==incentiveDiscount)
{
var d = document.getElementById("block-"+incentiveDiscount);
d.className = "block Discount";
}
if(piggieLocation==incentiveDiscount){
 document.getElementById('display').innerHTML = "You did so well that we want to give you a 20% discount right here!";
}

};

   //code for showing the messages.




var div=document.getElementById('container');
var piggieLocation=0;
for(i=0;i<maze.length;i++)
{
if(i%19==0)
div.innerHTML+="<br>";
if(maze[i]==0)
{
if(i==0)
{
div.innerHTML+='<div id="block-'+i+'" class="block green"><div id="piggie" class="piggie"></div></div>';
}
else
{
div.innerHTML+='<div id="block-'+i+'" class="block green"></div>';
}
}
if(maze[i]=="k" || maze[i]=="b" || maze[i]=="m" || maze[i]=="w" || maze[i]=="o" || maze[i]=="c")
{
div.innerHTML+='<div id="block-'+i+'" class="block treasureChest"></div>';
console.log(maze[i] + " " + i)
}
if(maze[i]==1)
{
div.innerHTML+='<div id="block-'+i+'" class="block tree"></div>';
}
if(maze[i]==2)
{
div.innerHTML+='<div id="block-'+i+'" class ="block white"></div>';
}

}

document.body.addEventListener("keyup",function(e){
  generateMsg();
//38 up, 40 down, 37 left, 39 right
//

if (((e.keyCode == 39 && (piggieLocation+1) % 19 == 0) || (e.keyCode == 37 && piggieLocation % 19 == 0)) && piggieLocation!=0)
return;

if(e.keyCode==39 && (piggieLocation + 1 <= 360) && (piggieLocation + 1 >= 0) && !document.getElementById('block-' + (piggieLocation + 1)).classList.contains('tree'))
{
   document.getElementById('block-'+piggieLocation).innerHTML='';
  piggieLocation+=1;
  document.getElementById('block-'+piggieLocation).innerHTML='<div id="piggie" class ="piggie"></div>';
}

if(e.keyCode==40 && (piggieLocation + 19 <= 360) && (piggieLocation + 19 >= 0) && !document.getElementById('block-' + (piggieLocation + 19)).classList.contains('tree'))
{
   document.getElementById('block-'+piggieLocation).innerHTML='';
  piggieLocation+=19;
  document.getElementById('block-'+piggieLocation).innerHTML='<div id="piggie" class="piggie"></div>';
}


if(e.keyCode==38 && (piggieLocation - 19 <= 360) && (piggieLocation - 19 >= 0) && !document.getElementById('block-' + (piggieLocation - 19)).classList.contains('tree'))
{
   document.getElementById('block-'+piggieLocation).innerHTML='';
  piggieLocation-=19;
  document.getElementById('block-'+piggieLocation).innerHTML='<div id="piggie" class="piggie"></div>';
}

if(e.keyCode==37 && (piggieLocation - 1 <= 360) && (piggieLocation - 1 >= 0) && !document.getElementById('block-' + (piggieLocation - 1)).classList.contains('tree'))
{
   document.getElementById('block-'+piggieLocation).innerHTML='';
  piggieLocation-=1;
  document.getElementById('block-'+piggieLocation).innerHTML='<div id="piggie" class="piggie"></div>';
}
if (piggieLocation == 37) {
  div.innerHTML =
  window.location="win.html";

// div.innerHTML = "<div class='win'><img src='http://i.giphy.com/6hFPE2KgnLrJS.gif' /><br></div>";
}
checkForIncentives();




});
