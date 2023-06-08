/* const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}

greetUser("Howdy!", "Rama", "👋") */

/* //           parameters
function add(num1,num2){
    return num1 + num2
}
//              arguments
console.log(add(3, 4))
console.log(add(9, 102))
 */

/* 
1. parameter berada di dalam sebuah function, sedangkan arguments berada diluar function
*/

function getFirst(arr){
    return arr[0]
}

let firstCard = getFirst([10,20,40])
console.log(firstCard)