/* 
1. Objects merupakan bentuk data yang digunakan untuk menyimpan berbagai data secara mendalam atau disebut juga - composite / complex data type
*/

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html","css"]
}

/* 
1. diatas merupakan contoh penggunaan object (berupa course yang disediakan website tertentu)
2. untuk mengakses data-data tersebut kita dapat menggunakan yang disebut, dot notation. seperti dibawah
3. menggunakan nama object, dan data yang dipilih dalam object tersebut (ex: course.level, course.isFree)
*/

console.log(course.length)

/* 
1. selain itu kita dapat menggunakan bracket notation yaitu course["length"]
2. penggunaan bracket notation biasanya kita digunakan dalam kondisi2 tertentu
*/

/* 
create my first object
*/

let airbnbDetails = {
    title: "Live like a king in my castle",
    price: 190,
    superHost: true,
    images: ["img/castle1.png"]
}

console.log(airbnbDetails.title)