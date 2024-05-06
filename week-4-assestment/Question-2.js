function removeDuplicates(input) {
    // Initialize an empty string to store the result
    var result = '';
    // Creating an object to keep track of seen characters
    var seen = {};
    // Loop through each character in the input string
    for (var i = 0; i < input.length; i++) {
        // Get the current character from the input string
        var char = input.charAt(i);
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
var output = removeDuplicates("test");
console.log(output);
