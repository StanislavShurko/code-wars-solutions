/**
 * Write a function named first_non_repeating_letter† that takes a string input,
 * and returns the first character that is not repeated anywhere in the string.
 */
function firstNonRepeatingLetter(s) {
    const arrayS = Array.from(s);

    return arrayS.find((letter, index) => {
        const str = s.substr(0, index) + s.substr(index + 1);
        return !str.toLowerCase().includes(letter.toLowerCase())
    }) ?? ''
}

console.log(firstNonRepeatingLetter('a')) // a
console.log(firstNonRepeatingLetter('stress')) // t
console.log(firstNonRepeatingLetter('moonmen')) // e
