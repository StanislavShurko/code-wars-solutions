/**
 * Complete the function/method (depending on the language) to return true/True
 * when its argument is an array that has the same nesting structures and same corresponding length
 * of nested arrays as the first array.
 */



Array.prototype.sameStructureAs = function (other) {
    if (this.length !== other.length) {
        console.log('not equal')
        return false
    };

    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i]) && Array.isArray(other[i])) {
            const equal = Array(...this[i]).sameStructureAs(other[i]);
            if (!equal) return false;
        } else if (!Array.isArray(this[i]) && !Array.isArray(other[i])) {
            continue;
        } else {
            console.log('not equal')
            return false;
        }
    }

    console.log('equal')

    return true
}

Array(1, [1, 1]).sameStructureAs([2, [2]]) // true
