let btn=document.querySelector("#mode");
let mode= document.querySelector("body");

let currmode="light";
btn.addEventListener("click",()=>{
    if(currmode === "light"){
        currmode="dark";
    mode.classList.add("dark");
    mode.classList.remove("light")
    }
    else{
        currmode="light";
        mode.classList.add("light");
    mode.classList.remove("dark")
    }
})