//Select elements using DOM(Document Object Model)
"use strict";
const body=document.getElementById("body");
const follower=document.getElementById("cursorFollower");
const main=document.getElementById("main");
const image1=document.getElementById("image-1");
const image2=document.getElementById("image-2");
const image3=document.getElementById("image-3");
const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
const heart1=document.getElementsByClassName("heart1")[0];
const heart2=document.getElementsByClassName("heart2")[0];
const heart3=document.getElementsByClassName("heart3")[0];






function movement(details) {
    follower.style.left=details.clientX+"px";
    follower.style.top=details.clientY+"px";
    console.log(details);
    if (details.clientX<850 && details.clientY<500) {
        body.style.backgroundColor="#45FFCA";
        follower.style.backgroundColor="red";
        image1.style.transform=`rotateZ(${(0-800+details.clientX)*0.01}deg)`
        image2.style.transform=`rotateZ(${(0-800+details.clientX)*0.01}deg)`
        image3.style.transform=`rotateZ(${(0-800+details.clientX)*0.01}deg)`

    }
    else if(details.clientX<850 && details.clientY>500) {
        body.style.backgroundColor="orange";
        follower.style.backgroundColor="red";
        image1.style.transform=`rotateZ(${(0-800+details.clientX)*0.01}deg)`
        image2.style.transform=`rotateZ(${(0-800+details.clientX)*0.01}deg)`
        image3.style.transform=`rotateZ(${(0-800+details.clientX)*0.01}deg)`

    }
    else if(details.clientX>850 && details.clientY<500) {
        body.style.backgroundColor="yellow"
        follower.style.backgroundColor="#45FFCA";
        setTimeout(function() {
            body.style.backgroundColor="magenta";
           
        },1);
       
        follower.style.boxShadow="0 0 100px 5px #45FFCA";
        image1.style.transform=`rotateZ(${(details.clientX)*0.01}deg)`
        image2.style.transform=`rotateZ(${(details.clientX)*0.01}deg)`
        image3.style.transform=`rotateZ(${(details.clientX)*0.01}deg)`

    }
    else if (details.clientX>850 && details.clientY>500){
        body.style.backgroundColor="red"
        follower.style.backgroundColor="#45FFCA";
        follower.style.boxShadow="0 0 100px 5px #45FFCA";
        image1.style.transform=`rotateZ(${(details.clientX)*0.01}deg)`
        image2.style.transform=`rotateZ(${(details.clientX)*0.01}deg)`
        image3.style.transform=`rotateZ(${(details.clientX)*0.01}deg)`

    }

    
}

body.addEventListener("mousemove",movement);

function click1() {
    heart1.style.transform="scale(1)";
    setTimeout(function() {
        heart1.style.transform="scale(0)";
    },500)

}
function click2() {
    heart2.style.transform="scale(1)";
    setTimeout(function() {
        heart2.style.transform="scale(0)";

    },500)
}
function click2() {
    heart2.style.transform="scale(1)";
    setTimeout(function() {
        heart2.style.transform="scale(0)";

    },500)
}
function click3() {
    heart3.style.transform="scale(1)";
    setTimeout(function() {
        heart3.style.transform="scale(0)";

    },500)
}


image1.addEventListener("dblclick",click1);
image2.addEventListener("dblclick",click2);
image3.addEventListener("dblclick",click3)


    