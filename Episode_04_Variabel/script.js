// jadi ini adalah komen, jadi bebas aja

// 1. variabel dengan let
let nama = "Ucup Surucup";

// tampilkan data 
console.log(nama);

// kita ubah nilai variabel nama
nama = "Otong Surotong";
console.log(nama);

// 2. variabel dengan var
var namaDepan = "Ucup";
console.log(namaDepan);
namaDepan = "Otong";
console.log(namaDepan);

// kelakukan dari let
let namaBelakang = "Surucup";
{
	let namaBelakang = "Surotong";
	console.log(namaBelakang);
}
console.log(namaBelakang);

// kelakukan dari var
var namaTengah = "Keren";
{
	var namaTengah = "Ganteng";
	console.log(namaTengah);
}
console.log(namaTengah);

// kasus khusus tanpa keyword akan jadi var
gorengan = "Bala-bala";
{
	gorengan = "Combro";
}
console.log(gorengan);

// 3. const

const TTL = "10 Maret 2022";
console.log(TTL);
// TTL = "11 Maret 2054"; gak boleh dilakukan karena sudah janji konstan
