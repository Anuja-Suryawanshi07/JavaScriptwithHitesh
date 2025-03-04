let score = 33
//console.log(typeof score); //number

 score = "33"
 //console.log(typeof score);//string

 let valueInNumber = Number(score)
 //console.log(typeof valueInNumber); //number

 //but when you make score = 33abc it still gives a type as number 
 // and when we featch the valueInNumber then it gives us NaN(Not a Number)
 //so we have to carefully check the type and value while using it in any code it might create a issue.
 
 score = "33abc"
 let valueInNumber1 = Number(score)
 //console.log(typeof valueInNumber1); //number
 //console.log(valueInNumber1); //NaN

 score = null
 let valueInNumber2 = Number(score)
 //console.log(typeof valueInNumber2); //number
 //console.log(valueInNumber2); // 0

 score = undefined
 let valueInNumber3 = Number(score)
 //console.log(typeof valueInNumber3); //number
 //console.log(valueInNumber3); // NaN

 score = true
 let valueInNumber4 = Number(score)
 //console.log(typeof valueInNumber4); //number
 //console.log(valueInNumber4); // 1

 score = "Anuja"
 let valueInNumber5 = Number(score)
 //console.log(typeof valueInNumber5); //number
 //console.log(valueInNumber5); // NaN

 let isLoggedIn = 1
 let booleanIsLoggedIn = Boolean(isLoggedIn)
 //console.log(booleanIsLoggedIn); // true
 
// 1 => true 0 => false
// " " => false,  "Anuja" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber) //33
console.log(typeof stringNumber); //string

