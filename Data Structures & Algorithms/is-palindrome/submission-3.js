class Solution {
    /**
     * Check if a text is a palindrome (reads the same forward and backward).
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // toLowerCase(): Changes all text to small letters.
        const lowerCaseString = s.toLowerCase();

        // split(''): Cuts the text into a list (array) of single characters.
        const allCharacters = lowerCaseString.split('');

        // filter(): Creates a new list keeping only the items that pass the test inside.
        const filteredCharacters = allCharacters.filter((char) => {
            // Check if the character is not a space or a symbol
            const isValid = char !== " " && 
                            char !== '?' && 
                            char !== '!' && 
                            char !== '.' && 
                            char !== ',' && 
                            char !== "'" && 
                            char !== '-';
            
            // Return true to keep the character, false to remove it
            return isValid;
        });

        // reverse(): Inverts the order of the list (the last becomes the first).
        const reversedCharacters = [...filteredCharacters].reverse();

        // If the sizes are different, it is impossible to be a palindrome
        if (filteredCharacters.length !== reversedCharacters.length) {
            return false;
        }

        // every(): Checks if ALL items in the list pass the test inside.
        const allMatch = filteredCharacters.every((value, index) => {
            // Compare the normal letter with the reversed letter at the same position
            return value === reversedCharacters[index];
        });

        return allMatch;
    }

    /**
     * Another way to check if a text is a palindrome.
     * @param {string} s
     * @return {boolean}
     */
    checkPalindrome(s) {
        // replace(): Finds parts of the text and changes them. Here, we remove all spaces.
        const stringWithoutSpaces = s.replace(/\s/g, "");

        // split(''): Cuts the text into a list of letters.
        const allCharacters = stringWithoutSpaces.split('');

        // reduce(): Goes through the list item by item to build one single final result.
        const reversedString = allCharacters.reduce((reversedStr, letter) => {
            // Add the new letter before the old text to build it backwards
            return letter + reversedStr;
        }, '');

        // Compare both texts using small letters to ignore capital letters
        return reversedString.toLowerCase() === stringWithoutSpaces.toLowerCase();
    }
}

// Create a new solution object
const solution = new Solution();

// Test the first method
console.log(solution.isPalindrome('subi no onibus'));

// Test the second method
console.log(solution.checkPalindrome('anana'));

// Test the second method again
console.log(solution.checkPalindrome('Anotaram a data da maratona'));

// Test the first method again
console.log(solution.isPalindrome('Anotaram a data da maratona'));