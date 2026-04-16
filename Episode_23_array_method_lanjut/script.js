let siswa_01 = ['ucup','otong','asep'];
let siswa_02 = ['mario','jardel','dicky'];

// menggabungkan 2 array

let tim_bola = siswa_01.concat(siswa_02);
console.log(tim_bola.join(' - '));

// kita cek apakah member ada
if (siswa_01.includes('mario')){
	console.log('mario ada di siswa_01');
} else {
	console.log('mario tidak ada di siswa_01');
}

// kita pengen tau posisi

let posisiJardel = tim_bola.indexOf("jardel");
console.log(`jardel ada di ${posisiJardel}`);
console.log(`mario ada di ${tim_bola.indexOf("mario")}`);

// bisa mengurutkan data berdasarkan value

tim_bola.sort();
console.log("sort--> " + tim_bola.join('-'));

tim_bola.reverse();
console.log("reverse--> " + tim_bola.join('-'));