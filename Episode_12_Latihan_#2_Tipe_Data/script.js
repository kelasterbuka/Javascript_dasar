let angka_1,angka_2,hasil;

document.getElementById("button_jumlah").onclick = function(){
	angka_1 = document.getElementById("angka_1").value;
	console.log(`angka_1 = ${angka_1} tipe = ${typeof angka_1}`);
	angka_2 = document.getElementById("angka_2").valueAsNumber;
	console.log(`angka_2 = ${angka_2} tipe = ${typeof angka_2}`);

	hasil = parseFloat(angka_1) + angka_2;

	console.log(`hasil = ${hasil} tipe=${typeof hasil}`);

	document.getElementById("hasil").textContent = hasil;
};