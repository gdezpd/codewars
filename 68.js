function powersOfTwo(n) {
    const result = []
    for (let i = 0; i <= n; i++) {
        result.push(2**i)
    }
    return result
}

console.log(powersOfTwo(0))