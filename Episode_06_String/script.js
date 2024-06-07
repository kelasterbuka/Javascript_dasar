let dataString = "data string";
console.log(dataString);

// 1. escaping string (\' \" \\ \n \r \t \b \f)
let data1 = 'ucup \tberkata "apa kabar dunia?"';
console.log(data1);
let data2 = "otong berkata \"tetep asyiiik\"";
console.log(data2);
let data3 = "ucup berjalan-jalan di tepi pantai, \nkereeen";
console.log(data3);

// 2. literal string (template literal string)
let namaDepan = "Otong";
let namaBelakang = "Surotong";
let umur = 10;
let namaLengkap = umur + " " + namaDepan + " " + namaBelakang; // menjadi masyalah
console.log(namaLengkap);

// lebih elehan supaya ini tidak bikin error
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);