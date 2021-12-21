function isDivideBy(number, a, b) {
    let result1 = number % a;
    let result2 =  number % b;
    if (result1 === 0 && result2 === 0 ) {
        console.log(true)
        return true;
    } else return false;
}
