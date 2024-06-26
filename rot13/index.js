/**
 * ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
 * ROT13 is an example of the Caesar cipher.
 *
 * Create a function that takes a string and returns the string ciphered with Rot13.
 * If there are numbers or special characters included in the string, they should be returned as they are. 
 * Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
 */
function rot13(message) {
    const cipherDepth = 13;
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    return Array.from(message).reduce((acc, messageLetter) => {
        const uppercaseLetter = messageLetter === messageLetter.toUpperCase();
        const letter = messageLetter.toLowerCase();

        const alphabetPosition = alphabet.indexOf(letter);

        if (alphabetPosition === -1) {
            return acc + letter;
        }

        const movedLetterCode = alphabetPosition + cipherDepth;

        let ansLetter = ""

        if (alphabet.length <= movedLetterCode) {
            ansLetter = alphabet[movedLetterCode - alphabet.length]
        } else {
            ansLetter = alphabet[movedLetterCode]
        }

        if (uppercaseLetter) {
            return acc + ansLetter.toUpperCase()
        }

        return acc + ansLetter
    }, "");
}

// rot13('test is cool'); // grfg
// rot13('Test'); // grfg
rot13('abcdefghijklmnopqrstuvwxyz') // nopqrstuvwxyzabcdefghijklm