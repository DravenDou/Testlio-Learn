function sortArray(numbers: any[]) : number[] | string{
    // Check if all elements in the array are numbers
    if(!numbers.every(function(element){
        return typeof element === 'number' // Return true if the element is a number
    })) {
        return 'the array must contain only numbers' // Return an error message if not all elements are numbers
    }
        // sorting algorithm if all elements are numbers
    for (let i = 0; i< numbers.length; i++){
        for (let j = i+1; j < numbers.length; j++){
             // Compare the current pair of elements
            if(numbers[i] > numbers [j])
                {
                    // Temporary variable to hold the current element
                    let temp : number = numbers[i]
                    // Swap the elements if they are in the wrong order
                    numbers[i] = numbers[j]
                    // Complete the swap
                    numbers[j] = temp
                }
        }
    }
    // Return the sorted array
    return numbers
}

const sortResult = sortArray([4, 2, 7, 1, 9, 3])
console.log('result:', sortResult)