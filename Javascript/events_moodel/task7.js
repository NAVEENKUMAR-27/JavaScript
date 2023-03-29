function my(){
    var numb= parseInt(document.getElementById("numb").value);
    var sel=document.getElementById("sel")
    var op='<option>Choose</option>'
    for(var i=0; i<=numb; i++){
        op+='<option>'+i+'</option>';}   
        sel.innerHTML=op;
}