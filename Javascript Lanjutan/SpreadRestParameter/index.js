// spread dan rest parameter
// 1. Spread Parameter
// Spread Parameter adalah parameter yang digunakan untuk memecah iterables menjadi single element.

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
// menggabungkan 2 array
const allFavorites = [...favorites, ...others];
console.log(allFavorites);

//menyalin array
const favoritesCopy = [...favorites];
favorites.push("Meat");
console.log(favorites);
console.log(favoritesCopy);
// menyalin array menggunakan rest parameter akan benar benar menghasilkan dua array yang berbeda

// mengubah nodeList menjadi array
const pNama = document.querySelectorAll(".nama");
// const nama = pNama.map((Nama) => Nama.innerHTML); //Hal ini akan error karena Pnama bukan array namun nodelist
const nama = [...pNama].map((nama) => nama.textContent);
console.log(nama);

// 2. Rest Parameter
// Rest Parameter adalah parameter yang digunakan untuk menggabungkan argumen menjadi sebuah array.

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));

function jumlah(...angka) {
  return angka.reduce((total, curr) => (total += curr));
}

console.log(jumlah(1, 4, 3, 4, 2, 2, 4));
