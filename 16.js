function correct(string){
    let output = '';
    for (i = 0; i < string.length; i++) {
        let simvol = string[i];
        if (simvol === "5") {
            output += "S";
        } else if (simvol === "0") {
            output += "O";
        } else if (simvol === "1") {
            output += "I";
        } else output += simvol
    }
    console.log(output);
    return output;
}
correct("51NGAP0RE");
