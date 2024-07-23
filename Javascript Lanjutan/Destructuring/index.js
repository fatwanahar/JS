// Destructuring
// untuk membongkar isi dari array ataupun objek
// jika array maka menggunakan kurung siku "[]" dan jika objek maka menggunakan kurung kurawa "{}"

// contoh membongkar array
const Fatwa = ["fatwa", 24, "Mahasiswa"];

// const [Nama, Umur, Profesi] = Fatwa;

// bisa juka skip item
const [Nama, , Profesi] = Fatwa;

console.log(Nama);
// console.log(Umur);
console.log(Profesi);

// menukar isi array atau variabel
let a = 2;
let b = 3;

console.log(a);
console.log(b);

[a, b] = [b, a];

console.log(a);
console.log(b);

// return value pada function
function coba() {
  return [1, 2];
}

const [c, d] = coba();
console.log(c);
console.log(d);

// Rest parameter
const [e, ...values] = [1, 2, 3, 4, 5];
console.log(e);
console.log(values);

//membongkar objek
//nama parameter pada destructuring objek harus sama dengan nama properti pada objek
const Rizky = {
  nama: "Rizky",
  umur: 23,
  pekerjaan: "Mahasiswa",
};

const { nama, umur, pekerjaan } = Rizky;
console.log(nama);
console.log(umur);
console.log(pekerjaan);

//auto assignment ke objek
({ judul, penulis } = {
  judul: "Harry Potter",
  penulis: "J.K. Rowling",
});
console.log(judul);

// destructuring function argument
function kalkulasi(a, b) {
  return [a + b, a - b, a * b, a / b];
}
3;
const [tambah, kurang, kali, bagi] = kalkulasi(4, 2);
console.log(tambah);
console.log(kurang);
console.log(kali);
console.log(bagi);

// nested object
const Rizky2 = {
  nama: "Rizky",
  umur: 23,
  pekerjaan: "Mahasiswa",
  alamat: {
    jalan: "Jalan Raya",
    kota: "Jakarta",
  },
};

function cetakAlamat({ nama, umur, pekerjaan, alamat: { jalan, kota } }) {
  return `Halo, nama saya ${nama}, umur saya ${umur}, saya seorang ${pekerjaan}, tinggal di ${jalan}, kota ${kota}`;
}

console.log(cetakAlamat(Rizky2));
