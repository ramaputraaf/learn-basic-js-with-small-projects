// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

let largeCountries = [
    "Tuvalu", "India", "USA",
    "Indonesia", "Monaco"
]

largeCountries.pop()
largeCountries.shift()
largeCountries.unshift("China")
largeCountries.push("Pakistan")

console.log(largeCountries)