function abbrevName(name){
    let initials;
    let nameList = name.split(' ', 2);
    initials = (nameList[0][0] + "." + nameList[1][0]).toUpperCase();
    console.log(initials)
    return initials;
}
abbrevName("GFdtlkfjk hubvuev")
