// dapatkan button byid bWarna
var Bwarna = document.getElementById("bWarna");

// ubah warna body menjadi merah ketika button diklik dan slider mengikuti nilai rgb
Bwarna.onclick = function() {
    document.body.style.backgroundColor = "red";
    rSlider.value = 255;
    gSlider.value = 0;
    bSlider.value = 0;
}

// buat tombol baru dengan nama bReset dan tambahkan ke body
var Breset = document.createElement("button");
var teksBreset = document.createTextNode("Reset");
Breset.appendChild(teksBreset);
document.body.appendChild(Breset);

// buat tombol baru dengan nama random color dan tambahkan ke body
var Brandom = document.createElement("button");
var teksBrandom = document.createTextNode("Random Color");
Brandom.appendChild(teksBrandom);
document.body.appendChild(Brandom);

// tambahkan event handler untuk tombol random color
Brandom.onclick = function() {
    var r = Math.round(Math.random() * 256);
    var g = Math.round(Math.random() * 256);
    var b = Math.round(Math.random() * 256);
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

// tambah margin left dari tombol Brandom 3px
Brandom.style.marginLeft = "3px";

// tanngkap slider dengan id rSlider
var rSlider = document.getElementById("rSlider");
// tanngkap slider dengan id gSlider
var gSlider = document.getElementById("gSlider");
// tanngkap slider dengan id bSlider
var bSlider = document.getElementById("bSlider");

// sesuaikan warna body dengan nilai rgb pada slider
rSlider.oninput = function() {
    document.body.style.backgroundColor = "rgb(" + rSlider.value + "," + gSlider.value + "," + bSlider.value + ")";
}
gSlider.oninput = function() {
    document.body.style.backgroundColor = "rgb(" + rSlider.value + "," + gSlider.value + "," + bSlider.value + ")";
}
bSlider.oninput = function() {
    document.body.style.backgroundColor = "rgb(" + rSlider.value + "," + gSlider.value + "," + bSlider.value + ")";
}
// bila random color diklik, maka slider menginguti nilai random dengan addEventListener dan merubah warna body sesuai nilai slider
Brandom.addEventListener("click", function() {
    rSlider.value = Math.round(Math.random() * 256);
    gSlider.value = Math.round(Math.random() * 256);
    bSlider.value = Math.round(Math.random() * 256);
    document.body.style.backgroundColor = "rgb(" + rSlider.value + "," + gSlider.value + "," + bSlider.value + ")";
});

// tambahkan event handler untuk tombol reset beserta warning jika tombol diklik dan slider direset
Breset.onclick = function() {
    var konfirmasi = confirm("Apakah anda yakin ingin mereset warna background?");
    if (konfirmasi) {
        document.body.style.backgroundColor = "white";
        rSlider.value = 0;
        gSlider.value = 0;
        bSlider.value = 0;
    }
}








