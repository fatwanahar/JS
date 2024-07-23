// HOISTING yaitu keatas atau secara teknis dalam javascript berarti membuat dahulu function, variabel, dan class
// jika membuat variable dengan var maka akan di hoisting, jika membuat dengan let ataupun const maka tidak akan ada hoisting
// scope pada javascript adalah function scope bukan block scope jadi lebih baik menggunakan let dan const

// CONTOH DIBAWAH INI
let Nama = "Fatwa";
console.log(Hello(Nama));

// JIKA mengunakan FUNCTION DECLARATION maka akan dihoisting, jadi jika menggunakan fungsi ini sebelum dibuat maka akan jalan
function Hello(Nama) {
    return `Hello ${Nama}!`;
}

// JIKA menggunakan FUNCTION EXPRESSION maka fungsi tidak akan di hoisting jadi harus dibuat dahulu baru dipakai
// const Hello = function(Nama){
//     return `Hello ${Nama}`;
// }

// Cara lain untuk mendeklarasikan fungsi yaitu dengan ARROW FUNCTIONS seperti dibawah ini, sama seperti expression hanya saja lebih singkat
// selain itu jika statement hanya satu baris maka tidak perlu kurung kurawa "{}", 
// const Hello = (Nama) =>{
//     return `Hello${Nama}`
// }    
// const Hello = (Nama) => `Hello${Nama}`
// }

// SELF INVOKE FUNCTIONS
//Fungsi langsung dijalankan tidak perlu di taruh divariabel seperti function expression
// caranya yaitu menambahkan kurung "()" diantara function
// (Hello = (Nama) => `Hello ${Nama}`)



