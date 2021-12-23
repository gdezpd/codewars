function expressionMatter(a, b, c) {
    let res1 = a * (b + c);
    let res2 = a * b * c;
    let res3 = a + b * c;
    let res4 = (a + b) * c;
    let res5 = a * b + c;
    let res6 = a + b + c;
    let result = Math.max.apply(null, [res1, res2, res3, res4, res5, res6]);
    return result;
}
