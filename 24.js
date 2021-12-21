function DNAtoRNA(dna) {
    let output = "";
    for (i=0; i<dna.length; i++) {
        let symbol = dna[i];
        if (symbol === "T") {
            output +="U";
        } else if (symbol === "U") {
            output += "T";
        } else output += symbol;
    }
    console.log(output)
    return output;
}
DNAtoRNA("TTTUIDVHFUT")
