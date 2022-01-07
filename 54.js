function findDifference(a, b) {
    let a1= a.reduce(function(c,d){
        return c*d;
    });
    let b1= b.reduce(function(e,i){
        return e*i;
    });
    return a1>b1? a1-b1 :b1-a1;
}