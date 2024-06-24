/**
 * There is an array with some numbers. All numbers are equal except for one. Try to find it!
 *
 * It’s guaranteed that array contains at least 3 numbers.
 *
 * @param {Array<number>} arr
 * @returns {number}
 */
function findUniqNumber(arr) {
    let main = null
    let [first, secondary, third] = arr.slice(0, 3)

    first !== secondary && first !== third ? (main = secondary) : (main = first)

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] !== main) {
            return arr[i]
        }
    }

    return false
}
