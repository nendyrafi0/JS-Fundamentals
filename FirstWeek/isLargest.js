// membuat sebuah function findLargest untuk menemukan angka terbesar dari 3 angka
// a, b, dan c sebagai parameter
function findLargest(a, b, c) {
    // membuat perulangan
    if (a >= b && a >= c) { // jika a lebih dari b dan c maka akan mengembalikan nilai a
        return a;
    } else if (b >= a && b >= c) { // jika b lebih dari a dan c maka akan mengembalikan nilai b
        return b;
    } else { // jika c lebih dari a dan b maka akan mengembalikan nilai c
        return c;
    }
}

// memasukkan input ke dalam function dan menampilkan hasil function
console.log(findLargest(3, 7, 5)) // Expected output: 7
console.log(findLargest(10, 10, 7)) // Expected output: 10
console.log(findLargest(2, 5, 10)) // Expected output: 10

  