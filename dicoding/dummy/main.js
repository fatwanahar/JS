// console.log("HAI")

/**
 * TODO:
 * Buatlah variabel firstName, lastName, age, isMarried dengan ketentuan:
 *  - firstName: bertipe data string, dengan nilai "John".
 *  - lastName: bertipe data string, dengan nilai "Doe".
 *  - age: bertipe data number, dengan nilai 25.
 *  - isMarried: bertipe data boolean, dengan nilai true.
 */
// // TODO
// let firstName = "John";
// let lastName = "Doe";
// let age = 25;
// let isMarried = true;


//  * Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
//  *  1. Jika score bernilai 90 atau lebih
//  *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
//  *  2. Jika score bernilai 80 hingga 89
//  *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
//  *  3. Jika score bernilai 70 hingga 79
//  *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
//  *  4. Jika score bernilai 60 hingga 69:
//  *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
//  *  5. Jika score bernilai di bawah 60:
//  *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'

// // TODO
// let result;
// if (score >= 90) {
//   result = "Selamat! Anda mendapatkan nilai A.";
// } else if (score >= 80) {
//     result = "Anda mendapatkan nilai B.";
// } else if (score >= 70) {
//     result = "Anda mendapatkan nilai C.";
// } else if (score >= 60) {
//     result = "Anda mendapatkan nilai D.";
// } else {
//     result = "Anda mendapatkan nilai E.";
// }

// const name = 'Dicoding';
// const language = 'JavaScript';

// console.log(`Hello $name. Welcome to $language!`);

/**
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai "Bakso Mang Dicoding".
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai "Bandung".
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai "Es Teh".
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai "Bakso".
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai false.
 *
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
 */

// Tulis kode di bawah ini
// const restaurant = {
//     name : "Bakso Mang Dicoding",
//     city : "Bandung",
//     "favorite drink": "Es Teh",
//     "favorite food" : "Bakso",
//     isVegan : false
// };

// let name = restaurant.name;
// let favoriteDrink = restaurant["favorite drink"];

/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// Tulis kode di bawah ini
// evenNumber=[];

// for(let i=1; i <= 100; i++ ){
//     if (i % 2 == 0){
//         evenNumber.push(i);
//     }
// }


// ----------------------------------------
/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
//  *     - priceInJPY dengan nilai currency JPY
//  */

// const priceInJPY = 5000;

// // Tulis kode di bawah ini
// const currency = new Map([
//     ["USD", 14000],
//     ["JPY", 131],
//     ["SGD", 11000],
//     ["MYR", 3500]
// ])

// let priceInIDR = priceInJPY * currency.get("JPY");

// console.log(priceInIDR);

// const artistsAndSongs = {
//     "Keyakizaka46": ["Silent Majority"],
//     "Blackpink": ["How You Like That", "Ice Cream"],
//     "JKT48": ["Rapsodi", "Heavy Rotation"],
//     "Twice": ["What is Love?"],
// }

// artistsAndSongs["Babymetal"] = ["Gimme chocolate"];
// delete artistsAndSongs["Keyakizaka46"];
// artistsAndSongs["Blackpink"].push("Rose - Gone");

// console.log(artistsAndSongs);

// const oneTwoThree = [1, 2, 3];
// const sevenEightNine = [7, 8, 9];

// const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

// console.log(result);


// const artistsAndSongs = {
//     "Keyakizaka46": ["Silent Majority"],
//     "Blackpink": ["How You Like That", "Ice Cream"],
//     "JKT48": ["Rapsodi", "Heavy Rotation"],
//     "Twice": ["What is Love?"],
// }

// artistsAndSongs["Babymetal"] = ["Gimme chocolate"];

// delete artistsAndSongs["Keyakizaka46"];

// console.log(artistsAndSongs);

// buat setname dengan closure function
// function setName(name) {
//     return (inner) => {
//         console.log(`vaiabel outer = ${name}`)
//         console.log(`vaiabel inner = ${inner}`)
//     }
// }

// const name = setName("Fatwa");
// name("HAIIIII");

/**
 * TODO:
 * Buatlah variabel greatAuthors yang merupakan array
 * berdasarkan hasil filter() dan map() dari books:
 *   - Gunakan fungsi filter untuk mengembalikan nilai item books
 *     yang hanya memiliki nilai sales lebih dari 1000000.
 *   - Gunakan fungsi map pada books yang sudah ter-filter,
 *     untuk mengembalikan nilai string dengan format:
 *     - `${author} adalah penulis buku ${title} yang sangat hebat!`
 *
 * Catatan: Jangan ubah nilai atau struktur dari books
 */

// const books = [
//     { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
//     { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
//     { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
//     { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
//     { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
//     { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
//     { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
//   ];
  
// // Tulis kode di bawah ini
// const greatAuthors = books.filter((book) => book.sales > 1000000).map((book) => `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`);
// console.log(greatAuthors);

// console.log("hi");

const sayHI = (time) => {
    return (name) => {
        console.log(`Good ${time} ${name}, how are you today?`);
    }
}

let greet = sayHI('evening');
greet('Fatwa');















