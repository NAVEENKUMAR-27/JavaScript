function con()
{
   var pass1=document.getElementById("pass").value;
   var cpass=document.getElementById("conpass").value;
   var span1=document.getElementById("sp1").value;
   var span2=document.getElementById("sp2").value

   if(pass1==null||pass1=="")
   {
      alert('Enter your password');
   }
   else if(cpass==null||cpass=="")
   {
      alert('Re enter your password');
   }
   else{
      alert("login  succesfully");
   }

}

function myFunction() {
   return "Peacock";
 } console.log(myFunction());

 function greet() {

   return "Hello! Have a nice day";
 
 }
  console.log(greet());


  function demo()
  {

   var a=10;
   var b=200;
 
 return a+b;
 }
 console.log(demo());

 function int()
  {

   var a=50;
   var b=100;
   var total=a+b;
 return total/2;
 
 }
 console.log(int());


 function ext(Naveen)
  {

 return "Hi "+Naveen;
 
 }
 console.log(ext("Naveen"));



 function min()
  {
   var min=5;
 return 5*60+"sec"
 
 }
 console.log(min());
 