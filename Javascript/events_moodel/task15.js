
function d(){
    
    const en=document.getElementById("today").value;
     var dat=new Date(en)
      date= dat.setDate(dat.getDate()+5);
      alert(dat);
      document.getElementById("divid").innerHTML="After 5 days "+dat; 
      date= dat.setDate(dat.getDate() -10 );
      alert(dat);
      document.getElementById("divid").innerHTML="before 5 days "+dat;  
       

    
     
           
}

