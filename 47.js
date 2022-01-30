function pipeFix(numbers){
    let a = numbers[0];
    let b = Math.max.apply(null, numbers);
    let result = [];
    for (i=a; i<=b; i++) {
        result.push(i);
    }
    return result;
}

console.log(pipeFix([2,3,5,6,8,9]))

