// Javascript is static or dynamic type language
//JavaScript is a dynamic language and not static, 
// which means that variables can hold values of different types during runtime.
//  Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.

// types of Datatypes
//1) Primitive(call by value) 
//2) Non Primitive(call by reference)

//1) Primitive(call by value) : String, Symbol, Number, Null, Boolean, Bigint, Undefined
const score = 100 //Number
const scoreValue = 100.3 //Number

const isLoggedIn = true // Boolean
const ousideTemp = null // Null

let userEmail; // undefined

const id =Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);// false (Symbol is used for uniqueness.)

const bigNumber = 32145698712344853n


//2) Non Primitive(call by reference) : Arrays, Objects, Functions

const fruits = ["Mango", "Watermelon", "Kiwi", "Jackfruit"] // Arrays

const myObj ={
    name: "Anuja",
    age: 25,
    city: "Mumbai"
} // Object type datatype

const myFunction = function(){
    console.log("hello world");  
}// Function Datatype declare as a Variable.

//Note : by using "typeof" we can findout type of that variable
// Non Primitive datatypes always gives "typeof" as "Object", Function gives Object Function 

console.log(typeof fruits);// object
console.log(typeof id );//symbol
console.log(typeof myFunction);//function
console.log(typeof isLoggedIn);// boolean

