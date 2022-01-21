function factorial(P) {
    let result=1;
    while (P) {
        result *= P--;
    }
    return result
}

function amIWilson(P) {
    return Number.isInteger((factorial((P-1))+1) / (P * P))
}
console.log(amIWilson(13))
