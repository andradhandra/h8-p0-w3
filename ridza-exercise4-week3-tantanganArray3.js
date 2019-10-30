function dataHandling2 (input) {
    //Penggunaan splice
    input.splice(1, 5, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(input);
    console.log();
    
    //split tanggal
    var tanggal = input[3].split("/");
    var tgl = input[3].split("/");
    var tgl2 = input[3].split("/");
    //console.log(tanggal);

    //Perubahan bulan angka jd nama bulan
    //asumsi pebruari 30 hari
    if (tanggal[0] < 31) {
        switch (tanggal[1]) {
            case '01': tanggal[1] = 'Januari'; break;
            case '02': tanggal[1] = 'Pebruari'; break;
            case '03': tanggal[1] = 'Maret'; break;
            case '04': tanggal[1] = 'April'; break;
            case '05': tanggal[1] = 'Mei'; break;
            case '06': tanggal[1] = 'Juni'; break;
            case '07': tanggal[1] = 'Juli';  break;
            case '08': tanggal[1] = 'Agustus'; break;
            case '09': tanggal[1] = 'September'; break;
            case '10': tanggal[1] = 'Oktober'; break;
            case '11': tanggal[1] = 'November'; break;
            case '12': tanggal[1] = 'Desember'; break;
            default: console.log('Penanggalan yang Anda masukan tidak valid!'); tanggal = ''; tanggal[1] = ''; tahun = '';
        } 
    
    } else if (tanggal[0] == 31) {
      switch (tanggal[1]) {
        case '01': tanggal[1] = 'Januari'; break;
        case '03': tanggal[1] = 'Maret'; break;
        case '05': tanggal[1] = 'Mei';  break;
        case '07': tanggal[1] = 'Juli';  break;
        case '08': tanggal[1] = 'Agustus';  break;
        case '10': tanggal[1] = 'Oktober';  break;
        case '12': tanggal[1] = 'Desember';  break;
        default: console.log('Penanggalan yang Anda masukan tidak valid!'); tanggal = ''; tanggal[1] = ''; tahun = '';
      } 
    } else {
      tanggal[0] = ''; tanggal[1] = ''; tanggal[2] = '';
      console.log('Penanggalan yang Anda masukan tidak valid!');
    } console.log(tanggal[1]);
  

    //sort tanggal descending
    tgl.sort(function(a, b) {return b - a});
    console.log(tgl);

    //gabungn haisl split
    tgl2= tgl2.join('-');
    console.log(tgl2);

    //pembatasan karakter nama (dengan slice)
    console.log(input[1].slice(0,15));
}

//Test-case
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);