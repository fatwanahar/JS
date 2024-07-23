const number = [23, 12, 13, 16, 32, 17, 23, 31, 28, 11];

// for loop
for (let i = 0; i < number.length; i++) {
  // // appy to the DOM element using template string
  // const el = document.createElement("div");
  // el.innerHTML = `<p>${number[i]}</p>`;
  // document.body.appendChild(el);
  console.log(number[i]);
}

console.log("------------------");
// foreach loop
// punya 3 parameter (element, index, array)
// tidak bisa di break
// tidak bisa di gunakan di object atupun string
number.forEach((num) => {
  console.log(num);
});
// contoh diatas num merepresentasikan tiap tiap element dari array number

console.log("------------------");
// for of loop
// for of loop lebih simple dari pada for loop karena tidak perlu menuliskan kondisi dan increment
// tidak bisa di break
// bis digunakan untuk string, array, map, set, arguments, dan object yang memiliki iterator
// tidak punya index
for (const num of number) {
  console.log(num);
}

// arguments
// arguments adalah array like object yang berisi semua argumen yang di kirimkan ke dalam function
// bisa di loop menggunakan for of
console.log("------------------");

function sum() {
  let total = 0;
  for (const num of arguments) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// for in loop
// for in loop digunakan untuk mengambil key dari object
// tidak bisa di break
// tidak bisa digunakan di array
console.log("------------------");

const person = {
  name: "John",
  age: 32,
  address: "New York",
};

for (const key in person) {
  console.log(key, person[key]);
}
