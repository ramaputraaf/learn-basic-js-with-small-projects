/* latihan 7 (rendering greeting text) */
let welcomeEl = document.getElementById("welcome-el");
let name = "Rama";
let greeting = "Hello!, Welcome Back ";

welcomeEl.innerText = greeting + name;
/* 
===========================================
*/

/* latihan 8 (menggunakan hasil dari latihan 7 (welcome-message) kita akan menambahkan emoji 👋, tanpa merubah line code manapun dari latihan 7) */

//welcomeEl.innerText = welcomeEl.innerText + "👋";
welcomeEl.innerText += "👋";

/* 
1. untuk mempersingkat penulisan code kita, dapat menggunakan += pada line 14 yang fungsinya sama dengan code pada line 13 (https://www.petanikode.com/php-operator/) "2.Operator Penugasan"
*/