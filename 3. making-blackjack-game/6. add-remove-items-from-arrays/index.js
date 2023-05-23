let cards = [6,7];
cards.push(6);
/* console.log(cards); */

/* 
1. menggunakan method push, kita dapat memasukkan item kedalam sebuah arrays
 */

/* latihan */
// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage);

messages.pop();
console.log(messages);;

/*
1. untuk menghapus/removing item paling akhir dari sebuah array, kita dapat menggunakan pop (namaObject.pop())
2. untuk menghapus item paling awal dari sebuah array, kita dapat menggunakan shift (namaObject.shift())
*/