function sumOfDifferences(arr) {
    if(arr.length === 0 || arr.length === 1 ) {
        return 0
    } else {
        const sortArr =  arr.sort(function(a, b) {
            return b - a;
        });
        const resultArr = []
        for (let i = 0; i < sortArr.length; i++) {
           if ( i === 0){
               resultArr.push(sortArr[0] - sortArr[1])
           } else if (i === sortArr.length-1 ) {
               break
           } else {
                resultArr.push(sortArr[i] - sortArr[i+1])
            }
        }
        const result =  resultArr.reduce((previousValue, currentValue) => previousValue + currentValue)
        return result
    }
}
console.log(sumOfDifferences([-3, -2, -1]),)