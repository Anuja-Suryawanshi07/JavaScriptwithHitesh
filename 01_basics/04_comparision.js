//console.log(2 > 1);//true
//console.log(2 >= 1);//true
//console.log(2 < 1);//false
//console.log(2 <= 1);//false
//console.log(2 == 1);//false
//console.log(2 != 1);//true

//console.log("2" > 1);//true here conversion of string to number is done automatically therefore result is true
//console.log("02" > 1);//true here conversion of string to number is done automatically therefore result is true

//note: while comparision strictly use same datatypes 

//console.log(null > 0);//false
//console.log(null == 0);//false
//console.log(null >= 0);//true

/* for above result reason is that equalitiy check(==) and comparision (>, <, >=, <=) work differently
Comparision convert null into a number treating it as a 0 so, result of (3) null >= 0 is true and 
result of (1) null > 0 is false  */

//console.log(undefined == 0);//false
//console.log(undefined > 0);//false
//console.log(undefined < 0);//false
//console.log(undefined >= 0);//false
//console.log(undefined <= 0);//false

// === strictly equal checks datatypes also

//console.log("2" == 2);//true here string is converted into number so true
//console.log("2" === 2);//false here datatypes are different so false









