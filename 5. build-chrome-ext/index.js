/* function saveLead() {
    console.log("Button Clicked from onclick element!")
} */
let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (i = 0; i < myLeads.length; i++) {
        listItems += 
        `
        <li>
            <a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
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
10. berikutnya kita akan meningkatkan performance, yaitu dengan membuat variable untuk list item itu sendiri yang akan kita tampilkan, hal ini meningkatkan performa karena kita hanya akan memanipulasi DOM nya sekali saja dan tidak melakukan loop secara manual pada ulEl.innerHTML nya
11. langkah berikutnya adalah memberikan fungsi pada button save nya untuk me render link atau input yang kita masukkan kedalam input tag, yaitu dengan memasukkan for loop kedalam sebuah function dan menjalankannya pada eventlistener inputBtn
12. inputBtn akan men-push value apapun yang berada pada inputEl (tag input nya) ke array myLeads, saat inputBtn di klik, ia akan mengclear tag input dengan string kosong (agar dapat dengan mudah di isi kembali tanpa harus menghapus value sebelumnya) lalu menjalankan fungsi untuk melakukan for loops
13. pada fungsi for loops (renderLeads) kita akan merender link yang akan di simpan dan juga memberikan fitur kepada link tersebut agar dapat di klik juga pada saat disimpan, kita dapat melakukan hal itu dengan merender tag anchor pada for loop nya (pada saat di klik, link tersebut terbuka pada new tab)
syntax ini dapat dimasukkan kedalam function renderLeads
    13.1 ================================
            let listItems = ""
        for (i = 0; i < myLeads.length; i++) {
            listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a>" + "</li>"
            console.log(listItems)
        }
        ulEl.innerHTML = listItems
        ================================
14. sebelumnya kita sudah membahas tentang cara lain untuk membuat list tag dengan append atau menggunakan innerHTML dan mengetik lalu merender tagnya secara manual, berikut adalah cara yang lebih 'versatile' yang dapat digunakan untuk membuat tag bahkan line code seperti kita mengetik dengan html, yaitu dengan menggunakan back tick (`) dan itu yang akan kita gunakan disini
15. template string adalah menggunakan multiple line untuk membuat template yang akan di render pada html
*/