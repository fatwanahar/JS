/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // output: 1
 *    minimal(3, 2) // output: 2
 *    minimal(3, 3) // output: 3
 *
 * 2. Buatlah sebuah function bernama findIndex yang menerima dua parameter, yaitu array dan number.
 *    Fungsi tersebut harus mengembalikan index dari angka yang sesuai pada array tersebut.
 *    Jika angka tidak ditemukan, maka kembalikan nilai -1.
 *
 *    contoh:
 *    findIndex([1, 2, 3, 4, 5], 3) // output: 2
 *    findIndex([1, 2, 3, 4, 5], 6) // output: -1
 *    findIndex([1, 2, 3, 4, 5], 5) // output: 4
 */

// Tulis kode di bawah ini
const minimal = (a,b) => {
    if (a<=b) {
        return a;
    } else {
        return b;
    }
}
console.log(`Nilai terkecil yaitu ${minimal(16666,4122)}`);

function findIndex(numbers ,numberFind) {
    for (const number of numbers) {
        if (number == numberFind){
            return numbers.indexOf(number);
        }
    }
    return -1;
}

let indexAngka = findIndex([1,2,5,4,2,1,4,11,3,4,74,12,100,43,1,5,6,44,3],100)
console.log(indexAngka);