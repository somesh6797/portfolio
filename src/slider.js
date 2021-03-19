// grab card and slide it
//if choose 1st card right will be 99*0
//if choose 2 card right will be 99*1
//if choose 3 card right will be 99*3

let sliderBox=document.querySelector(".slider-box")
let cardList=document.querySelector(".slider-box").childNodes;
let radioButtons=document.querySelector(".radio-buttons").childNodes;
Array.from(radioButtons).map(button=>{    
    button.addEventListener('click',(e)=>{
        let currentCard=document.querySelector("#project"+e.target.id);

        let viewWidth=(e.target.id-1) * 100 * currentCard.offsetWidth / window.innerWidth +"vw" ;
        console.log(viewWidth)
        sliderBox.style.right=viewWidth
    })
})

