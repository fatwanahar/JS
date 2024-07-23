// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");
// const {coffeeStock, isCoffeeMachineReady} = require('./state.js');

import {coffeeStock, isCoffeeMachineReady} from './state.js';

// make coffee if coffeeStock is not empty and machine is ready

const makingCoffee = (type,miligram) => {
    if (coffeeStock[type] >= miligram) {
        console.log(`Kopi ${type} ${miligram}mg berhasil dibuat!`);
    } else {
        console.log("Biji kopi habis!");
    }
}

const makeCoffee = (type,miligram) => {
    if (isCoffeeMachineReady) {
        makingCoffee(type,miligram);
    } else {
        console.log("Maaf, mesin kopi tidak bisa digunakan.");
    }
}

makeCoffee("arabica",80);
