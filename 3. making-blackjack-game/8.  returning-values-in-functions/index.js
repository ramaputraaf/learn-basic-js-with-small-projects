let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time;
    } else if (player2Time < player1Time) {
        return player2Time;
    } else {
        return player1Time;
    }
}

/* 
let fastestRace = getFastestRaceTime();
console.log(fastestRace);
*/

/* 
1. function retutn berguna untuk mengembalikan hasil dari function tersebut untuk dapat dipakai lagi
2. pada line 15, hasil dari function tersebut dimasukkan kedalam variable yang sudah kita tentukan agar dapat digunakan kembali
*/

/* 
1. Write a function that returns the total race time
2. Call/invoke the function and store the returned value in a new variable
3. log the variable out
*/

function getTotalRaceTime() {
    return player1Time + player2Time;
}

let totalTime = getTotalRaceTime();
console.log(totalTime);