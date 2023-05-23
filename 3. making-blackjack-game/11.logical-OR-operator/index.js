let likesDocumentaries = true
let likesStartups = false

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}

/* 
1. penggunaan || adalah untuk OR operator, jika salah satu kondisi dalam if tersebut terpenuhi maka apapun didalamnya akan dijalankan
*/