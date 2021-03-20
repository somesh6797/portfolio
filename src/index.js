import $ from 'jquery';
import './styles/main.scss'


$("nav").find("a").on('click', function (e){
    ul.style.right = "-330px";
    ham.classList.remove("open");
    open=false
    e.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 80
    },1);    
})


const allAnchors=Array.from(document.querySelector(".nav"));
// allAnchors.map(li => {
//     li.childNodes.addEventListener('click', (e) => {
//         console.log(e.target)
        
//     })
// })
console.log(allAnchors);

const hamContainer = document.querySelector(".ham-container");
const ham = document.querySelector(".ham")
const ul=document.querySelector(".nav").firstElementChild
let open=false

hamContainer.addEventListener('click', function (e) {
    if (!open) {
        ham.classList.add("open")
        //now open the nav
        open = true;
        ul.style.right = "0px";
    } else {
        ham.classList.remove("open");
        //now close the nav
        open = false
        ul.style.right = "-330px";
    }
    
})





//Date

document.querySelector(".year").innerText=new Date().getFullYear();

// grab card and slide it
//if choose 1st card right will be width*0
//if choose 2 card right will be width*1
//if choose 3 card right will be width*3

let sliderBox=document.querySelector(".slider-box")
let radioButtons=document.querySelector(".radio-buttons").childNodes;
Array.from(radioButtons).map(button=>{    
    button.addEventListener('click',(e)=>{
        let currentCard=document.querySelector("#project"+e.target.id);
        let viewWidth=(e.target.id-1) * 100 * currentCard.offsetWidth / window.innerWidth +"vw" ;
        console.log(viewWidth)
        sliderBox.style.right=viewWidth;
    })
})