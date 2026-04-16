let siswa = ["ucup",'otong','mario'];

console.log(siswa);

// 1. join (separator:string) --> menggabungkan array
console.log(siswa.join('-'));

// 2. splice(index,delete/nodelete,data)
let hasil_splice;

// 2a. index dan delete
hasil_splice = siswa.splice(1,1);
console.log(`hasil splice 1,1 = ${hasil_splice}`);
console.log(`siswa menjadi ${siswa}`);

// 2b. misal kita akan nambah data
hasil_splice = siswa.splice(1,0,'asep');
console.log(`hasil splice 1,0,asep = ${hasil_splice}`);
console.log(`siswa menjadi ${siswa}`);

// 2. slice()
console.log(siswa.join('-'));

let anak_pintar = siswa.slice(1,3);
console.log(`anak pintar = ${anak_pintar.join('-')}`);

console.log(siswa.join('-'));