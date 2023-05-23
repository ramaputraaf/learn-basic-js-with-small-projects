/* 
counting in js
1. for (start condition; finish condition; step size)
*/

/* for (let count = 10; count < 21; count += 1) {
    console.log(count);
} */

/* latihan 1 (make your first loop) */
/* for (let i = 0; i <= 100; i += 10) {
    console.log(i);
} */

/* latihan 2 (arrays + for loop)
membuat menampilkan semua message pada array message dengan for loop */

/* let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear"
]

for (let i = 0; i < messages.length; i += 1) {
    console.log(messages[i]);
} */

/* latihan 3 (render sentence in greetingEl paragraph using a for loop and .textContent) */

/* let sentence = ["Hello", "my", "name", "is", "Per"];
let greetingEl = document.querySelector("#greeting-el");

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
} */