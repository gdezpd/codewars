function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let arg = [];
    let arr = [];
        for (i=0; i<birds.length; i++) {
           let bird = birds[i];
            geese.includes(bird) ? arg.push(bird) : arr.push(bird);
        }
    return arr;
}
gooseFilter (["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])


