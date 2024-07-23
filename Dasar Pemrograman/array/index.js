// membuat array isi 5 binatang
var binatang = ['kucing', 'kelinci', 'kuda', 'ular', 'katak'];

//membuat array terlebih dahulu lalu mengisi array buah buahan
var buah = [];
buah[0] = 'apel';
buah[1] = 'mangga';
buah[2] = 'jeruk';
buah[3] = 'anggur';
buah[4] = 'semangka';

//menampilkan isi array binatang indeks ke 2
console.log("isi array binatang indeks ke 2 adalah :")
console.log(binatang[2]);

//menampilkan masing masing isi array buah beserta urutannya dengan perulangan
console.log("isi array buah beserta urutannya adalah :")
for (var i = 0; i < buah.length; i++) {
    var urutan = i + 1;
    console.log('buah ke ' + urutan + ' adalah ' + buah[i]);
}

// beberapa method array
// // 1. join
console.log("isi array buah dengan join adalah :");
console.log(buah.join(' - '));
// // 2. push dan pop
console.log('');
// buah.push('melon', 'anggur');
// console.log(buah.join(' - '));
// buah.pop();
// console.log(buah.join(' - '));
// // pop hanya menghapus satu elemen terakhir

// // 3. unshift dan shift dengan binatang
// console.log(binatang.join(' - '));
// binatang.unshift('harimau');
// console.log(binatang.join(' - '));
// binatang.shift();
// console.log(binatang.join(' - '));

// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// buah.splice(2, 0, 'melon', 'semangka');
// console.log(buah.join(' - '));
// console.log('');

// // 5. slice
// // slice(awal, akhir)
// var buah3 = buah.slice(0, 3);
// console.log(buah3.join(' - '));
// console.log('');

// 6. forEach dan map
// forEach
// buah.forEach(function (e, i) {
//     console.log('buah ke ' + (i + 1) + ' adalah ' + e);
// });

// // map
// var buah2 = buah.map(function (e) {
//     return e;
// });
// console.log(buah2.join(' - '));

// 7. sort
// buah.sort();
// console.log(buah.join(' - '));
// console.log("")

// var angka = [1, 2, 3, 41, 5, 64, 7, 84, 9];
// angka.sort();
// console.log(angka.join(' - '));
//akan menghasilkan 1, 2, 3, 41, 5, 64, 7, 84, 9 karena sort akan mengurutkan berdasarkan angka pertama
//untuk mengatasinya kita bisa menggunakan function
// angka.sort(function (a, b) {
//     return a - b;
// });
// console.log(angka.join(' - '));
// console.log("");

// 8. filter
// var buah4 = buah.filter(function (e) {
//     return e != 'jeruk';
// });
// console.log(buah4.join(' - '));
// console.log("");
// var angka2 = angka.filter(function (e) {
//     return e > 5;
// });
// console.log(angka2.join(' - '));

// 9. find
// var angka3 = angka.find(function (e) {
//     return e > 5;
// });
// console.log(angka3);
// var buah5 = buah.find(function (e) {
//     return e == 'apel';
// });
// console.log(buah5);
