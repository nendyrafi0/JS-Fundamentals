
/* Math.random() berisi angka desimal yang memiliki range antara 0 sampai 1
contoh : 0.912 & 0.12 */
// membuat sebuah variabel yang berisi angka desimal menggunakan method Math.random()
const decimalNum = Math.random();

// membuat sebuah function yang dapat mengembalikan nilai angka bilangan bulat
function wholeNum() {
    // mengembalikan bilangan bulat dengan range angka 0 - 9
    // Math.floor untuk membulatkan angka ke bawah. Contoh : 3.9 menjadi 3
    // Math.random untuk mengisi angka desimal random
    // dikali 10 untuk menciptakan range antara 0 - 9, bukan lagi 0 sampai 1
    return Math.floor(Math.random() * 10);
}

console.log(decimalNum)
console.log(wholeNum())