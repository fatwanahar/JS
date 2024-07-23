const box = document.querySelector('.box');

box.addEventListener('mouseover', toggleClasses);
box.addEventListener('mouseout', toggleClasses);


// Menggunakan functions declaration karena ada this yang merujuk ke element yang di klik
function toggleClasses(event) {
    if (event.type === 'mouseover') {
        this.classList.toggle('open');
        // menggunakan arrow function karena this akan mencari ke luar scope dimana this berada didalam function
        // selain itu arrow functions tidak akan di hoisting sehingga
        // coba ganti arrow function dengan function declaration maka akan error karena this akan mengacu ke window
        setTimeout(() => {
            this.classList.toggle('opening');
        }, 300);
    } else if (event.type === 'mouseout') {
        this.classList.toggle('opening');
        setTimeout(() => {
            this.classList.toggle('open');
        }, 300);
    }
}
