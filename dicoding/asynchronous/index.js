// console.log("Selamat Datang!");

// setTimeout(() => {
//     console.log("Terima Kasih sudah mampir, silakan datang kembali!");
// }, 3000);

// console.log("Ada yang bisa dibantu?");

// function getUsers(callback) {
//     // simulate network delay
//     setTimeout(() => {
//       const users = ['John', 'Jack', 'Abigail'];
//       callback(users);
//     }, 3000);
// }

// getUsers((users) => {
//     console.log(users);
// });

// Kami menyediakan fungsi asynchronous untuk mendapatkan nilai daftar provinsi di Indonesia dengan nama getProvinces(). Fungsi tersebut akan mengembalikan daftar provinsi pada pemanggilan pertama dan menghasilkan error pada pemanggilan kedua. Fungsi getProvinces() hanya menerima satu argumen, yakni fungsi callback yang perlu Anda buat.

// Cobalah panggil fungsi tersebut dan tangani proses asynchronous-nya dengan pola callback. Pastikan callback yang Anda buat dapat menangani proses yang gagal dan berhasil.

// const { getProvinces } = require('./utils');

// function usersCallback(error, provinsi) {
//     if (error) {
//       console.log('process failed:', error.message);
//       return;
//     }
//     console.log('process success:', provinsi);
// }

// getProvinces(usersCallback);
// getProvinces(usersCallback);

const { promisify } = require('util');
 
function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];
     if (isOffline) {
      callback(new Error('cannot retrieve users due offline'), null);
      return;
    }
 
    callback(null, users);
  }, 3000);
}
 
// create a Promise version of getUsers
const getUsersPromise = promisify(getUsers);

// call getUsersPromise and handle the result
getUsersPromise(false)
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error.message);
  });

// when parameter is true
getUsersPromise(true)
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error.message);
  });


