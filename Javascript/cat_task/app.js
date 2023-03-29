var  bulb_onimg=document.getElementById("img1")
var dp=document.getElementById("pg")
 dp.style.backgroundColor="black";
var  bulb_offimg=document.getElementById("img2")
var  on_img=document.getElementById("on")
var  off_img=document.getElementById("off")

function on()
{
    bulb_onimg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    bulb_offimg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    on_img.style.backgroundColor="green";
    off_img.style.backgroundColor="white";
}

function off()
{
    bulb_onimg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    bulb_offimg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    on_img.style.backgroundColor="white";
    off_img.style.backgroundColor="red";
}
 

