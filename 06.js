function countSheeps(arrayOfSheep) {
    let result = 0;
    for  (i=0; i<arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            result++;
        }
    }
    console.log(result)
    return result;
}
