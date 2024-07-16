// example using template literal
// template literal is a string that allows embedded expressions and multi-line strings without needing concatenation
// template literals are enclosed by the back-tick (` `) (grave accent) character instead of double or single quotes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.car = ['BMW', 'Ferrari', 'Lamborghini'];
  }
}


const Rizky = new Person('Rizky', 22);

// using template literal
const el = `
  <div>
    <p> Hello my name is ${Rizky.name}, Im ${Rizky.age} old</p>
    <p> I have ${Rizky.car.length} cars </p>
    <p> My cars are: </p>
    <ul>
      ${Rizky.car.map(car => `<li>${car}</li>`).join('')}
    </ul>
    </div>
    `;
document.body.innerHTML = el;

// tagged template literals
// tagged template literals allow you to parse template literals with a function
// the first argument of a tag function contains an array of string values

const name = 'Fatwa';
const age = 25;
const jobs = undefined;

function myTag(strings, nameExp, ageExp) {
  const str0 = strings[0];
  const str1 = strings[1];
  const str2 = strings[2];
  return `${str0}${nameExp}${str1}${ageExp}${str2}`;
}

const output = myTag`That ${name} is a ${age} years old`;
console.log(output); // That Fatwa is 25 years old

// but sometimes the you don't know how many arguments will be passed to the tag function
// you can use the rest parameter syntax to capture all the arguments passed to the tag function

function myTagRest(strings, ...expressions) {
//   let str = '';
//   strings.forEach((string, i) => {
//     str += `${string}${expressions[i] || ''}`;
//   });
//   return str;

// or you can use reduce
    return strings.reduce((str, string, i) => `${str}${string}${expressions[i] || ''}`, '');
}

const outputRest = myTagRest`That ${name} is ${age} years old ${jobs}`;
console.log(outputRest); // That Fatwa is 25 years old



