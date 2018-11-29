function add (a, b) {
	return a + b
}

function subtract (a, b) {
	return a - b
}

function sum (array) {
	return array.reduce((current, total) => total + current , 0);
}

function multiply (array) {
	return array.reduce((total, current) => total * current, 1);
}

function power(a, b) {
	return a ** b
}

function factorial(a) {
	let fact = 1, i=1;
	while (i < a+1) {
		fact *= i;
		i++;
	}
	return fact
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
