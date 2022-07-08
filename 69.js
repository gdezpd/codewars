function mergeArrays(arr1, arr2) {
    let res
    res = arr1.concat(arr2)
    res.sort((a, b) => a-b)

    return [...new Set(res)]

}

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))