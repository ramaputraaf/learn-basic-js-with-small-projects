/* function saveLead() {
    console.log("Button Clicked from onclick element!")
} */
let myLeads = ["1.com", "2.com", "3.com"]
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener("click", function () {
    console.log("Button Click from Event Listener!")
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (i = 0; i < myLeads.length; i++) {
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}



/* 
1. addEventListener berfungsi sama dengan onclick element pada html, bedanya adalah addEventListener merupakan element dari javascript sendiri untuk merekam event yang terjadi pada tag/element dengan identitas tertentu yang sudah di berikan, disini addEventListener merekam event yang terjadi pada button input-btn
2. menggunakan addEventListener di anjurkan karena memberikan tampilan yang lebih rapih pada html, dan memisahkan kegunaannya masing2 agar tidak tercampur
3. disini untuk selanjutnya kita akan menggunakan addEventListener untuk merekam event/action apa yang terjadi pada element tertentu
4. langkah selanjutnya kita akan melanjutkan menambahkan beberapa fitur lagi pada button save tersebut, yaitu saat button tersebut ditekan, maka akan mem-push link yang berada pada input atau mem-push value input box tersebut kedalam array myLeads
5. kita dapat menggunakan method "value", dengan method tersebut kita akan mengambil value apapun yang kita masukan kedalam input box tersebut
6. dengan mem-push kedalam myLeads menggunakan value dari inputEl, kita dapat memastikan apa value input tersebut sudah terekam atau belum dengan console.log
7. langkah berikutnya kita akan menampilkan pada html isi array myLeads, kita akan menggunakan for loops untuk menampilkan semua isi array tersebut secara otomatis
8. jika kita menggunakan textContent, js akan membaca semua value yang ada didalam kutip dua ("") itu sebagai string, sedangkan untuk menampilkan isi array myLeads, kita membutuhkan tag list (<li>), tetapi karena kita masih menggunakan textContent maka kita hanya akan merender <li> dalam bentuk string dan bukan tag atau codingan
9. untuk mencegah hal tersebut kita dapat menggunakan innerHTML, dengan ini js mengerti bahwa kita ingin merender berupa tag list setiap kali for loop tersebut bekerja, dan akhirnya dapat menampilkan isi array tersebut dengan tag list
    9.1. berikut adalah metode kedua yang dapat menggantikan penggunaan innerHTML, yaitu dengan menggunakan function createElement() dan append(), pseudocode, urutan penggunaan createElement yaitu sebagai berikut
        - pertama, kita akan membuat element
        - lalu, memberikan isi textContent element tersebut
        - terakhir kita akan meng-append element tersebut kedalam ul
    9.2. agar tetap rapi, code nya akan disimpan dibawah ini
    =============================
        const li = document.createELement("li")
        li.textContent = myLeads[i]
        ulEl.append(li)
    =============================

*/