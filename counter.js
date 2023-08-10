//Optimal way in one function
let output = document.querySelector("#output"); //considering the whole div
let addAndSubtract = document.querySelector("#addAndSubtract");

addAndSubtract.addEventListener("click", counter);

let value = 0;
function counter(e) {
	let button = e.target.id;
	//console.log(button);

	if(button == "add") {
		let result = Number(output.innerText) + 1;
		output.innerText = result; 
	}

	if(button == "subtract") {
		let result = Number(output.innerText) - 1;
		if(result < 0) {
			result = 0;
		}
		output.innerText = result;
	}
}


//Another way - detailed 
// let add = document.querySelector("#add");
// add.addEventListener("click", function(){ //whenever add button is clicked, this will execute
// 	let output = document.querySelector("#output"); //getting value from output 
// 	let result = Number(output.innerText) + 1; //innerText is used to get the value from that id. The output value is string convert to number
// 	output.innerText = result; 
// })

// let subtract = document.querySelector("#subtract");
// subtract.addEventListener("click", function(){
// 	let output = document.querySelector("#output");
// 	let result = Number(output.innerText) - 1;
// 	if(result < 0) { //not accepting negative values
// 		result = 0;
// 	}
// 	output.innerText = result;
// })
//console.log(add, subtract);