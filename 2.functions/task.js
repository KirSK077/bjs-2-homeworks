function getArrayParams(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let avg = +(arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2);
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		return arr.reduce((a, b) => a + b, 0);
	}
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		return Math.max(...arr) - Math.min(...arr);
	}
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		let sumEvenElement = arr.filter(el => el % 2 === 0).reduce((a, b) => a + b, 0);
		let sumOddElement = arr.filter(el => el % 2 !== 0).reduce((a, b) => a + b, 0);
		return sumEvenElement - sumOddElement;
	}
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		let sumEvenElement = arr.filter(el => el % 2 === 0).reduce((a, b) => a + b, 0);
		let countEvenElement = arr.filter(el => el % 2 === 0).length;
		return +(sumEvenElement / countEvenElement).toFixed(3);
	}
}

function makeWork(arrOfArr, func) {
	return Math.max(...arrOfArr.map(el => func(...el)));
}
