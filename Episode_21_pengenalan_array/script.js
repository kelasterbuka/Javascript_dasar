// cara lama membuat data
let siswa1 = "Ucup";
let siswa2 = "Otong";
let siswa3 = "mario";

// cara array
let kumpulan_siswa = ['Ucup','Otong','Mario'];
console.log(kumpulan_siswa);

// beberapa operator/ operasi / method / fungsi pada array

// 1. indexing
console.log(kumpulan_siswa[0]);
console.log(kumpulan_siswa[2]);
console.log(kumpulan_siswa[3]);
console.log(kumpulan_siswa[-1]);

// 2. property length
let panjang_array = kumpulan_siswa.length;
console.log(`panjang array = ${panjang_array}`);

// 3. Vang!, gimana caranya nambah data

kumpulan_siswa.push("Asep");
console.log(`tambah asep di belakang --> ${kumpulan_siswa}`);

// 4. hapus belakang

let ambil_siswa = kumpulan_siswa.pop("Asep");
console.log(`hapus ${ambil_siswa} dari belakang --> ${kumpulan_siswa}`);

// 5. tambah depan

kumpulan_siswa.unshift("Asep");
console.log(`tambah asep di depan --> ${kumpulan_siswa}`);

// 6. hapu depan

ambil_siswa = kumpulan_siswa.shift("Asep");
console.log(`hapus ${ambil_siswa} di depan --> ${kumpulan_siswa}`);