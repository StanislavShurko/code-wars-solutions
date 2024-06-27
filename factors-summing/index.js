/**
 * Given an array of positive or negative integers I= [i1,..,in]
 *
 * you have to produce a sorted array P of the form
 *
 * [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]
 */
function sumOfDivided(list) {
    const obj = {}

    list.forEach((number) => {
        let curNum = Math.abs(number)
        let probe = 2

        let max = 0

        while (curNum !== 1) {
            if (curNum % probe !== 0) {
                probe++
            } else {
                curNum /= probe
                // Keep uniq dividers
                if (probe > max) {
                    obj[probe] ? (obj[probe] += number) : (obj[probe] = number)
                    max = probe
                }
            }
        }
    })

    return Object.entries(obj).map(([key, number]) => [Number(key), number])
}

console.log(sumOfDivided([12, 15])) // [ [2,12], [3, 27], [5, 15]];
console.log(sumOfDivided([15, 21, 24, 30, 71])) // [ [2, 54], [3, 135], [5, 90], [7, 21] ]
