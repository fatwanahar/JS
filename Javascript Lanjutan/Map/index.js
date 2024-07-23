// MAP

let Mahasiswa = [
    {firstname: "Fatwa", lastname: "Nahar", age:23},
    {firstname: "Hilmi", lastname: "Zudin", age:24},
    {firstname: "Hasan", lastname: "Jahar", age:30},
    {firstname: "Toni", lastname: "Muja", age:28}
]

function getFullName(Mahasiswa) {
    return `Nama saya ${Mahasiswa.firstname} ${Mahasiswa.lastname}`;
}

//show in browser by looping array Mahasiswa
document.write("<h2>Map</h2>");
Mahasiswa.map((item) => {
    document.write(getFullName(item) + "<br>");
});