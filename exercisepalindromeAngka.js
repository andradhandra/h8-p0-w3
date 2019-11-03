function angkaPalindrome(num) {
    // you can only write your code here!

    //merubah input menjadi string agar bisa dihitung jumlah digitnya
    var str = `${num}`;

    //mengecek apakah input satuan atau bukan
    if (num < 9) {
        return (num + 1);
    } else {

        //mengecek apakah input terdiri dari angka 9 semua atau tidak
        var result;
        var index = str.length-1;
        for (var i= 0; i< str.length/2; i++) {
            while (str[i] != "9" || str[index - i] != "9") {

                //mengecek apakah input palindrome atau bukan
                var kiri = str.slice(0,str.length/2);
                var kanan = str.slice(str.length/2, str.length)
                for (var j= 0; j< str.length/2; j++) {
                    while (str[j] != str[index - j]) {
                        
                        //jika bukan polindrome
                        if (kiri > kanan) {}
                    }
                }
                
            } 
            } return num+2; //mencetak palindrome jika input terdiri dari angka 9 semua
        }
    

  }
  
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(9)); // 11
console.log(angkaPalindrome(999)); // 121
console.log(angkaPalindrome(99999)); // 181
console.log(angkaPalindrome(999999999999999)); // 1001