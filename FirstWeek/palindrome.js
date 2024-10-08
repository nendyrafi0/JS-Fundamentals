//membuat sebuah function isPalindrome untuk mengecek apakah sebuah string adalah palindrome atau tidak
// s sebagai parameter
function isPalindrome(str) {
    // .replace() untuk mengubah agar string hanya berisi huruf alphabetical
    // .toLowerCase() untuk mengubah semua huruf menjadi lowercase
    let normalizedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

    // melakukan reverse pada normalizedStr
    let reversedStr = normalizedStr.split("").reverse().join("");

    // membandingkan normalizedStr dengan reversedStr
    return normalizedStr === reversedStr;
}

// memasukkan input ke dalam function dan menampilkan hasil function
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));

  