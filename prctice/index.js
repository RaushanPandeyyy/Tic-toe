let buttom=document.querySelector("button");
buttom.innerText="hhh";
 buttom.remove();

let newbtn=document.createElement("button");
newbtn.innerText="click me!";
newbtn.style.backgroundColor="red";
newbtn.style.color="white";
document.querySelector("body").prepend(newbtn);