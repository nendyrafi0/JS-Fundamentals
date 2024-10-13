/* Membuat sebuah function untuk melakukan counting secara rekursif
sampai ke batas tertentu dengan x sebagai parameternya */
function counter(x) {
    // inisialisasi variabel countNum dengan nilai parameter x
    let countNum = x;
    // inisialisasi variabel max dengan nilai contoh 50
    let max = 50;

    /* mengembalikan sebuah closure function 
    untuk menambahkan nilai ke variabel countNum
    atau mengembalikan suatu pernyataan jika countNum
    sudah mencapai batas*/
    return function() {
        // jika variabel countNum lebih dari variabel max
        if (countNum > max) {
            // maka kembalikan nilai seperti dibawah ini dan menghentikan loop
            return "counter has reached its limit";
        // jika variabel countNum dibawah atau sama dengan variabel max
        } else {
            // maka countNum akan ditambah 1 lalu akan kembali melakukan loop
            return countNum++;
        }
    }
}

// menginisialisasikan sebuah variabel myCounter dengan nilai pemanggilan function counter dengan parameter 40
const myCounter = counter(40); 
// memunculkan variabel myCounter kedalam console
console.log(myCounter())