function getRealFloor(n) {
    let result;
    if (n <=0) {
        console.log(n)
        return n;
    } else if (n <= 13) {
        console.log(n-1)
        return n-1;
    } else if (n > 13) {
        console.log(n-2)
        return n-2;
    }
}
getRealFloor(17)
