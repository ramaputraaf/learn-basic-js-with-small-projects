let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function render(items){
    for (i = 0; i < items.length; i++){
        console.log (items[i])
    }
}

render(myCourses)