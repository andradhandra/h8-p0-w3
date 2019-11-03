function angkaPalindrome(num) {
    // you can only write your code here!
    
    //merubah angka jd string
    var str = `${num}`;

    //kondisi untuk input angka satuan selain 9
    if (num < 9) {
      return num + 1;
    } else {

      //kondisi jika input terdiri dari angka 9 semua 
      for (var i=0; i<str.length; i++) {
        while (str[i] === "9") {
          return num+2;
        }
      }

      //kondisi angka lainnya
      //membalik angka input sebagai perbandingan
      var balik =""
      for (var i=str.length-1; i>=0; i--) {
             balik +=  str[i];}
      
      //apabila input palindrome, tambahkan 1 pada input
      if (str === balik){
        num++;
        str = `${num}`;
      }

      //perulangan untuk menambah input hingga input menjadi palindrome
      while (str != balik) {
        num++;
        str = `${num}`;
        balik =""
        for (var i=str.length-1; i>=0; i--) {
             balik +=  str[i];}
      } 
      return num; //mengembalikan nilai palindrome
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

  console.log(angkaPalindrome(99));
  console.log(angkaPalindrome(3));
  console.log(angkaPalindrome(999999));
  console.log(angkaPalindrome(23632));