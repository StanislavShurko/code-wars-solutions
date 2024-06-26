function zeros(n) {
    const kMax = Math.trunc(Math.log(n) / Math.log(5));
    let ans = 0;

    for (let i = 1; i <= kMax; i++) {
        ans += Math.trunc(n / Math.pow(5, i));
    }

    return ans;
}

zeros(20) // 4
zeros(30) // 7
zeros(80) // 19
zeros(105) // 25
zeros(124) // 28
zeros(125) // 31
zeros(149) // 35
