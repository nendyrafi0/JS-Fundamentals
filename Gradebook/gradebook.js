//students average scores
//membuat sebuah fungsi getAverage untuk mencari rata-rata nilai
// score sebagai parameter
function getAverage(scores) {
    let sum = 0; // menginisialisasi variabel sum

    // membuat perulangan untuk menghitung semua nilai menjadi satu berdasarkan banyaknya nilai
    // sebuah varibael bernama i bernilai 0, jika nilai i dibawah jumlah data nilai, maka nilai i akan terus bertambah 1, sampai nilainya setara dengan jumlah data nilai
    for (let i = 0; i < scores.length; i++) { //scores.length = 10
        //setiap perulangan, variabel sum dengan nilai awal 0 akan ditambah sesuai dengan setiap index atau setiap data yang ada di nilai
        sum += scores[i]; // menghasilkan nilai 717 atau 854
    }
    // membuat variabel average yang akan membagi jumlah keseluruhan nilai, dibagi dengan jumlah data nilai
    const average = sum / scores.length; // hasilnya adalah 71.7 dan 85.4
    return average; // mengembalikan nilai variabel average sebagai output agar dapat ditampilkan
}

// memasukan input kedalam function getAverage dan console.log untuk menampilkan hasil function
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
//=================================================================

//students grade
// membuat sebuah function getGrade untuk mengategorikan nilai
// score sebagai parameter
function getGrade(score) {
    let grade; //inisiaslisasi variabel grade dengan nilai kosong
    // membuat percabangan
    if (score == 100) { // jika nilai = 100 maka nilai A++
        return grade = "A++";
    } else if (score >= 90) { // jika nilai 90 keatas maka nilai A
        return grade = "A";
    } else if (score >= 80) { // jika nilai 80 keatas maka nilai B
        return grade = "B";
    } else if (score >= 70) { // jika nilai 70 keatas maka nilai C
        return grade = "C";
    } else if (score >= 60) { // jika nilai 60 keatas maka nilai D
        return grade = "D";
    } else { // jika nilai dibawah 60 maka nilai F
        return grade = "F";
    }
}

// memasukkan nilai ke function getGrade lalu menampilkan hasil function
console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
//==========================================

//students passed
// membuat sebuah function hasPassingGrade untuk mengetahui apakah siswa lulus atau sesuai passing grade
// score sebagai parameter
function hasPassingGrade(score) {
    let passed; // inisialisasi variabel passed dengan nilai kosong
    // membuat percabangan
    if (score < 60) { // jika nilai dibawah 60, maka akan mengembalikan nilai false(tidak lulus) ke variabel passed
        return passed = false;
    } else { // jika nilai diatas 60, maka akan mengembalikan nilai true(lulus) ke variabel passed
        return passed = true;
    }
}

// memasukkan nilai ke function hasPassingGrade lalu menampilkan hasil function
console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
//=================================

//student final report
// membuat sebuah function studentMsg untuk memberikan pesan rapot kepada siswa mengenai nilai mereka
// totalScores dan studentScore sebagai parameter
function studentMsg(totalScores, studentScore) {

    // inisialisasi variabel classAverage dengan memanggil function getAverage untuk menghitung rata-rata berdaasarkan totalScores sebagai nilai
    let classAverage = getAverage(totalScores);
    // inisialisasi variabel grade dengan memanggil function getGrade untuk menetapkan nilai siswa sebagai nilai
    let grade = getGrade(studentScore);  
    // inisisalisasi variabel message dan memberikan pesan kepada siswa terkait rata-rata nilai siswa di kelas dan kategori nilai si siswa sebagai nilai
    let message = "Class average: " + classAverage + ". Your grade: " + grade + ". ";
    
    // membuat percabangan
    if (studentScore >= 60) { // jika nilai sama atau lebih dari 60, maka siswa lulus
        message += "You passed the course."; // menambahkan nilai ke variabel message
    } else { // jika nilai dibawah dari 60, maka siswa gagal
        message += "You failed the course.";
    }
    return message; // mengembalikan nilai variabel message
}

// memasukkan nilai ke function studentMsg dan menampilkan hasil function
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));