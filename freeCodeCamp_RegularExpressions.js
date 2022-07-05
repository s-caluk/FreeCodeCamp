deneme


//Using the Test Method======================================
//test() methoduyla /.../ metnin icinde geciyor mu ? ona bakiyor.
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result);                    //cikti:true

//Match Literal Strings=======================================
//harflere duyarli oldugunu unutma. baska bir örnek.

let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
console.log(testRegex.test(testStr));    //cikti:true

//Match a Literal String with Different Possibilities===============
//bu OR su metinde geciyor mu ? 1 dogru true olur.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let sonuc = petRegex.test(petString);
console.log(sonuc);                       //cikti:true

//Ignore Case While Matching=======================================
// burdaki i , karsilastirirken büyük kücük harfi ignore et demek.

let myyString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; 
console.log(fccRegex.test(myString));     //cikti:false

//Extract Matches==================================================
//syntaxi test() ziddi! obje gibi ciktisi var:
/* ['expressions', index: 8, input: 'Regular expressions', groups: undefined]
0: "expressions"
groups: undefined
index: 8
input: "Regular expressions"
length: 1
[[Prototype]]: Array(0) */

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex));  


//Find More Than the First Match======================================
//mit g , ohne g dene. mit g kac tane tekrar varsa hepsini dönderir. ohne g; sadece ilkini verir.
//hem tekrarlar olsun, hem de büyük kücük harf duyarsiz secsin!

let testStrr = "Repeat, Repeat, Repeat";
let ourRegexx = /repeat/gi;
console.log(testStrr.match(ourRegexx));

//Match Anything with Wildcard Period================================
//joker karakter kullanarak arama yapiyorsun. bsp:

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;                       // run, sun, fun, pun... hepsi olabilir.
console.log(unRegex.test(exampleStr)) ;    //cikti:true

//Match Single Character with Multiple Possibilities============================
