function my(){
    var numb= parseInt(document.getElementById("numb").value);
    var sel=document.getElementById("sel");
    var op='<option value="">Choose</option>'
    for(var i=0; i<=numb; i++){
        op+='<option value='+i+'>'+i+'</option>';
    }sel.innerHTML=op;
      
}

function st(){
    var sel=document.getElementById("sel").value;
    var opq='<option value="">Choose</option>'
    for(var j=0;j<=sel;j++){
        opq+='<option value='+j+'>'+j+'</option>';
    }
    document.getElementById("sel1").innerHTML=opq;
    
}

function vp(){
    var sel1=document.getElementById("sel1").value;
    var form=document.getElementById("frm");
    var inp="";
    for(var c=0;c<sel1;c++){
        inp+='<input type="text" placeholder="username"/> <br> <input type="password" placeholder="password"/>'
    }
    form.innerHTML=inp;
    // alert(inp);
   
}