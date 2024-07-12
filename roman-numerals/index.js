/*
 * Write two functions that convert a roman numeral to and from an integer value.
 * Multiple roman numeral values will be tested for each function.
 */

/*
 * +--------+-------+
 * | Symbol | Value |
 * +--------+-------+
 * |    M   |  1000 |
 * |   CM   |   900 |
 * |    D   |   500 |
 * |   CD   |   400 |
 * |    C   |   100 |
 * |   XC   |    90 |
 * |    L   |    50 |
 * |   XL   |    40 |
 * |    X   |    10 |
 * |   IX   |     9 |
 * |    V   |     5 |
 * |   IV   |     4 |
 * |    I   |     1 |
 * +--------+-------+
 */

class RomanNumerals {
    static symbolValue = new Map([
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1],
    ])

    static valueSymbol = new Map([
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I'],
    ])

    static toRoman(num) {
        let ans = ''

        this.valueSymbol.forEach((romanLiteral, value) => {
            const numberClassAmount = Math.floor(num / value)

            ans += romanLiteral.repeat(numberClassAmount)
            num -= value * numberClassAmount
        })

        return ans
    }

    static fromRoman(str) {
        const romanLiterals = str.split('')

        let value = 0

        for (let i = 0; i < romanLiterals.length; i++) {
            const literalValue = this.symbolValue.get(romanLiterals[i])
            const nextLiteralValue =
                i < romanLiterals.length - 1
                    ? this.symbolValue.get(romanLiterals[i + 1])
                    : 0

            if (literalValue >= nextLiteralValue) {
                value += literalValue
            } else {
                value -= literalValue
            }
        }

        return value
    }
}

// To Roman
console.log(RomanNumerals.toRoman(1000)) // 'M'
console.log(RomanNumerals.toRoman(4)) // 'IV'
console.log(RomanNumerals.toRoman(1)) // 'I'
console.log(RomanNumerals.toRoman(1990)) // 'MCMXC'
console.log(RomanNumerals.toRoman(2008)) // 'MMVIII'
console.log(RomanNumerals.toRoman(1259)) // 'MMVIII'

// From Roman
console.log(RomanNumerals.fromRoman('XXI')) // 21
console.log(RomanNumerals.fromRoman('I')) // 1
console.log(RomanNumerals.fromRoman('IV')) // 4
console.log(RomanNumerals.fromRoman('MDCLXVI')) // 1666
console.log(RomanNumerals.fromRoman('MMVIII')) // 2008
