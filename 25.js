function century(year) {
    let result;
    let division = year % 100;
    if (year < 100) {
        result = 1;
    } else if (division === 0) {
        result = Math.floor(year/100);
    } else if (division >= 1 ) {
        result = Math.floor(year/100) +1;
    }
    return result;
}
century(1601)
