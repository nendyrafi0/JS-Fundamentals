/* membuat function fact dengan x sebagai parameter
function ini berfungsi untuk menghitung nilai faktorial*/
function fact(x) {
    // jika nilai x sama dengan 1
    if (x == 1) {
        // maka kembalikan nilai 1
        return 1;
    // jika nilai x lebih dari 1
    } else {
        /* maka kembalikan nilai x dikali dengan function x yang dikurangi 1
        menghasilkan sebuah loop karena memanggil function berulang kali
        sampai nilainya menjadi x menjadi 1*/
        return x * fact(x-1);
    }
}

// memasukkan nilai ke dalam function dan menampilkannya ke console
console.log(fact(6));

