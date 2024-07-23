// let domGajah = document.querySelector(".gajah");
// let domManusia = document.querySelector(".manusia");
// let domSemut = document.querySelector(".semut");
// let domInfo = document.querySelector(".info");

// function computer() {
//   var choice = Math.random();
//   if (choice <= 0.33) {
//     return "gajah";
//   }
//   if (choice > 0.33 && choice <= 0.67) {
//     return "manusia";
//   }
//   return "semut";
// }

// function hasil(player, computer) {
//   if (player == computer) {
//     return "SERI";
//   }
//   if (player === "manusia") {
//     return computer === "semut" ? "MENANG" : "KALAH";
//   }
//   if (player === "gajah") {
//     return computer === "manusia" ? "MENANG" : "KALAH";
//   }
//   if (player === "semut") {
//     return computer === "gajah" ? "MENANG" : "KALAH";
//   }
// }

// function compImage(str) {
//   if (str === "gajah") {
//     return "img/gajah.png";
//   }
//   if (str === "manusia") {
//     return "img/manusia.png";
//   }
//   if (str === "semut") {
//     return "img/semut.png";
//   }
// }

// domSemut.addEventListener("click", function () {
//   let comp = computer();
//   // console.log(hasil("semut", comp));
//   domInfo.innerHTML = hasil("semut", comp);
//   document.querySelector(".img-komputer").src = compImage(comp);
// });
// domManusia.addEventListener("click", function () {
//   let comp = computer();
//   // console.log(hasil("manusia", comp));
//   domInfo.innerHTML = hasil("manusia", comp);
//   document.querySelector(".img-komputer").src = compImage(comp);
// });
// domGajah.addEventListener("click", function () {
//   let comp = computer();
//   // console.log(hasil("gajah", comp));
//   domInfo.innerHTML = hasil("gajah", comp);
//   document.querySelector(".img-komputer").src = compImage(comp);
// });
let domGajah = document.querySelector(".gajah");
let domManusia = document.querySelector(".manusia");
let domSemut = document.querySelector(".semut");
let domInfo = document.querySelector(".info");
let domKomputerImg = document.querySelector(".img-komputer");

let isAnimating = false;

function computer() {
  var choice = Math.random();
  if (choice <= 0.33) {
    return "gajah";
  }
  if (choice > 0.33 && choice <= 0.67) {
    return "manusia";
  }
  return "semut";
}

function hasil(player, computer) {
  if (player == computer) {
    return "SERI";
  }
  if (player === "manusia") {
    return computer === "semut" ? "MENANG" : "KALAH";
  }
  if (player === "gajah") {
    return computer === "manusia" ? "MENANG" : "KALAH";
  }
  if (player === "semut") {
    return computer === "gajah" ? "MENANG" : "KALAH";
  }
}

function compImage(str) {
  if (str === "gajah") {
    return "img/gajah.png";
  }
  if (str === "manusia") {
    return "img/manusia.png";
  }
  if (str === "semut") {
    return "img/semut.png";
  }
}

function play(playerChoice) {
  if (isAnimating) return;

  isAnimating = true;

  let compChoice = computer();
  let images = ["img/gajah.png", "img/manusia.png", "img/semut.png"];
  let index = 0;

  // Function to cycle through images
  function cycleImages() {
    domKomputerImg.src = images[index];
    index = (index + 1) % images.length;
  }

  // Start cycling images every 100ms
  let interval = setInterval(cycleImages, 100);

  // After 1 second, stop the cycling and show the final image and result
  setTimeout(() => {
    clearInterval(interval);
    domKomputerImg.src = compImage(compChoice);
    domInfo.innerHTML = hasil(playerChoice, compChoice);
    isAnimating = false;
  }, 1000);
}

domSemut.addEventListener("click", function () {
  play("semut");
});
domManusia.addEventListener("click", function () {
  play("manusia");
});
domGajah.addEventListener("click", function () {
  play("gajah");
});
