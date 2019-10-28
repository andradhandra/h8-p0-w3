function balikString(kata) {
    var atak = "";
    for (i=kata.length-1; i>=0; i--) {
        atak +=  kata[i];
    } 
    return atak;
}

//test case
console.log(balikString("kasur"));
console.log(balikString("rusak"));
console.log(balikString("kasur rusak"));
console.log(balikString("tebet"));
console.log(balikString("hello world!"));