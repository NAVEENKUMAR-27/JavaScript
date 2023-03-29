var bg=document.getElementById("con");
var clr=document.getElementById("bg_clr")
var mg1=document.getElementById("img1");
var mg2=document.getElementById("img2");
var on=document.getElementById("on");
var off=document.getElementById("off");

function switchon(){
    mg1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    mg2.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    on.style.backgroundColor="green";
    off.style.backgroundColor="white";
    bg.style.backgroundColor="white";
    clr.style.backgroundColor="black";
}

function switchoff(){
    mg1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    mg2.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    on.style.backgroundColor="white";
    off.style.backgroundColor="red";
    bg.style.backgroundColor="black";
    clr.style.backgroundColor="white";
}