function lovefunc(flower1, flower2){
    let a = flower1 % 2;
    let b = flower2 % 2;
    return  ((a > 0 && b === 0) || (a === 0 && b > 0)) ?  true : false;
}

console.log(lovefunc())
lovefunc(3, 3)
