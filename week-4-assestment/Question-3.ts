function mergeStrings(s1: string, s2: string): string {
    // Initialize an empty string to store the merged result
    let result: string = '';
    // Determine the length of the longer string
    let maxLength: number = Math.max(s1.length, s2.length);
  
    // Loop through each character up to the length of the longer string
    for (let i: number = 0; i < maxLength; i++) {
      // If the current index is within the bounds of s1, add the character to result
      if (i < s1.length) {
        result += s1.charAt(i);
      }
      // If the current index is within the bounds of s2, add the character to result
      if (i < s2.length) {
        result += s2.charAt(i);
      }
    }
  
    // Return the merged string
    return result;
  }
  
  // Example usage of the function
  let output3: string = mergeStrings("Hello", "Bye");
  console.log(output3); 
  