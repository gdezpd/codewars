// function f(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         setTimeout(() => {
//             console.log(arr[i])
//         }, (i + 1) * 1000)
//     }
// }

// function f(arr) {
//     if (arr.length > 0) {
//         const deletedElement = arr.shift()
//         setTimeout(() => {
//             console.log(deletedElement)
//             f(arr)
//         }, 3000 )
//     }
// }


// f([1, 2, 3, 4, 5])