import './App.scss'
const togglerBTN = document.querySelector(".startBTN");
const reset = document.querySelector(".resetBTN");
const hourText = document.querySelector(".hourText");
const minText = document.querySelector(".minText");
const secondText = document.querySelector(".secondText");
const MsText = document.querySelector(".MsText");
const setTimeBTN = document.querySelector(".setTime");
const resetTimeBTN = document.querySelector(".resetTime");
// const TempBtn = document.querySelector(".temp");


let timeID = undefined;
let newTimeID = undefined;
let text = "start";
let msCounter = 0;
let secondCounter = 0;
let minuteCounter = 0;
let hourCounter = 0;

const toggleTime = () => {
  if (text == "start") {
    text = "pause";

    timeID = setInterval(() => {
      msCounter += 1;
      if (msCounter >= 10) {
        msCounter = 0;
        secondCounter += 1;
        if (secondCounter > 59) {
          minuteCounter += 1;
          secondCounter = 0;
          if (minuteCounter > 59) {
            hourCounter += 1;
            minuteCounter = 0;
          }
        }
      }

      hourText.innerText = hourCounter;
      minText.innerText = minuteCounter;
      secondText.innerText = secondCounter;
      MsText.innerText = msCounter;
    }, 100);
  } else if (text == "pause") {
    clearInterval(timeID);
    text = "start";
  }
  togglerBTN.innerText = text;
  console.log("i Came Here");
};

// const toggleTime = time => {
//   if (text == "start") {
//     text = "pause";
//     //to Match the time i've changed the unit to 90 ms

//     timeID = setInterval(() => {
//       msCounter += 1;
//       if (msCounter >= 10) {
//         msCounter = 0;
//         secondCounter += 1;
//         if (secondCounter > 59) {
//           minuteCounter += 1;
//           secondCounter = 0;
//           if (minuteCounter > 59) {
//             hourCounter += 1;
//             minuteCounter = 0;
//           }
//         }
//       }

//       hourText.innerText = hourCounter;
//       minText.innerText = minuteCounter;
//       secondText.innerText = secondCounter;
//       MsText.innerText = msCounter;
//     }, 90);
//   } else if (text == "pause") {
//     clearInterval(timeID);
//     text = "start";
//   }
//   togglerBTN.innerText = text;
// };

//Handeler function which resets time

let resetTime = () => {
  clearInterval(timeID);
  // console.log("hii");
  clearInterval(newTimeID);

  msCounter = 0;
  secondCounter = 0;
  minuteCounter = 0;
  hourCounter = 0;
  hourText.innerText = 0;
  minText.innerText = 0;
  secondText.innerText = 0;
  MsText.innerText = 0;
  togglerBTN.innerText = "start";
  text = "start";
};

// TempBtn.onclick = () => {
//   let timeSec = 120; //this is in seconds
//   setInterval(() => {
//     timeSec--;
//     min = parseInt(timeSec / 60);
//     timeCounter = parseInt(timeSec % 60);
//     console.log(timeCounter, min);
//   }, 1000);
// };

let timeMS=0;
let timeSec=0;
let timeMin=0;
let timeHour=0;


let fallingCounter = time => {
  if (time == 0) {
    resetTime();
  }
   timeMS = parseInt(time * 60 * 10);
  newTimeID = setInterval(() => {
    timeMS--;
    msCounter = parseInt(timeMS % 10);

    timeSec = parseInt(timeMS / 10);
    secondCounter = parseInt(timeSec % 60);

    timeMin = parseInt(timeSec / 60);
    minuteCounter = parseInt(timeMin % 60);

    timeHour = parseInt(timeMin / 60);
    hourCounter = parseInt(timeHour % 60);
    console.log(timeMin);

    hourText.innerText = hourCounter;
    minText.innerText = minuteCounter;
    secondText.innerText = secondCounter;
    MsText.innerText = msCounter;

    if (timeMS <= 0) {
      clearInterval(newTimeID);
    }
  }, 100);
};

// let fallingCounter = time => {
//   miliSeconds = parseInt(time * 60 * 10);
//   // msCounter = miliSeconds;
//   newTimeID = setInterval(() => {
//     if (miliSeconds > 0) {
//       msCounter--;
//       secondCounter = parseInt(miliSeconds / 10);
//       if (msCounter <= 0) {
//         msCounter = 10;
//         secondCounter--;
//         if (secondCounter <= 0) {
//           secondsCounter = 60;
//           minuteCounter--;
//           if (minuteCounter <= 0) {
//             minuteCounter = 60;
//             hourCounter--;
//           }
//         }
//       }

//       // secondCounter = parseInt(miliSeconds % 10);
//       // msCounter = parseInt(msCounter % 10);
//       // minuteCounter = parseInt(seconds / 60);
//       // hourCounter = parseInt(minuteCounter / 60);
//       // msCounter -= 1;

//       miliSeconds--;
//     } else {
//       clearInterval(newTimeID);
//     }

//     hourText.innerText = hourCounter;
//     minText.innerText = minuteCounter;
//     secondText.innerText = secondCounter;
//     MsText.innerText = msCounter;
//   }, 90);
// };

let setTimeMaunally = () => {
  let time = "str";
  while (isNaN(time)) {
    time = parseInt(prompt("Enter Time in Minutes( Valid Number) to Set"));
  }

  console.log(typeof time);
  fallingCounter(time);
};

//Event Listeners
togglerBTN.addEventListener("click", e => {
  toggleTime();
});
reset.addEventListener("click", e => {
  resetTime();
});

setTimeBTN.addEventListener("click", e => {
  resetTime();
  setTimeMaunally();
});

resetTimeBTN.addEventListener("click", e => {
  resetTime();
});


console.log("hiii")