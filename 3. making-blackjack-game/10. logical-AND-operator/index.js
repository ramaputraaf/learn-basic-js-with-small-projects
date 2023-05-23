let hasCompletedCourse = true;
let givesCertificate = true;

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating Certificate.....")
}

/* 
1. && berfungsi sebagai and, atau penambahan kondisi kedua
2. pada contoh diatas kedua variable tersebut harus berniali benar agar function didalamnya di jalankan
*/

/* example */
let hasSolvedChallenge = false;
let hasHintsLeft = false;

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution();
}

function showSolution() {
    console.log("Showing Solution.....")
}

