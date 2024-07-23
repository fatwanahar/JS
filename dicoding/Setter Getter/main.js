// mencoba setter dan getter dengan set npm secara random dan private

class Mahasiswa{
    #npm = null;

    constructor(nama,umur, jurusan, alamat) {
        this.nama = nama;
        this.#npm = this.#setRandomNpm();
        this.umur = umur;
        this.jurusan = jurusan;
        this.alamat = alamat;
    }

    get npm() {
        return this.#npm;
    }

    set npm(npm) {
        console.log("properti tidak bisa diubah");
    }

    #setRandomNpm() {
        return this._npm = Math.floor(Math.random() * 1000000);
    }
}


// membuat object baru dengan nama Mahasiswa1

const Mahasiswa1 = new Mahasiswa('Fatwa', 20, 'Teknik Informatika', 'Bandung');

console.log(Mahasiswa1.npm);
Mahasiswa1.npm = 123456;
console.log(Mahasiswa1.npm);