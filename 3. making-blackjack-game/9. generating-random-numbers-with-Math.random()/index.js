let randomNumber = Math.random() * 6;
console.log(randomNumber);

/* 
1. Math.random() merupakan built in function yang digunakan untuk men-generate random number, dari range 0-1
2. saat di multiply dengan 6, maka range dari math.random berubah range nya menjadi 0-5.9999dst
*/

let flooredNumber = Math.floor(3.8);
console.log(flooredNumber);

/* 
1. Math.floor() berfungsi untuk membulatkan angka ke dibawahnya, misalkan 4.6 menjadi 4, 4.2 menjadi 4
2. dengan menggabungkan fungsi Math.random dengan Math.floor, kita dapat membuat sebuah program seperti men-generate angka random dari sebuah dadu
*/

function rollDice() {
    let randomDiceNumber = Math.floor(Math.random()*6+1);
    return randomDiceNumber;
}

console.log(rollDice());

/* 
1. Math.random digunakan untuk memberikan angka acak dari 0-5, yang lalu di bulatkan oleh fungsi Math.floor
2. lalu diakhir line 18, kita menambahkan 1. hal ini kita lakukan untuk membuat range yang awalnya 0-5, saat Math.random selesai memberikan kira angka acak tersebut, akan ditambahkan oleh 1 yang membuat range dari Math.random tersebut menjadi 1-6 (karena nilai dadu 0 tidak ada, dan nilai dadu yang paling tinggi adalah 6)
*/