"use strict";
function fetchAverage(numberList) {
    let sum = 0;
    let count = 0;
    if (numberList.length === 0) {
        return null;
    }
    for (let numbers of numberList) {
        if (typeof numbers === 'number' && !isNaN(numbers)) {
            sum += numbers;
            count++;
        }
        else {
            console.log("invalid number found", numbers);
        }
    }
    if (count === 0) {
        return null;
    }
    let average = sum / numberList.length;
    return average;
}
const averageResult = fetchAverage([1, 2, 3, 4, 'a']);
console.log("The average is:", averageResult);
//# sourceMappingURL=average.js.map