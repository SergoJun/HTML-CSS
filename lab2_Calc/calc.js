Math.radians = function(degrees) {
	return degrees * Math.PI / 180;
}

Math.degrees = function(radians) {
	return radians * 180 / Math.PI;
}


function ChangeType(data){
	let div1 = document.querySelector('.input1');
	let div2 = document.querySelector('.input2');
	if(data.CalcSide.checked) {
		document.getElementById("input1").style.display = "block";
		document.getElementById("input2").style.display = "none";
	}
	
	if(data.CalcYgol.checked) {
		document.getElementById("input1").style.display = "none";
		document.getElementById("input2").style.display = "block";
	}
	return true;
}

function Clear(data){
	let outputHTML = document.getElementById('output');
	outputHTML.innerText = '';	
}


function Calculate1(data){
	let b = +data.input11.value;
	let h = +data.input12.value;
	let a = +data.input13.value;
	
	
	let flag = true;
	if (isNaN(b) || b <= 0) {
		const elem = document.getElementById("input11");
		elem.style.borderColor = "red";
		flag = false;
	} else {
		const elem = document.getElementById("input11");
		elem.style.borderColor = "black";
	}
	if(isNaN(h) || h <= 0){
		const elem = document.getElementById("input12");
		elem.style.borderColor = "red";
		flag = false;
	} else {
		const elem = document.getElementById("input12");
		elem.style.borderColor = "black";
	}
	if(isNaN(a) || a <= 0 || a>=90){
		const elem = document.getElementById("input13");
		elem.style.borderColor = "red";
		flag = false;
	} else {
		const elem = document.getElementById("input13");
		elem.style.borderColor = "black";
	}
	
	if (!(data.task11.checked || data.task12.checked || data.task13.checked	)) {
		const elem = document.getElementById("found1");
		elem.style.color = "red";
		flag = false;
	} else {
		const elem = document.getElementById("found1");
		elem.style.color = "black";
	}
	
	if (flag) {
	
	let outputHTML = document.getElementById('output');
	let output = document.createElement('p');
	output.innerHTML = "---------------";

	let d = h / Math.sin(Math.radians(a));
	let P = 2 * (d + h / Math.sin(Math.radians(a)));
	let diagonal1 = Math.sqrt(b * b + d * d + 2 * d * b * Math.cos(Math.radians(a)));
	let diagonal2 = Math.sqrt(b * b + d * d - 2 * d * b * Math.cos(Math.radians(a)));
	let ygol1 = Math.degrees(Math.acos((diagonal1 * diagonal1 + diagonal2 * diagonal2 - 4 * b * b) / (4 * diagonal1 * diagonal2)));
	let ygol2 = Math.degrees(Math.acos((diagonal1 * diagonal1 + diagonal2 * diagonal2 - 4 * d * d) / (4 * diagonal1 * diagonal2)));

	
	diagonal1 = Math.round(diagonal1 * 1000) / 1000;
	diagonal2 = Math.round(diagonal2 * 1000) / 1000;
	ygol1 = Math.round(ygol1 * 1000) / 1000;
	ygol2 = Math.round(ygol2 * 1000) / 1000;
	P = Math.round(P*1000)/1000;
	
	if (data.task11.checked) {
		let newElement1 = document.createElement('p');
		newElement1.innerHTML = "ygol1 = " + ygol1;
		output.appendChild(newElement1);
		let newElement2 = document.createElement('p');
		newElement2.innerHTML = "ygol2 = " + ygol2;
		output.appendChild(newElement2);
	}
	if (data.task12.checked) {
		let newElement3 = document.createElement('p');
		newElement3.innerHTML = "diagonal1 = " + diagonal1;
		output.appendChild(newElement3);
		let newElement4 = document.createElement('p');
		newElement4.innerHTML = "diagonal2 = " + diagonal2;
		output.appendChild(newElement4);
	}
	if (data.task13.checked) {
		let newElement5 = document.createElement('p');
		newElement5.innerHTML = "P = " + P;
		output.appendChild(newElement5);
	}
	outputHTML.appendChild(output);
	return true;
} else {return false;}	

}

function Calculate2(data){
	let b = +data.input21.value;
	let d = +data.input22.value;
	let h = +data.input23.value;
	
	let flag = true;
	if (isNaN(b) || b <= 0) {
		const elem = document.getElementById("input21");
		elem.style.borderColor = "red";
		flag = false;
	} else {
		const elem = document.getElementById("input21");
		elem.style.borderColor = "black";
	}
	if(isNaN(d) || d <= 0){
		const elem = document.getElementById("input22");
		elem.style.borderColor = "red";
		flag = false;
	} else {
		const elem = document.getElementById("input22");
		elem.style.borderColor = "black";
	}
	if(isNaN(h) || h <= 0){
		const elem = document.getElementById("input23");
		elem.style.borderColor = "red";
		flag = false;
	} else {
		const elem = document.getElementById("input23");
		elem.style.borderColor = "black";
	}
	
	if (!(data.task21.checked || data.task22.checked || data.task23.checked )){
		const elem = document.getElementById("found2");
		elem.style.color = "red";
		flag = false;
	} else {
		const elem = document.getElementById("found2");
		elem.style.color = "black";
	}
	
	if (flag) {
	
	let P = 2 * (b + d);
	let a = Math.degrees(Math.acos(h / d));
	let diagonal1 = Math.sqrt(b * b + d * d + 2 * d * b * Math.cos(Math.radians(a)));
	let diagonal2 = Math.sqrt(b * b + d * d - 2 * d * b * Math.cos(Math.radians(a)));
	let ygol1 = Math.degrees(Math.acos((diagonal1 * diagonal1 + diagonal2 * diagonal2 - 4 * b * b) / (4 * diagonal1 * diagonal2)));
	let ygol2 = Math.degrees(Math.acos((diagonal1 * diagonal1 + diagonal2 * diagonal2 - 4 * d * d) / (4 * diagonal1 * diagonal2)));
	
	diagonal1 = Math.round(diagonal1 * 1000) / 1000;
	diagonal2 = Math.round(diagonal2 * 1000) / 1000;
	ygol1 = Math.round(ygol1 * 1000) / 1000;
	ygol2 = Math.round(ygol2 * 1000) / 1000;
	P = Math.round(P*1000)/1000;

	
	let outputHTML = document.getElementById('output');
	let output = document.createElement('p');
	output.innerHTML = "-------------";
	if (data.task11.checked) {
		let newElement1 = document.createElement('p');
		newElement1.innerHTML = "ygol1 = " + ygol1;
		output.appendChild(newElement1);
		let newElement2 = document.createElement('p');
		newElement2.innerHTML = "ygol2 = " + ygol2;
		output.appendChild(newElement2);
	}
	if (data.task12.checked) {
		let newElement3 = document.createElement('p');
		newElement3.innerHTML = "diagonal1 = " + diagonal1;
		output.appendChild(newElement3);
		let newElement4 = document.createElement('p');
		newElement4.innerHTML = "diagonal2 = " + diagonal2;
		output.appendChild(newElement4);
	}
	if (data.task13.checked) {
		let newElement5 = document.createElement('p');
		newElement5.innerHTML = "P = " + P;
		output.appendChild(newElement5);
	}
	outputHTML.appendChild(output);
	return true;
	}

}