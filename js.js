
let nums = prompt("введите числа: ");

let prom = [...nums];
nums = prom.map((elem) => Number(elem));

function func() {
	let sum = 0;
	
	for (let num of nums) {
		sum += num;
	}
	
	return sum;
};

let result = func(prom);
console.log(result); 
