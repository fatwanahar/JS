//program angkutan umum dengan array
var angkot = [];

var warning = function(pesan) {
    alert(pesan);
}

var tambahPenumpang = function(namaPenumpang, angkot) {
    if (angkot.length == 0) {
        angkot.push(namaPenumpang);
        return angkot;
    } else {
        for (var i = 0; i < angkot.length; i++) {
            
            if (angkot[i] == namaPenumpang) {
                warning(namaPenumpang + ' sudah ada di dalam angkot');
                return angkot;
            }
        } 
        for (var i = 0; i < angkot.length; i++){
            if (angkot[i] == undefined) {
                angkot[i] = namaPenumpang;
            return angkot;
            }
             else if (i == angkot.length - 1) {
                angkot.push(namaPenumpang);
                return angkot;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, angkot) {
    if (angkot.length == 0) {
        warning('angkot masih kosong');
        return angkot;
    } else {
        for (var i = 0; i < angkot.length; i++) {
            if (angkot[i] == namaPenumpang) {
                angkot[i] = undefined;
                return angkot;
            } else if (i == angkot.length - 1) {
                warning(namaPenumpang + ' tidak ada di dalam angkot');
                return angkot;
            }
        }3
    }
}

var cariPenumpang = function(namaPenumpang, angkot) {
    for (var i = 0; i < angkot.length; i++) {
        if (angkot.length == 0){
            warning('angkot masih kosong');
            return;
        }
        else if (angkot[i] == namaPenumpang) {
            return i+1;
        }
    }
    return -1;
}

// pembuatan menu pilihan 1 tambah penumpang 2 hapus penumpang angkot 3 cari penumpang 4 keluar
var menu = prompt('1. tambah penumpang\n2. hapus penumpang\n3. cari penumpang\n4. keluar');
while (menu != 4) {
    if (menu == 1) {
        var namaPenumpang = prompt('masukkan nama penumpang');
        var angkot = tambahPenumpang(namaPenumpang, angkot);
        console.log(angkot);
    } else if (menu == 2) {
        var namaPenumpang = prompt('masukkan nama penumpang');
        var angkot = hapusPenumpang(namaPenumpang, angkot);
        console.log(angkot);
    } else if (menu == 3) {
        var namaPenumpang = prompt('masukkan nama penumpang');
        var penumpang = cariPenumpang(namaPenumpang, angkot);
        if (penumpang != -1) {
            alert(namaPenumpang + ' berada di kursi angkot ' + penumpang);
        } else {
            alert(namaPenumpang + ' tidak ada di dalam angkot');
        }
    }
    menu = prompt('1. tambah penumpang\n2. hapus penumpang\n3. cari penumpang\n4. keluar');
}
