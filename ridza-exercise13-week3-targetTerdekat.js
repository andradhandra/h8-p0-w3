function targetTerdekat(arr) {
    // you can only write your code here!


    //Diasumsikan hanya terdapaat satu 'o' dan tidak ada 'o' diantara dua 'x'
    
    //mencatat nilai index 'o' dan 'x'
    var target;
    var mark = [];
    for (i=0; i<arr.length; i++) {
        if (arr[i] === "o") {
            target = i;
        } else if (arr[i] === "x") {
            mark.push(i);
        }
    } 

    //menentukan jarak
    if (mark[0] == null) {
        return 0;
    } 
    else if (target < mark[mark.length-1]) {
        return (mark[0] - target);
    } else {
        return (target - mark[mark.length-1])
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2