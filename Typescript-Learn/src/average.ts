
function fetchAverage(numberList: Array<number | string>) : number | null {
    let sum : number = 0; // Initialize sum to accumulate the numbers
    let count: number = 0;  // Counter for valid numbers
     // Check if the list is empty
    if (numberList.length === 0 ) {
        return null;
    }
     // Iterate over each element in the list
    for (let numbers of numberList){
        // Check if the element is a valid number
        if(typeof numbers === 'number' && !isNaN(numbers)){
        sum += numbers // Add the number to the sum
        count ++ // Increment the count of valid numbers
        } else {
            // Log an error message for invalid numbers
            console.log ("invalid number found", numbers)
        }

    }
    // If no valid numbers were found, return null
    if (count === 0 ){
        return null 
    }
    // Calculate the average with the sum of valid numbers and their count
    let average: number = sum/numberList.length;

    return average // Return the average
}

const averageResult = fetchAverage([1,2,3,4,'a']);
console.log("The average is:" , averageResult)





