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
//console.log(stringNumber) //33
//console.log(typeof stringNumber); //string

//************************************** Operations ********************************************//

let value = 7
let negValue = -value
//console.log(negValue);

//console.log(2+2);
//console.log(5-2);
//console.log(5*2);
//console.log(2**2);
//console.log(2/2);
//console.log(5%2);

let str1 = "Hello"
let str2 = " Anuja"

let str3 = str1 + str2
//console.log(str3);

//console.log("1" + 2)//12 string + number = string(condidering first datatype and then operation)
//console.log(1 + "2");//12 number + string = number(condidering first datatype and then operation)
//console.log("1" + 2 + 2);//122 string + numbers = string(condidering first datatype and then operation)
//console.log(1 + 2 + "2");//32 numbers + string = number(condidering first datatype and then operation)

//console.log(true);//true
//console.log(+true);//1
//console.log(+"");//0

let num1, num2, num3;
num1 = num2 = num3 = 5+5

//let gameCounter = 10;
//gameCounter++
//console.log(gameCounter);

let gameCounter = 100;
++gameCounter
//console.log(gameCounter);

// prefix and postfix increment and decrement work as same but the difference is that
//

let x = 3;
const y = x++;
// x is 4; y is 3
//console.log(x); //4
//console.log(y); //3
// postfix : the increment operator increments and returns the value before incrementing.

let p = 3;
const q = ++p;
// p is 4; q is 4
//console.log(p); //4
//console.log(q); //4
//prefix :the increment operator increments and returns the value after incrementing.










