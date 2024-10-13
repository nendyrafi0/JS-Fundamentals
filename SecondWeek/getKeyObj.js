// setup array berisi objek
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

/* Membuat sebuah function lookUpProfile
untuk menampilkan nilai yang ada pada sebuah objek
yang berada di dalam array

name dan prop digunakan sebagai parameter*/
function lookUpProfile(name, prop) {
    // membuat perulangan for untuk mencari data yang berada di dalam variabel contacts
    for (let i = 0; i < contacts.length; i++) {
        // membuat percabangan
        // jika salah satu index pada variabel contacts mempunyai objek firstname dengan nilai yang sama dengan name
        if (contacts[i].firstName === name) {
            // maka akan lanjut ke percabangan bersarang
            // jika nilai prop ada di dalam salah satu array pada variabel contacts
            if (prop in contacts[i]) {
                // maka kembalikan nilai prop yang ada di dalam variabel contacts
                return contacts[i][prop];
            // jika nilai prop tidak ada di dalam variabel contacts
            } else {
                // maka kembalikan nilai seperti dibawah
                return "No such property";
            }
        }
    }
    // jika index pada variabel contacts tidak memiliki nilai yang sama dengan name
    // maka akan otomatis mengembalikan nilai seperti dibawah
    return "No such contact";
}

// memasukkan nilai ke function dan memanggilnya lalu menampilkannya ke dalam console
console.log(lookUpProfile("Akira", "likes"))