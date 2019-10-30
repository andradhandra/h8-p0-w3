function pasanganTerbesar(num) {
    // you can only write your code here!
    var str= `${num}`;
    var x = 0;
    for (i=0; i<str.length-1; i++) {
        while (x < `${str[i]}${str[i+1]}`) {
        x = `${str[i]}${str[i+1]}`;
        }
    }return x;
  } 
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99