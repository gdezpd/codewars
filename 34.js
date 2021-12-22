function makeNegative(num) {
    const result = Math.sign(num);
    return result > 0 ? num*(-1) : num;
}
