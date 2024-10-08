// membuat sebuah function sumArray untuk menghitung jumlah keseluruhan data array
// arr sebagai parameter
function sumArray(arr) {
    let sum = 0; // inisialisasi variabel sum dengan nilai awal 0;
    // membuat perulangan yang akan berjalan ketika nilai i dibawah dari arr.length atau panjang nilai pada parameter
    for (let i = 0; i < arr.length; i++) {
        // menjumlahkan setiap index pada array setiap perulangan
        sum += arr[i];
    }
    return sum; //mengembalikam nilai sum;
}

// memasukkan input ke dalam function dan menampilkan hasil input
console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([5, -2, 7]));
  