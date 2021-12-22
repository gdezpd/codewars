function isDivisible(n, x, y) {
    const a = n%x;
    const b = n%y;
    return (a!=0 || b!=0) ? false : true;
}
