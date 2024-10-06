// membuat sebuah function reverseString untuk membalikkan sebuah string dari belakanng ke depan
// str sebagai parameter
function reverseString(str) {
    // .split() untuk memisahkan setiap karakter dalam string menjadi sekumpulan array
    // .reverse() untuk membalikkan urutan array
    // .join() untuk menyatukan kembali array menjadi sebuah string
    return str.split('').reverse('').join(''); //mengembalikan nilai str versi terbalik
    
  }

// memasukkan nilai ke reverseString dan menampilkan hasil function
console.log(reverseString("Hai para sigma!"));
console.log(reverseString("Miftah Gay"));