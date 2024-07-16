// let nama = "fatwaaa";

// console.log(nama.substr(-4));

// let hash = "";
// let nol = "";

// for (let i = 0; i < nama.length - 4; i++) {
//   hash += "#";
// }

// let newString = hash + nama.substr(-4);
// let newString2 = nol + nama;

// console.log(newString);
// console.log(newString2.length);

// return masked string
// function maskify(cc) {
//   let hash = "";
//   if (cc.length > 4) {
//     for (let i = 0; i < cc.length - 4; i++) {
//       hash += "#";
//     }
//     return hash + cc.substr(-4);
//   }
//   return cc;
// }

//Isogram dimana dalam string tidak ada huruf yang berulang

// let nama = "fF";

// let isogram = (str) => {
//   let sortStr = str.toLowerCase().split("").sort();
//   // let noDups = new Set(sortStr);
//   // return sortStr.length === noDups.size;
//   for (let i = 1; i < sortStr.length; i++) {
//     if (sortStr[i] === sortStr[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// };

// // isogram(nama);
// console.log(isogram(nama));
