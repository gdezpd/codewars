function simpleMultiplication(number) {
    let division = number % 2;
    if (division === 0) {
        return number * 8;
    } else if (division > 0) {
        return number * 9;
    }
}
