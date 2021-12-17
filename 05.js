function remainder(a, b){
    let result;
    if (!a || !b ) {
        return NaN;
    } else if (a > b) {
        result = (a % b);
    } else if (a < b) {
        result = b % a;
    } else if (a === b) {
        result = 0;
    }
    console.log(result)
    return result;
}
