//-----------code for photo

let position_count = 2;
function reverse_photo(){
	if (position_count%2 != 1){
		document.getElementById('photo_container').style.cssText = 
		"transform: rotateY(180deg);";
		position_count++;
	}
	else{
		document.getElementById('photo_container').style.cssText = 
		"transform: rotateY(0deg);";
		position_count++;
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
