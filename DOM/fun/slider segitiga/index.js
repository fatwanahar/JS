document.body.style.textAlign = "center";
document.body.style.backgroundImage = "url('https://img.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg?w=900&t=st=1680082006~exp=1680082606~hmac=1410146e49c52fe2d30dec274729396a466ac999d039060170e44502a108de85')";

// membuat inisial nilai output 1
document.getElementById('output').innerHTML = 1;

document.getElementById("slider").oninput = function() {
    let val = document.getElementById("slider").value
    document.getElementById('output').innerHTML = val
};

// membuat segitiga bintang sesuai nilai slider dengna add event listener
document.getElementById("slider").addEventListener("input", function() {
    let val = document.getElementById("slider").value
    let segitiga = "";
    for (let i = 0; i < val; i++) {
        for (let j = 0; j <= i; j++) {
            segitiga += "*";
        }
        segitiga += "<br>";
    }
    document.getElementById("segitiga").innerHTML = segitiga;
    document.getElementById('segitiga').style.lineHeight = "0.25em"
});







