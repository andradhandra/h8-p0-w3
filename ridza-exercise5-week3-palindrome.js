function palindrome(kata) {
    // you can only write your code here!
    var index = kata.length-1;
    var result;

    for (var i= 0; i < kata.length/2; i++ ) {
        result = kata[i] === kata[index - i];
        if (result === false) {i = kata.length/2};
    }
    return result;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
  console.log(palindrome('tebet'));
  console.log(palindrome('makasi'));