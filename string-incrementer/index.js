/**
 * Your job is to write a function which increments a string, to create a new string.
 * If the string already ends with a number, the number should be incremented by 1.
 * If the string does not end with a number. the number 1 should be appended to the new string.
 */

function incrementString(word) {
    let number = "";
    for (let i = word.length - 1; i >= 0; i--) {
        const digit = Number(word[i])
        if (!isNaN(digit)) {
            number = digit + number;
        } else {
            break;
        }
    }

    let ans = "";

    if (number === "") {
        ans = "1"
    } else {
        ans = (Number(number) + 1).toString();
    }

    return word.substring(0, word.length - number.length) + number.substring(0, number.length - ans.length) + ans;
}

incrementString("foobar000") // foobar001
incrementString("foobar00999") // foobar01000
incrementString("foobar999") // foobar1000
incrementString("foobar001") // foobar002
incrementString("fo99obar99") // fo99obar100