let nilai = 45;
console.log(`nilai: ${nilai}`);
let hasil;

if (nilai >=75){
	hasil = "lulus";
} else {
	hasil = "perbaikan";
}

console.log(`hasil: ${hasil}`);

// ternary operator
// variabel hasil = (kondisi) ? True : False
let hasil_ternary = (nilai >=75) ? "lulus" : "perbaikan";
console.log(`hasil ternary: ${hasil_ternary}`);