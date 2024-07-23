class Hewan {
    constructor(nama, umur, warna, jenis) {
        this.nama = nama;
        this.umur = umur;
        this.warna = warna;
        this.jenis = jenis;
    }
}

function canMeow(Hewan) {
    return {
        meong: () => {
            console.log(`Hewan ${Hewan.jenis} bernama ${Hewan.nama} sedang meong`);
        }
    }
}

function canBark(Hewan) {
    return {
        bark: () => {
            console.log(`Hewan ${Hewan.jenis} bernama ${Hewan.nama} sedang meng gong gong`);
        }
    }
}

function canChirp(Hewan) {
    return {
        chirp: () => {
            console.log(`Hewan ${Hewan.jenis} bernama ${Hewan.nama} sedang berkicau`);
        }
    }
}

function canHowl(Hewan) {
    return {
        howl: () => {
            console.log(`Hewan ${Hewan.jenis} bernama ${Hewan.nama} sedang mengaum`);
        }
    }
}

function canFly(Hewan) {
    return {
        fly: () => {
            console.log(`Hewan ${Hewan.jenis} bernama ${Hewan.nama} sedang terbang`);
        }
    }
}

function canWalk(Hewan) {
    return{
        walk: () => {
            console.log(`Hewan ${Hewan.jenis} bernama ${Hewan.nama} sedang berjalan`);
        }
    }
}

function createCat(nama, umur, warna, jenis="kucing") {
    const cat = new Hewan(nama, umur, warna, jenis);
    return Object.assign(cat, canMeow(cat), canWalk(cat));
}

function createDog(nama, umur, warna, jenis="anjing") {
    const dog = new Hewan(nama, umur, warna, jenis);
    return Object.assign(dog, canBark(dog), canWalk(dog));
}

function createWolf(nama, umur, warna, jenis="serigala") {
    const wolf = new Hewan(nama, umur, warna, jenis);
    return Object.assign(wolf, canHowl(wolf), canWalk(wolf));
}

function createBird(nama, umur, warna, jenis="burung") {
    const bird = new Hewan(nama, umur, warna, jenis);
    return Object.assign(bird, canChirp(bird), canFly(bird), canWalk(bird));
}

const cat1 = createCat("Badrun", 2, "Hitam");
console.log(cat1);
cat1.meong();
cat1.walk();
const dog1 = createDog("Bambang", 3, "Coklat");
console.log(dog1);
dog1.bark();
const bird1 = createBird("Badrun", 2, "Biru");
console.log(bird1);
bird1.chirp();
bird1.fly();