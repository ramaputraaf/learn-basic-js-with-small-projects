let hands = ["rock", "paper", "scissors"]

function randomHands() {
    return Math.floor(Math.random()*hands.length)
    /* let randomIndex = Math.floor(Math.random()*hands.length)
    return hands[randomIndex] */
}

console.log(hands[randomHands()])
/* console.log(randomHands()) */