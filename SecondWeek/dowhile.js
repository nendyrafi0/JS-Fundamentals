// inisialisasi variabel myArray yang berisi array kosong
const myArray = [];
// inisialisasi variabel i dengan nilai contoh 12
let i = 7;

/* membuat perulangan Do While
yang berfungsi untuk memasukkan nilai ke dalam myArray
dan berhenti jika nilai sudah mencapai 10*/
do {
  // menambahkan nilai i ke dalam array pada myArray
  myArray.push(i);
  // nilai i akan ditambah 1, sehingga nilanya akan berubah
  i++;
// jika nilai i sama dengan 10, maka loop akan berhenti
} while (i <= 10);

// memunculkan nilai akhir dari myArray ke dalam console
console.log(myArray);
