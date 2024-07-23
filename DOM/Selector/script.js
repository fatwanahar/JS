//DOM selection
//getElementById
const judul = document.getElementById('judul');
judul.style.color = 'red';

//getElementsByClassName
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah dari javascript';

//getElementsByTagName
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

// //querySelector
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// //querySelectorAll
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

