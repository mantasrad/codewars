function countPositivesSumNegatives(input) {
  let newArray = [];
	let positiveEl = 0;
	let negativeEl = 0;
input.forEach(function(el) {
	if (el > 0) {
		positiveEl++
	} else if (el < 0) {
		negativeEl += el
	} else {
		newArray = []
	}
}
)
newArray.push(positiveEl);
newArray.push(negativeEl);

return newArray;
}