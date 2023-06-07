/* value truthy dan falsy. berbeda dengan true dan false

falsy :
    - ""
    - 0
    - null (how you as a developer signalize emptiness)
    - undefined (how JavaScript signalizes emptiness)
    - NaN

    null digunakan untuk memberikan petunjuk bahwa emptiness yang terdapat pada situasi tertentu merupakan hasil dari kesengajaan developer, sedangkan undefined merupakan petunjuk emptiness dari JavaScript itu sendiri
*/

/* latihan truthy atau falsy */

console.log(  Boolean("")   ) //
console.log(  Boolean("0")  ) //
console.log(  Boolean(100)  ) //
console.log(  Boolean(null) ) //
console.log(  Boolean([0])  ) //
console.log(  Boolean(-0)   ) //