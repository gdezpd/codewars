function enough(cap, on, wait) {
    return (wait+on) <= cap ? 0 : Math.abs((wait+on)-cap);
}

console.log(enough(20, 5, 5))