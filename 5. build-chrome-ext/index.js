/* function saveLead() {
    console.log("Button Clicked from onclick element!")
} */
let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")

inputBtn.addEventListener("click", function() {
    console.log("Button Click fromm Event Listener!")
})



/* 
1. addEventListener berfungsi sama dengan onclick element pada html, bedanya adalah addEventListener merupakan element dari javascript sendiri untuk merekam event yang terjadi pada tag/element dengan identitas tertentu yang sudah di berikan, disini addEventListener merekam event yang terjadi pada button input-btn
2. menggunakan addEventListener di anjurkan karena memberikan tampilan yang lebih rapih pada html, dan memisahkan kegunaannya masing2 agar tidak tercampur
3. disini untuk selanjutnya kita akan menggunakan addEventListener
*/