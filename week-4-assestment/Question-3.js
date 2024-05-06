function mergeStrings(s1, s2) {
    // Initialize an empty string to store the merged result
    var result = '';
    // Determine the length of the longer string
    var maxLength = Math.max(s1.length, s2.length);
    // Loop through each character up to the length of the longer string
    for (var i = 0; i < maxLength; i++) {
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
var output3 = mergeStrings("Hello", "Bye");
console.log(output3);
