function add (a, b) {
	return a + b
}

function subtract (a, b) {
	return a - b
}

function sum (obj) {
	const sum = obj.reduce((total, number) => {
		return total + number;
	}, 0);
}

function multiply (obj) {
	const product = obj.reduce((total, number) => {
		return total * number;
	}, 1);
}

function power(a, b) {
	return a ** b
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}