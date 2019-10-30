
function dataHandling (input) {
    var cetak ="";
    
    for (i=0; i<input.length; i++) {
        cetak += `Nomor ID: ${input[i][0]}\nNama lengkap: ${input[i][1]}\nTTL: ${input[i][2]}, ${input[i][3]}\nHobi: ${input[i][4]}\n\n`;
    } return cetak;
}

//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input));