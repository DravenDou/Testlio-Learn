"use strict";
function sortArray(numbers) {
    if (!numbers.every(function (element) {
        return typeof element === 'number';
    })) {
        return 'the array must contain only numbers';
    }
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return numbers;
}
const sortResult = sortArray([4, 2, 7, 1, 9, 3]);
console.log('result:', sortResult);
//# sourceMappingURL=orderlist.js.map