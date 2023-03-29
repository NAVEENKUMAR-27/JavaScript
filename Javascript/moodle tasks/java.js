
    var final=document.getElementById("divid");
    final.style.color="blue";
    final.style.border="2px solid black";
    final.style.height="150px";
    final.style.width="300px";
    final.style.marginLeft="100px";

    function reg()
    {
        var name_1=document.getElementById("name").value;
        var email_1=document.getElementById("email").value;
        var pass_1=document.getElementById("pass").value;
        var phon_1=document.getElementById("number").value;
        var zip_1=document.getElementById("zip").value;
        var area_1=document.getElementById("area").value;
        var gender_1=document.getElementById("radio_male").value;
        var gender_2=document.getElementById("radio_female").value;
        var gender_3=document.getElementById("radio_other").value;
        var tamil=document.getElementById("lan1").value;
        var english=document.getElementById("lan2").value;
        var spanesh=document.getElementById("lan3").value;


        final.innerHTML="Name:"+" "+name_1 +"<br>"+"Your email:"+"  "+email_1+"<br>"+"your Password:"+" "+pass_1+"<br>"+"Phone Number:"+phon_1+" "+"<br>"+"Gender:"+" "+gender_1+"<br>"+"known Language:"+" "+tamil+english+spanesh+"  "+"<br>";


                        
    }  