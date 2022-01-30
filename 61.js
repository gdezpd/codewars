const quarterOf = (month) => {
    // Your code here
    const arrayMonth = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
    for (let i = 0; i < arrayMonth.length; i++) {
        if (arrayMonth[i].includes(month) === true) {
            return i+1
        }

    }

}
console.log(quarterOf(7))