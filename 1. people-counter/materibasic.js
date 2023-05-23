/* document.getElementById("count-el").innerText = 5 */

let count = 0;
console.log(count);
/* 
1. js membaca bbrp syntax dari atas ke bawah
2. console.log(namaElement) digunakan untuk debugging, yaitu mencari tau apakah nilai variable yang kita gunakan sesuai dengan yang kita butuhkan
3. jadi penggunaan console.log harus berada dibawah syntax yang kita ingin cek
==============================================
*/

let a = 10;
let b = 12;
let result = a + b;
console.log(result);
/* 
1. pemberian nilai pada variable dpt dilakukan juga dengan menambahkan operator matematik, dan juga pada penggunaan umumnya menggunakan variable lain untuk mengisi value variable tersebut. seperti pada contoh diatas
==============================================
*/

/* latihan (membuat operasi matematik dengan referensi contoh diatas yaitu konversi umur manusia ke umur anjing) */
let myAge = 21;
let humanDogRatio = 7;
let myDogAge = myAge * humanDogRatio;
console.log(myDogAge);


let numberA = 10
numberA = 2
numberA = 9
/* 
1. dengan pendeklarasian variable dengan let, kita dapat merubah value nya, dengan contoh seperti diatas
2. variable numberA yang dipakai yaitu dengan melihat value nya yang paling terakhir
==============================================
*/

/* latihan 2 (membuat variable bonus point, yang berawal dari 50, lalu ditambah dengan hasil 100, lalu dari 100 turun ke 25, dan dari 25 naik ke 70) */

let score = 50;
score = score + 50;
score = score - 75;
score = score + 45;
console.log(score);
/* 
1. kita dapat melakukan operasi matematika seperti contoh diatas, pada setiap line, nilai score akan tersimpan dan dilanjutkan ke syntax di line berikutnya sampai line paling akhir
==============================================
*/

/* 
console.log(5);
console.log(4);
console.log(3);
console.log(2);
console.log(1); 

1. diatas terdapat beberapa line code, untuk melakukan countdown sebuah car race, car race ini akan dilakukan sebanyak 3 set. Jika kita ingin menggunakan countdown yang sama, yaitu mulai dari 5 hingga 1, mengulang line code tersebut sebanyak 3 kali merupakan cara yang kurang efisien.
2. line code tersebut dapat kita bungkus pada sebuah function, yaitu dengan cara seperti dibawah ini
*/
function countdown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}
/* countdown()
countdown()
countdown() */
/* 
1. dengan membungkus code line tersebut pada sebuah function, maka kita sudah mendeklarasi function tersebut, lalu untuk memmanggil atau menjalankan function tersebut kita dapat mengetik nama dari functionnya
2. seperti diatas, kita memanggil function countdown sebanyak 3 kali, dengan begitu code line tersebut dijalankan sebanyak 3 kali
==============================================
*/

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function logLapTime() {
    let totalLap = lap1 + lap2 + lap3; //variable dari luar function (lap1,2,3) dapat digunakan atau masuk ke dalam function manapun
    console.log(totalLap);
    //console.log(lap1 + lap2 + lap3);
}
logLapTime();
//console.log(totalLap); variable dari dalam function (totalLap) tidak dapat digunakan diluar function tersebut
/* 
==============================================
*/

/* latihan 3 (membuat function yang men-increment banyaknya lap yang selesai +1, dan jalankan 3 kali function tersebut) */
let lapsCompleted = 0;
function totalLapCompleted() {
    lapsCompleted = lapsCompleted + 1;
    console.log(lapsCompleted);
}
totalLapCompleted();
totalLapCompleted();
totalLapCompleted();

/* 
1. hasil akhir setiap saat function tersebut dijalankan/invoked akan tersimpan dan berlanjut lagi jika function tersebut dipanggil
==============================================
*/

let username = "per";
console.log(username);
/* 
1. selanjutnya kita akan belajar data tipe baru, yaitu string
2. string dapat di jadikan value pada js dengan menggunakan tanda petik 2 atau petik 1 (sama saja)
*/

/* latihan 4 (membuat variable, message yang menyimpan value : "you have 3 new notifications") */
let message = "you have 3 new notifications";
console.log(message + ", " + username + "!");
/* 
1. disini kita menggabungkan 2 variable yaitu message dan username, dan menambahkan space agar terlihat lebih rapi
2. dalam penggunaan lapangannya, hal ini dapat digunakan sebagai greeting message pada sebuah website yang menyediakan greetings message dengan username yang berbeda2, menyesuaikan nama yang diberikan oleh user
3. penggabungan beberapa string seperti diatas disebut dengan concat, kita sudah men-concatenate beberapa string tersebut
==============================================
*/

/* latihan 5 (buatlah variable baru untuk menampilkan message yang sama seperti contoh diatas) */
let messageToUser = message + ", " + username + "!";
console.log(messageToUser);
/* 
1. pada latihan 5, penggunaan code seperti diatas pada praktik lapangannya berfungsi jika kita ingin menampilkan sebuah message yang lebih interaktif (message yang berubah2 sesuai dengan kondisi/state kita saat itu pada saat menggunakan aplikasi tersebut)
2. variable messageToUser, merupakan bentuk akhir dari message yang akan kita gunakan untuk ditampilkan ke user
*/

/* latihan 6 (membuat greeting log, dengan membuat 2 variable (name, greeting) dan menggabungkan 2 variable tersebut kedalam 1 variable lalu menampilkan hasilnya di console log ) */
let name = "Rama";
let greeting = "Hello!, Welcome Back ";
let myGreeting = greeting + name;
console.log(myGreeting);
/*
============================================
*/

let points = 10;
let bonusPoints = "4";
let totalPoints = points + bonusPoints;
console.log(totalPoints);
/* 
1. pada concatenation sebuah variable, string akan selalu menang atau lebih dominan dari tipe data yang lainnya
2. pada contoh diatas, pada saat tipe data integer concated dengan string, maka variable dengan tipe data integer akan di ubah menjadi string, sehingga output yang muncul pada log berupa string yaitu 104, bukan integer yang jika keduanya integer maka output log nya 14
3. dibawah ini merupakan beberapa contoh dari poin 1 dan 2
*/
console.log(4 + 5);
console.log("2" + "4");
console.log("5" + 1);
console.log(100 + "100");

/* 
============================================
*/

/* 
RECAP APA YG SUDAH KITA PELAJARI SEJAUH INI :
1. SCRIPT TAG
2. VARIABLES
3. NUMBERS
4. STRINGS
5. console.log()
6. FUNCTIONS
7. THE DOM
8. getElementById()
9. innerText
10. textContent
*/