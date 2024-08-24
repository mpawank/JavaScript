let str="     javascript     "

// length of str which include spaces
let len=str.length

console.log(len)// -- 20 which includes 10 white spaces

//trim method
console.log("after applying trim method")
let trimmedstr = str.trim()
let trimmedstrlen=trimmedstr.length
console.log(trimmedstr)
console.log(trimmedstrlen)

// convert to uppercase and lowercase

console.log(str.toUpperCase()) //-- converted to upper case

console.log(str.toLowerCase()) //-- converted to lowercase


// slice method--- to extract the part of a string wheather it is in middle or present in between
//syntax-- slice(startIndex,LastIndex-1)
let newStr =str.slice(0,2);
console.log(str)
