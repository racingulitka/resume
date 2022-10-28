function openBlock(){
	if(getComputedStyle(stretchBox).height == "359px"){
		document.getElementById("stretchBox").style.cssText = "height:100%;";
	}
	else{
		document.getElementById("stretchBox").style.cssText = "height:359px;";
	}
}
//----------------code for blink button

function pointerIn1(){
	document.getElementById('button1').style.cssText =
	 'transition:.3s; transform:translate(400px,0px) skew(-30deg);';
}

function pointerOut1(){
	document.getElementById('button1').style.cssText =
	 'transform:translate(-400px,0px) skew(30deg);';
}

function pointerIn2(){
	document.getElementById('button2').style.cssText =
	 'transition:.3s; transform:translate(400px,0px) skew(-30deg);';
}

function pointerOut2(){
	document.getElementById('button2').style.cssText =
	 'transform:translate(-400px,0px) skew(30deg);';
}

function pointerIn3(){
	document.getElementById('button3').style.cssText =
	 'transition:.3s; transform:translate(400px,0px) skew(-30deg);';
}

function pointerOut3(){
	document.getElementById('button3').style.cssText =
	 'transform:translate(-400px,0px) skew(30deg);';
}

function pointerIn4(){
	document.getElementById('button4').style.cssText =
	 'transition:.3s; transform:translate(400px,0px) skew(-30deg);';
}

function pointerOut4(){
	document.getElementById('button4').style.cssText =
	 'transform:translate(-400px,0px) skew(30deg);';
}

function pointerIn5(){
	document.getElementById('button5').style.cssText =
	 'transition:.3s; transform:translate(400px,0px) skew(-30deg);';
}

function pointerOut5(){
	document.getElementById('button5').style.cssText =
	 'transform:translate(-400px,0px) skew(30deg);';
}

function pointerIn6(){
	document.getElementById('button6').style.cssText =
	 'transition:.3s; transform:translate(400px,0px) skew(-30deg);';
}

function pointerOut6(){
	document.getElementById('button6').style.cssText =
	 'transform:translate(-400px,0px) skew(30deg);';
}
