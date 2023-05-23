let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

function discAgeBased() {
    if (age < 6) {
        return "free"
    } else if (age <= 17) {
        return "child discount"
    } else if (age <= 26) {
        return "student discount"
    } else if (age <= 66) {
        return "full price"
    } else {
        return "senior citizen discount"
    }
}

console.log(discAgeBased())