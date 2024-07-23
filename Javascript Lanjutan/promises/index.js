// simple promise example
// if condition is fulfilled then resolve if not then reject
let promise = false;

const prom = new Promise((resolve, reject) => {
  if (promise) {
    resolve("promises is resolved");
  } else {
    reject("promises is rejected");
  }
});
// to use promises .then is used when condition is true and .catch is used when condition is false
prom
  .then((resolve) => console.log(`Yes, ${resolve}`))
  .catch((reject) => console.log(`NO, ${reject}`));

// // call data using pure ajax javascript
// function getData(callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "user.json", true);
//   xhr.send();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       callback(JSON.parse(xhr.responseText));
//     } else {
//       console.log(xhr.statusText);
//     }
//   };
// }

// // Usage
// getData(function (data) {
//   data.map((item) => {
//     console.log(
//       `Nama: ${item.nama}, Umur: ${item.umur}, Pekerjaan: ${item.pekerjaan}, ` +
//         `Alamat: Jalan ${item.alamat.jalan}, Kota ${item.alamat.kota}, Provinsi ${item.alamat.provinsi}`
//     );
//   });
// });

// call data using promises
function getData() {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "user.json", true);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(new Error(xhr.statusText));
        }
      }
    };
  });
}

getData()
  .then((data) =>
    data.map((user) =>
      console.log(
        `Nama: ${user.nama}, Umur: ${user.umur}, Pekerjaan: ${user.pekerjaan}, ` +
          `Alamat: Jalan ${user.alamat.jalan}, Kota ${user.alamat.kota}, Provinsi ${user.alamat.provinsi}`
      )
    )
  )
  .catch((error) => console.log(error.message));

// call data using fetch
// fetch("user.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.map((item) => {
//       console.log(
//         `Nama: ${item.nama}, Umur: ${item.umur}, Pekerjaan: ${item.pekerjaan}, ` +
//           `Alamat: Jalan ${item.alamat.jalan}, Kota ${item.alamat.kota}, Provinsi ${item.alamat.provinsi}`
//       );
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
