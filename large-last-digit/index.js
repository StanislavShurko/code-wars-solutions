/**
 * Define a function that takes in two non-negative integers 𝑎 and b
 * and returns the last decimal digit of 𝑎^b. Note that given numbers may be very large
 */

const numPattern = {
    0: [0],
    1: [1],
    2: [2, 4, 8, 6],
    3: [3, 9, 7, 1],
    4: [4, 6],
    5: [5],
    6: [6],
    7: [7, 9, 3, 1],
    8: [8, 4, 2, 6],
    9: [9, 1],
}

function lastDigit(n, m) {
    if (m == BigInt(0)) return BigInt(1)
    n = Number(n % BigInt(10))
    m = (m - BigInt(1)) % BigInt(numPattern[n].length)
    return BigInt(numPattern[n][m])
}
