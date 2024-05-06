// Function to find elements in the first array that are not in the second array
function findMissingElements(array1: number[], array2: number[]): number[] {
    // Create an object to track the elements of the second array
    let presenceObject: { [key: number]: boolean } = {};
    
    // The forEach method iterates over each element of the second array.
    // For each element, the provided function is executed.
    array2.forEach(function(element) {
      // Here, for each element of the second array, a property is added to the presenceObject.
      // The key is the element and the value is true, indicating that the element is present in the second array.
      presenceObject[element] = true;
    });
  
    // Filter the first array to find elements that are not present in the object
    // The filter function creates a new array with all the elements that pass the test implemented by the provided function.
    let missingElements = array1.filter(function(element) {
      // The provided function checks if the current element is not present in the presenceObject.
      // If the element does not have a corresponding key in presenceObject, it means it is not in the second array and the function returns true.
      return !presenceObject[element];
    });
  
    // Return the array of missing elements
    // The result is a new array that contains only the elements that were not present in the second array.
    return missingElements;
  }
  
  // Initialize two arrays with numbers
  let Array1: number[] = [1, 2, 3, 4, 5, 10];
  let Array2: number[] = [2, 3, 1, 0, 5];
  
  // Call the function and store the result
  let missingInArray2: number[] = findMissingElements(Array1, Array2);
  
  // Display the result
  // Here the result of the function is printed to the console, which are the elements of the first array that are not in the second.
  console.log('Missing elements:', missingInArray2);
