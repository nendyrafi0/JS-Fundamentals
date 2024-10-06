// membuat sebuah function areNumbersEqual untuk mengecek apakah kedua angka sama nilainya atau tidak
// a dan b sebagai parameter
function areNumbersEqual(a, b) {
    if (a === b) { // jika a sama dengan b secara strict maka akan mengembalikan nilai true
        return true;
    } else { // jika a tidak sama dengan b maka akan mengembalikan nilai false
        return false;
    }
  }
  
  // memasukkan input ke dalam function dan menampilkan hasil function
  console.log(areNumbersEqual(3, 3));
  console.log(areNumbersEqual(5, 3));