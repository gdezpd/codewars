const countSheep = function (num) {
    if (num === 0) {
        return ""
    } else {
        const result = [];
        for (let i = 0; i < num; i++) {
            result.push(i+1 + " sheep...")
        }
        return result.join('')
    }
}