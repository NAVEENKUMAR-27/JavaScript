var red_1=document.getElementById("red");
var yellow_1=document.getElementById("yellow");
var green_1=document.getElementById("green"); 
var stop=document.getElementById("st");


function re()
{
 red_1.style.backgroundColor="red";
 yellow_1.style.backgroundColor="";
 green_1.style.backgroundColor="";
 stop.style.color="red";
 stop.textContent="Stop"
 stop.style.fontSize="50px"
 
}


function ye()
{
 red_1.style.backgroundColor="";
 yellow_1.style.backgroundColor="yellow";
 green_1.style.backgroundColor="";
 stop.style.color="yellow";
 stop.textContent="Ready"
}


function ae()
{
 red_1.style.backgroundColor="";
 yellow_1.style.backgroundColor="";
 green_1.style.backgroundColor="green";
 stop.style.color="green";
 stop.textContent="let's Go"
}