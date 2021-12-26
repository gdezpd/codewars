function squareSum(numbers){
    let result = 0;
    for ( i = 0; i<numbers.length; i++) {
        let a = numbers[i] * numbers[i]
        result +=a;
    }
    return result;
}