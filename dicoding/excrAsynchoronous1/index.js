/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */

const { promisify } = require('util');

// function getProvinces(countryId) {
//     // return promise object
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (countryId === 'id') {
//               resolve([
//                 { id: 'id-jk', name: 'Jakarta' },
//                 { id: 'id-bt', name: 'Banten' },
//                 { id: 'id-jr', name: 'Jawa Barat' },
//               ]);
//               return;
//             }
        
//             reject(new Error('Country not found'), null);
//           }, 1000);
//     });
// }

// // call getProvinces
// getProvinces('id')
//     .then((provinces) => {
//         console.log(provinces);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });
// // call getProvinces so it will error
// getProvinces('us')
//     .then((provinces) => {
//         console.log(provinces);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });

// module.exports = { getProvinces: getProvinces };




function getProvinces(countryId, callback) {
    setTimeout(() => {
        if (countryId === 'id') {
            callback(null, [
                { id: 'id-jk', name: 'Jakarta' },
                { id: 'id-bt', name: 'Banten' },
                { id: 'id-jr', name: 'Jawa Barat' },
            ]);
            return;
    }
  
      callback(new Error('Country not found'), null);
    }, 1000);
}
  
// promisify getProvinces
const getProvincesPromise = promisify(getProvinces);

// call getProvincesPromise and handle the result
getProvincesPromise('id')
    .then((provinces) => {
        console.log(provinces);
    })
    .catch((error) => {
        console.log(error.message);
    });

// call getProvincesPromise so it will error
getProvincesPromise('us')
    .then((provinces) => {
        console.log(provinces);
    })
    .catch((error) => {
        console.log(error.message);
    });

module.exports = { getProvinces: getProvinces };

