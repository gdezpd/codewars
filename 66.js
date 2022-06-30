// function multiply(n, l) {
//     let a = 0;
//     let b = [];
//
//     while (a < l.length) {
//         b.push(l[a]*(n));
//         a++;
//     }
//     return b
// }
//
// console.log(multiply(2, [1, 2, 3]));




function number() {
    let a =2;
    return function () {
        a+=2
        console.log(a)
    }
}

const b = number()

b()
b()
b()
b()