function array (arr){
    const arrSplit = arr.split(',');
    const removed = arrSplit.splice(1, -1);
    console.log(removed);
}

console.log(array('1,2,3'))