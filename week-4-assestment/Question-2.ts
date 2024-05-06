function removeDuplicates(input: string): string {
    // Initialize an empty string to store the result
    let result: string = '';
    // Creating an object to keep track of seen characters
    let seen: { [char: string]: boolean } = {};
  
    // Loop through each character in the input string
    for (let i: number = 0; i < input.length; i++) {
      // Get the current character from the input string
      let char: string = input.charAt(i);
      // If the character has not been seen before, add it to the result
      if (!seen[char]) {
        seen[char] = true;
        result += char;
      }
    }
  
    // Return the resulting string without duplicates
    return result;
  }
  
  // Example usage of the function
  let output: string = removeDuplicates("test");
  console.log(output); 
  