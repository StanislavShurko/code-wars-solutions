/**
 * The marketing team is spending way too much time typing in hashtags.
 *
 * Let's help them with our own Hashtag Generator!
 */
function generateHashtag(str) {
    const cleanStr = str[0] === '#' ? str.slice(1) : str;
    const words = cleanStr.split(/\s+/);

    if (words.length === 0) return false;

    const final = words.reduce((acc, word) => word ? acc += word[0].toUpperCase() + word.slice(1) : acc, '')

    if (!final || final.length > 139) return false;

    return '#' + final;
}

console.log(generateHashtag('')) // false
console.log(generateHashtag(' ')) // false
console.log(generateHashtag(' hello   world')) // #HelloWorld
console.log(
    generateHashtag(
        'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
    )
) // false
console.log(generateHashtag('#codeWars')) // #CodeWars
