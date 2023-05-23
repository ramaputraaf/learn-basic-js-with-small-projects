/* latihan 1 (menggabungkan 2 variable dan menampilkannya di log) */
let firstName = "Rama";
let lastName = "Putra";
let fullName = firstName + " " + lastName;
console.log(fullName);

/* latihan 2 (menampilkan output "Hi there, Linda!" dengan element yg disediakan dibawah) */
let name = "Linda";
let greeting = "Hi there";
function greetUser() {
    /* let fullGreeting = greeting + ", " + name + "!"; */
    console.log(greeting + ", " + name + "!");
}
greetUser();

/* latihan 3 (buat 2 function, add3Points, dan remove1Point, lalu panggil functions tersebut sehingga nilai myPoints akhirnya adalah 10) */
let myPoints = 3;
function add3Points() {
    myPoints += 3;
}
function remove1Point() {
    myPoints -= 1;
}
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
console.log(myPoints);

/* latihan 4 (prediksi hasil operasi math di bawah ini) */
/* console.log("2" + 2);
console.log(11 + 7);
console.log(6 + "5");
console.log("My points: " + 5 + 9);
console.log(2 + 2);
console.log("11" + "14"); */

/* latihan 5 (membuat error message saat tombol purchase di tekan) */
let errorParagraph = document.getElementById("error");
function errorMessage() {
    errorParagraph.textContent = "Something went wrong, please try again"
}