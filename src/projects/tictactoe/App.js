import './App.scss'
document.querySelector(".startBTN").addEventListener('click',()=>{
	start();
})
document.querySelector(".CloseBTN").addEventListener('click',()=>{
hid();
})
document.querySelector(".RestartBTN").addEventListener('click',()=>{
	start();
})
let counter;
function hid() {
		document.querySelector(".Back").style.display = "none";
	}
	document.querySelector(".Back").style.display = "none";

	var sym = "x";
	let div1 = document.querySelector("#div1");
	let div2 = document.querySelector("#div2");
	let div3 = document.querySelector("#div3");
	let div4 = document.querySelector("#div4");
	let div5 = document.querySelector("#div5");
	let div6 = document.querySelector("#div6");
	let div7 = document.querySelector("#div7");
	let div8 = document.querySelector("#div8");
	let div9 = document.querySelector("#div9");

	function start() {
		document.querySelector(".Back").style.display = "none";
		document.querySelector(".container").style.display = "grid";

		var sym = "x";
		div1.innerHTML = "1";
		div2.innerHTML = "2";
		div3.innerHTML = "3";
		div4.innerHTML = "4";
		div5.innerHTML = "5";
		div6.innerHTML = "6";
		div7.innerHTML = "7";
		div8.innerHTML = "8";
		div9.innerHTML = "9";

		div1.style.fontSize = "0px";
		div2.style.fontSize = "0px";
		div3.style.fontSize = "0px";
		div4.style.fontSize = "0px";
		div5.style.fontSize = "0px";
		div6.style.fontSize = "0px";
		div7.style.fontSize = "0px";
		div8.style.fontSize = "0px";
		div9.style.fontSize = "0px";

		div1.style.pointerEvents = "auto";
		div2.style.pointerEvents = "auto";
		div3.style.pointerEvents = "auto";
		div4.style.pointerEvents = "auto";
		div5.style.pointerEvents = "auto";
		div6.style.pointerEvents = "auto";
		div7.style.pointerEvents = "auto";
		div8.style.pointerEvents = "auto";
		div9.style.pointerEvents = "auto";

		//when counter Reaches 9 no one has won
		counter = 0;
		div1.onclick = function () {
			ChkSym(div1, sym);
			counter += 1;
			if (sym == "x") {
				div1.innerHTML = sym;
				div1.style.pointerEvents = "none";
				sym = "o";
				div1.style.fontSize = "100px";
			} else {
				div1.innerHTML = sym;
				div1.style.pointerEvents = "none";
				sym = "x";
				div1.style.fontSize = "100px";
			}
			checks();
		};

		div2.onclick = function () {
			ChkSym(div2, sym);
			counter += 1;
			if (sym == "x") {
				div2.innerHTML = sym;
				div2.style.pointerEvents = "none";
				sym = "o";
				div2.style.fontSize = "100px";
			} else {
				div2.innerHTML = sym;
				div2.style.pointerEvents = "none";
				sym = "x";
				div2.style.fontSize = "100px";
			}
			checks();
		};

		div3.onclick = function () {
			ChkSym(div3, sym);
			counter += 1;
			if (sym == "x") {
				div3.innerHTML = sym;
				div3.style.pointerEvents = "none";
				sym = "o";
				div3.style.fontSize = "100px";
			} else {
				div3.innerHTML = sym;
				div3.style.pointerEvents = "none";
				sym = "x";
				div3.style.fontSize = "100px";
			}
			checks();
		};

		div4.onclick = function () {
			ChkSym(div4, sym);
			counter += 1;
			if (sym == "x") {
				div4.innerHTML = sym;
				div4.style.pointerEvents = "none";
				sym = "o";
				div4.style.fontSize = "100px";
			} else {
				div4.innerHTML = sym;
				div4.style.pointerEvents = "none";
				sym = "x";
				div4.style.fontSize = "100px";
			}
			checks();
		};

		div5.onclick = function () {
			ChkSym(div5, sym);
			counter += 1;
			if (sym == "x") {
				div5.innerHTML = sym;
				div5.style.pointerEvents = "none";
				sym = "o";
				div5.style.fontSize = "100px";
			} else {
				div5.innerHTML = sym;
				div5.style.pointerEvents = "none";
				sym = "x";
				div5.style.fontSize = "100px";
			}
			checks();
		};

		div6.onclick = function () {
			ChkSym(div6, sym);
			counter += 1;
			if (sym == "x") {
				div6.innerHTML = sym;
				div6.style.pointerEvents = "none";
				sym = "o";
				div6.style.fontSize = "100px";
			} else {
				div6.innerHTML = sym;
				div6.style.pointerEvents = "none";
				sym = "x";
				div6.style.fontSize = "100px";
			}
			checks();
		};

		div7.onclick = function () {
			ChkSym(div7, sym);
			counter += 1;
			if (sym == "x") {
				div7.innerHTML = sym;
				div7.style.pointerEvents = "none";
				sym = "o";
				div7.style.fontSize = "100px";
			} else {
				div7.innerHTML = sym;
				div7.style.pointerEvents = "none";
				sym = "x";
				div7.style.fontSize = "100px";
			}
			checks();
		};

		div8.onclick = function () {
			ChkSym(div8, sym);
			counter += 1;
			if (sym == "x") {
				div8.innerHTML = sym;
				div8.style.pointerEvents = "none";
				sym = "o";
				div8.style.fontSize = "100px";
			} else {
				div8.innerHTML = sym;
				div8.style.pointerEvents = "none";
				sym = "x";
				div8.style.fontSize = "100px";
			}
			checks();
		};

		div9.onclick = function () {
			ChkSym(div9, sym);
			counter += 1;
			if (sym == "x") {
				div9.innerHTML = sym;
				div9.style.pointerEvents = "none";
				sym = "o";
				div9.style.fontSize = "100px";
			} else {
				div9.innerHTML = sym;
				div9.style.pointerEvents = "none";
				sym = "x";
				div9.style.fontSize = "100px";
			}
			checks();
		};
	}


//ChkSym is for giving white color to O and blue to X
	function ChkSym(elm, symbol) {
		if (symbol == "x") {
			elm.style.color = "rgb(41, 214, 7)";
		} else {
			elm.style.color = "white";
		}
	}

	var cond = false;

	function checks() {
		//checks that if any one wins or not
		if (counter > 8) {
			document.querySelector(".innerdiv").innerHTML = "It's a Draw!!";
			document.querySelector(".Back").style.display = "flex";
		}

		if (div1.innerHTML == div2.innerHTML && div2.innerHTML == div3.innerHTML) {
			document.querySelector(".innerdiv").innerHTML =
				div1.innerHTML + " player won";
			document.querySelector(".Back").style.display = "flex";
			window.cond = true;
		} else if (
			div4.innerHTML == div5.innerHTML &&
			div5.innerHTML == div6.innerHTML
		) {
			document.querySelector(".innerdiv").innerHTML =
				div4.innerHTML + " player won";
			document.querySelector(".Back").style.display = "flex";
			window.cond = true;
		} else if (
			div7.innerHTML == div8.innerHTML &&
			div8.innerHTML == div9.innerHTML
		) {
			document.querySelector(".innerdiv").innerHTML =
				div7.innerHTML + " player won";
			document.querySelector(".Back").style.display = "flex";
			window.cond = true;
		} else if (
			div1.innerHTML == div4.innerHTML &&
			div4.innerHTML == div7.innerHTML
		) {
			document.querySelector(".innerdiv").innerHTML =
				div1.innerHTML + " player won";
			document.querySelector(".Back").style.display = "flex";
			window.cond = true;
		} else if (
			div2.innerHTML == div5.innerHTML &&
			div8.innerHTML == div5.innerHTML
		) {
			document.querySelector(".innerdiv").innerHTML =
				div2.innerHTML + " player won";
			document.querySelector(".Back").style.display = "flex";
			window.cond = true;
		} else if (
			div3.innerHTML == div6.innerHTML &&
			div6.innerHTML == div9.innerHTML
		) {
			document.querySelector(".innerdiv").innerHTML =
				div3.innerHTML + " player won";
			document.querySelector(".Back").style.display = "flex";
			window.cond = true;
		} else if (
			div1.innerHTML == div5.innerHTML &&
			div5.innerHTML == div9.innerHTML
		) {
			document.querySelector(".innerdiv").innerHTML =
				div1.innerHTML + " player won";
			document.querySelector(".Back").style.display = "flex";
			window.cond = true;
		} else if (
			div3.innerHTML == div5.innerHTML &&
			div5.innerHTML == div7.innerHTML
		) {
			document.querySelector(".innerdiv").innerHTML =
				div3.innerHTML + " player won";
			document.querySelector(".Back").style.display = "flex";
			window.cond = true;
		}
	}