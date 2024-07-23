/**
 * TODO 1 (Tiger.js):
 * Ekspor nilai dari class Tiger
 *
 * TODO 2 (Wolf.js)
 * Ekspor nilai dari class Wolf
 *
 * TODO 3 (main.js)
 * Impor class Tiger dan Wolf
 *
 * TODO 4 (main.js)
 * Ekspor fungsi fight, myTiger, myWolf, dan result
 *
 */


// TODO 3
let Tiger = require('./tiger.js');
let Wolf = require('./wolf.js');

const fight = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
      return tiger.growl();
    }
    if (wolf.strength > tiger.strength) {
      return wolf.howl();
    }
    return 'Harimau dan serigala sama-sama kuat!';
};
  
const myTiger = new Tiger();
const myWolf = new Wolf();

console.log(`Harimau: strength = ${myTiger.strength}`);
console.log(`Serigala: strength = ${myWolf.strength}`);
  
const result = fight(myTiger, myWolf);

console.log(result);
  
  
// TODO 4
module.exports = { fight, myTiger, myWolf, result };