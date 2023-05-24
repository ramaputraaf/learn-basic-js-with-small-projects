const playerName = "Per"
let credits = 45

credits -= 10

/* 
1. penggunaan let/const selain untuk menetapkan sebuah variable, tapi juga digunakan untuk memberikan sinyal atau komunikasi kepada programmer lain bahwa variable tersebut dapat atau tidak dapat di ubah, jika variable tersebut di assign menggunakan let atau const
*/
/* ========================================= */
// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
const fullPrice = basePrice - discount + shippingCost

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)
