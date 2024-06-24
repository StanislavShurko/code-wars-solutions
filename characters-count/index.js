/**
 * The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
 *
 * What if the string is empty? Then the result should be empty object literal, {}.
 * @param {string} word
 * @returns {Object}
 */
function solution(word) {
    let count = {}
    Array.from(word).forEach(function (s) {
        count[s] ? count[s]++ : (count[s] = 1)
    });
    return count;
}

solution('')
solution('ab')
solution('aba')
solution('ABC')
