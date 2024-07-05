/**
 * Greed is a dice game played with five six-sided dice.
 * Your mission, should you choose to accept it, is to score a throw according to these rules.
 * You will always be given an array with five six-sided dice values.
 */
function score(dices) {
    const mapedDice = new Map()

    dices.forEach((dice) => mapedDice.set(dice, (mapedDice.get(dice) ?? 0) + 1))

    let ans = 0

    mapedDice.forEach((value, key) => {
        let dicesSideAmount = value

        if (dicesSideAmount >= 3) {
            if (key === 1) {
                ans += 1000
            } else {
                ans += key * 100
            }
            dicesSideAmount -= 3
        }

        if (key === 1) {
            ans += 100 * dicesSideAmount
        } else if (key === 5) {
            ans += 50 * dicesSideAmount
        }
    })

    return ans
}

console.log(score([2, 3, 4, 6, 2]))
