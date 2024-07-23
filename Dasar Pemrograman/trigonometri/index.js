// let firstname = "Fatwa";
// let age = 22;
let a, b, c;

// console.log(firstname);
// console.log(age);

// document.getElementById("p1").innerHTML = "Hello " + firstname;

document.getElementById("submit").onclick = function () {
  a = document.getElementById("sisiA").value;
  a = Number(a);
  b = document.getElementById("sisiB").value;
  b = Number(b);
  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  document.getElementById("sisiC").innerHTML = c;
};
