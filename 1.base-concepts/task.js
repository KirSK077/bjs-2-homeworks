"use strict"

function solveEquation(a, b, c) {
	let arr = [];

	let d = b ** 2 - 4 * a * c;

	if (d < 0) {
		return arr;
	} else if (d === 0) {
		let x = -b / (2 * a);
		arr = [x];
	} else {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr = [x1, x2];
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let bodyPayment = amount - contribution;
	let percentMonth = percent / (12 * 100);
	let paymentMonth = bodyPayment * (percentMonth + (percentMonth / ((Math.pow(1 + percentMonth, countMonths)) - 1)));
	return +(paymentMonth * countMonths).toFixed(2);
}