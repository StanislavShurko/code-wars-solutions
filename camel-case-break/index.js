function solution(word) {
    return Array.from(word).reduce(
        (acc, letter) =>
            letter === letter.toUpperCase() ? acc + ' ' + letter : acc + letter,
        ''
    )
}

solution('camelCasing')
solution('camelCasingTest')
solution('')
