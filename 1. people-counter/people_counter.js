let count = 0;
let countEl = document.getElementById("count-el");
function increment() {
    count += 1;
    //count = count + 1; //penulisan berulang
    countEl.textContent = count;
    //document.getElementById("count-el").innerText = count; //penulisan awal (kurang efisien)
    //document.getElementById("count-el").textContent = count; //penulisan lengkap, opsi 2 (tidak mendeklarasikan variable countEl)
    console.log(count);
}
/* 
1. menggunakan metode yang kita mention di awal pada index.js, kita dapat menggunakan code pada line ke 6 untuk merubah isi dari sebuah tag html
2. pada line ke 2 kita membungkus code tersebut pada variable countEl, dengan tujuan mempermudah penggunaannya
3. disini kita menggunakan valuenya count, yaitu untuk memberikan increment setiap kali function increment() dijalankan pada outputnya
4. yang menjadi highlight disini adalah penggunaan syntax document.getElementById("count-el"), teknik/metode ini disebut dengan DOM (Document Object Model) yaitu merupakan html (document) yang kita gunakan dalam bentuk model js nya, jadi kita memberikan object atau target pada js untuk di modifikasi/modelisasi
*/

let saveEl = document.getElementById("save-el");
function save() {
    /*
    pada course, menggunakan penambahan deklarasi variable seperti berikut:
    let countStr = count + " - "
    saveEl.textContent += countStr
    */
    saveEl.textContent += count + " - ";
    //saveEL.textContent += countEl.textContent + " - "; //opsi 2
    //saveEl.innerText += " " + countEl.innerText + " -"; //opsi 3
    countEl.textContent = 0;
    count = 0;
}
/* 
1. source : search "MDN Text Content"
2. innerText, hanya menampilkan "human readable" elements, jadi line 26, jika kita menggunakan innerText, tepatnya pada saat + " - ". spasi pada element tersebut tidak akan muncul karena secara teknis tidak "human-readable"
3. disini penggunaan textContent dapat mengganti innerText, textContent akan menyertakan semua element yang di ketik, sama persis sesuai yang kita ketik
4. tanpa penggunaan text content, kita dapat menggunakan seperti line 28
5. pada line 6 dan semua line yang sebelumnya berisi (countEl.innerText) sudah diubah menjadi countEl.textContent
6. pada line 28, untuk mengembalikan value dari count kembali ke 0, sehingga kita dapat menghitung jumlah orang yang menunggu di halte tersebut per gelombang, maka kita harus merubah .innerText(.textContent) kembali ke 0
7. tetapi jika kita hanya melakukan yang sudah dijelaskan pada poin 6, maka kita hanya akan mengganti outputnya saja sementara, karena pada function increment() diatas, akan menjalakan ulang functionnya yang pada akhirnya akan meniban, overwrite hal yg kita lakukan pada poin ke 6
8. dengan merubah count nya juga kembali ke 0 seperti pada line 29, kita akan mereset value count yang tersimpan sebelumnya di function increment(), yang akhirnya akan memberikan efek yaitu setiap kita tekan tombol SAVE, akan mereset semuanya kembali ke 0.
9. finish! you just made your first js app, People Counter!
10. untuk melihat secara keseluruhan, apa saja yang sudah kita pelajari, dapat dilihat pada bagian paling bawah di materibasic.js
*/