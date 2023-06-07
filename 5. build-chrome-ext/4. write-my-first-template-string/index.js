// template strings/literals

const recipient = "James"
const sender = "rama"

// Refactor the email string to use template strings
const email = 
`Hey ${recipient} !
How is it going?
Cheers ${sender}`

console.log(email)

/* 
1. membuat template strings/literals adalah membuat line code yang di ketik secara literal atau sama persis dengan apa yang kita ingin tampilkan saat dirender, yaitu dengan menggunakan back tick (`) pada awal dan akhir line code nya, template strings juga dapat digunakan secara multiple line, jadi untuk kerapihan atau kejelasan dalam penulisan syntax, kita membuat bentuk nya pada line baru yang lebih 'luas' atau kosong pada penulisannya
2. hal tersebut akan merubah semua yang berada dalam back tick tersebut menjadi strings dan tidak dapat membaca variable pada js, maka dari itu kita dapat menggunakan ${variablesName}, untuk membaca variable pada js
*/