function remove (string) {
return string.replace(/!{1,50}$/, '')
}

console.log(remove("Hi! Hi!!!!!"))