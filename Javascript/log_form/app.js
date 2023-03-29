var span_name=document.getElementById("us");
var span_email=document.getElementById("em");
var span_pass=document.getElementById("pass_1");
var span_con=document.getElementById("con_pass");

function first()
{
    var use=document.getElementById("name").value;
    if(use.length<=5||use.length>15)
    {
        span_name.innerHTML="User name is not vaild";
        span_name.style.color="red";
    }
    else{
        span_name.innerHTML="";
        span_name.style.color="red";
    }

}

function second()
{
    var pass1=document.getElementById("pass").value;
    if(pass1.length<=5||pass1.length>12)
    {
        span_pass.innerHTML="please use all charactors @#$%&* maximum 12 ";
        span_pass.style.color="red";
    }
    else{
        span_pass.innerHTML="";
        span_pass.style.color="red";
    }

}

function tr()
{
    var npass=document.getElementById("copass").value;
    if(npass.length<=5||npass.length>12)
    {
        span_con.innerHTML="enter your confirm password ";
        span_con.style.color="red";
    }
    else{
        span_con.innerHTML="";
        span_con.style.color="red";
    }

}