//typeOf operator

//types of datatypes (1.primitive)
/*strings
number boolean undefined
null
bigInt
symbols
 */

let str="javascript"

console.log(typeof(str),str) //-- o/p is string
console.log(typeof str)


let age =22;
console.log(typeof age)

//convert string to number
//method 1
let num1="34"
console.log(typeof num1,num1) // o/p -- string 34

let num2 =+num1
console.log(typeof num2,num2) // o/p -- number 34

//method2
let num3 =Number(num1)
console.log(typeof num3,num3) // o/p-- number 34

// convert number to string
//method1
let num4= 56
console.log(typeof num4,num4) // number 56

let num5 = num4 + ""
console.log(typeof num5,num5) // string 56

//concatenation on numbers 
let num6 = "10" // string
let num7 = "20" // string
console.log(num6+num7) // -- concatenate (1020)

// checking both
 let num8= 40
 let num9= "50"
 console.log(typeof( num8+num9),num8+num9) // string 4050
 
