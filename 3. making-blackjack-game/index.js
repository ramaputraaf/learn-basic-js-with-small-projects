let player = {
    name: "Rama",
    chips: 145
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13 + 1);
    if (randomCard === 1) {
        return randomCard = 11;
    } else if (randomCard > 10) {
        return randomCard = 10;
    } else {
        return randomCard;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw another card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    cardsEl.textContent = "Cards : ";
    sumEl.textContent = "Sum : " + sum;

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}


//CASH OUT (Mengambil hasil menang, jika mendapatkan blackjack)
console.log(hasBlackJack);

//Checking out if player is busts out or not, so the game can decide whether the game should restart, or continue
console.log(isAlive);

//Changing the console.log syntax on the if else statement, change it to message var
console.log(message);

/*
1. penggunaan if statement pd js dapat dilakukan dengan cara diatas
2. pada pengkondisian yang terakhir, kita hanya menggunakan else saja karena setelah pengkondisian tersebut tidak ada kondisi lagi yang dimana kita tidak butuh if, dan sudah pasti kondisi yang terakhir terjadi
3. mengapa hanya else? karena jika value sum tidak <= 20 dan sum tidak === 21, maka sudah pasti sum > 21, tidak ada kemungkinan2 lainnya
4. penggunaan === yaitu untuk memberikan penegasan bahwa jika sum hanya mempunyai nilai 21, dan bukan yang lain (baik dalam value maupun tipe data)
5. pada penggunaan console.log, atau javascript tidak akan menyimpan hasil dari if else. jadi kita tidak bisa menggunakan value dari hasil dari pengkondisian tersebut untuk syntax di luar nya untuk cash out (user/player tidak mempunyai value di representasikan sebagai pemenang blackjack/mendapatkan blackjack diluar logika if else tersebut).
6. hal ini dapat di akali dengan menggunakan variable yang merepresentasikan kondisi sebelum dan sesudah user tersebut mendapatkan black jack, yaitu dengan menggunakan variable(boolean), berikut penggunaannya :
7. pada line 4, state awal ketika user belum mendapatkan blackjack (diberikan value false)
8. pada line 10, saat user mendapatkan blackjack, variable diawal (line 4) akan kita ubah menjadi true. sehingga saat hasilnya mendapatkan blackjack, variable tersebut dapat di panggil kembali untuk selanjutnya di gunakan dalam pen logikaan yang dibutuhkan
9. setelah itu kita membuat interface untuk user, menggunakan html css dan js
10. lalu pada button kita akan menggunakan pengkondisian diatas sebagai logika dari start game button
11. setelah pengkondisian tersebut dimasukkan kedalam sebuah function, maka function tersebut harus dipanggil agar hasilnya berjalan atau menghasilkan output
12. dengan memberikan onclick pada button start, kita dapat menjadikan button start game tersebut untuk memanggil function nya
13. pada code block di line 7 dan 8, kita tidak lagi menggunakan getElementById, karena syntax tersebut terbatas hanya pada element yang memiliki Id, jadi kita harus mengubah menjadi getElementByClass jika ingin mengambil value dari sebuah class, dll
14. disini kita dapat menggunakan querySelector, dengan ekspresi ini kita dapat memanggil semua jenis selector, seperti class, id, dll. dan hanya harus menambah symbol yang di gunakan untuk memanggil selector tersebut (contoh : #nama_id, .nama_class, body, dll)
15. selanjutnya kita akan membuat tombol new card, yang berfungsi jika kita ingin draw card baru agar value card nya bertambah
16. 
*/