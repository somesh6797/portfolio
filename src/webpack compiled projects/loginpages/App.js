import './App.scss'

const upButton= document.querySelector(".up");
const downButton= document.querySelector(".down");
let frameHeight=document.querySelector(".frame").offsetHeight;

upButton.addEventListener("click",(e)=>{
    window.scrollBy(0,-frameHeight);
})

downButton.addEventListener("click",(e)=>{
    window.scrollBy(0,frameHeight);
});