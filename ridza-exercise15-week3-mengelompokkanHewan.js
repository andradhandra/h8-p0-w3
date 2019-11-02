function groupAnimals(animals) {
    // you can only write your code here!

    //Asumsi semua hurup lowercase
    var hasil=[];

    //pengelompokan hewan berdasarkan huruf pertamanya
    for (var i=0; i<animals.length; i++) {
      var kelompok = [];
      for (var j=0; j<animals.length; j++) {
        if (animals[i] === animals[j] || animals[i][0] === animals[j][0]) {
          kelompok.push(animals[j]);
        }
      } 
      kelompok.sort(); //sorting isi kelompok
      
      //pengecekan jika array hasil masih kosong (perulangan pertama)
      if (hasil.length === 0) 
        {hasil.push(kelompok);} 

      //pengecekan agar tidak ada kelompok yang sama terinput dua kali
      for (var x=0; x<hasil.length; x++) {
        if (kelompok[0] === hasil[x][0]) 
          {kelompok = [];} //apabila terdapat array yang sama dengan hasil, kelompok menjadi array kosong
      }
      
      //pengecekan untuk mencegah array kosong masuk ke hasil
      if (kelompok.length != 0) 
        {hasil.push(kelompok);}
    } 
    hasil.sort(); //sorting keseluruhan hasil
    return hasil;
}
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
  console.log(groupAnimals(['capung', 'angsa', 'kuda', 'anoa', 'kancil', 'unta', 'cendrawasih', 'bekicot', 'camar', 'cumi-cumi', 'domba', 'komodo', 'kumbang' ]));
