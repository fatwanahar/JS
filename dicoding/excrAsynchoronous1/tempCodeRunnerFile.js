etProvinces(countryId) {
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