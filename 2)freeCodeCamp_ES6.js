
//Compare Scopes of the var and let Keywords================
//var ve letin kapsamlarini tekrar etti.
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);    //cikti: Block scope i is:  block scope
  }
  console.log('Function scope i is: ', i);   //cikti:Function scope i is:  function scope
  return i;
} checkScope();                     

//Mutate an Array Declared with const====================
//constun ve arrayin mutasyonu indexe atama yaparak olur diyor!

const s = [5, 6, 7];
s[2] = 45;
console.log(s);                              //cikti:(3) [5, 6, 45]


//Prevent Object Mutation======================
//veri mutasyonunu önlemek için bir Object.freeze işlevi! matematiksel sabitlerin değişmesini önlemek için Object.freeze kullanacaksınız.

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);                           //cikti: {name: 'FreeCodeCamp', review: 'Awesome'} degismedi!

//Use Arrow Functions to Write Concise Anonymous Functions=======================================
//yani const let bir degere fuksiyon atiyorsun. kisa yol. Set Default Parameters for Your Functions

const myFunc = () => "value";
const doubler = item => item * 2; //single parameter
const multiplier = (item, multi) => item * multi; 

const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting());           //cikti:Hello Anonymous


//Use the ""Rest Parameter" with Function Parameters==========================================
//yani funksiyona parametre olarak "spreed operator" gönderiyor. rest parameter=spreed operator

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
//------------

const sum = (...restPar) => {
  const args = [...restPar];
  return args.reduce((a, b) => a + b, 0);  //burda reduce() girdilerin toplamini verir
}                                          // args.reduce((a, b) => a * b, 1)   carpar

console.log(sum(0,1,2));                    //cikti: 3

//Use the Spread Operator to Evaluate Arrays In-Place=========================================
//spreed operaator ile bir arrayin degere atanmasi

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = [...arr1]; 

console.log(arr2);

//Use Destructuring Assignment to Extract Values from Objects==============
//Objelerde Destructuring / ES5 de böyle cagrilirdi:/*const today = HIGH_TEMPERATURES.today; const tomorrow = HIGH_TEMPERATURES.tomorrow;*/

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today, tomorrow} = HIGH_TEMPERATURES;   //ayni isimle aliyor
console.log(today, tomorrow);


const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES; 
console.log(highToday, highTomorrow);          //farkli isme atayip aldi

//Use Destructuring Assignment to Assign Variables from Nested Objects=======================================
//ic ice objelerde destructing

const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
const { johnDoe: { age, email }} = user;      //same Name
console.log(age, email);

const { johnDoe: { age: userAge, email: userEmail }} = user;
console.log(userAge, userEmail);              //different Name

//Use Destructuring Assignment to Assign Variables from Arrays===========================
//

const [x, y, , , z, ...w] = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(x, y);                            //cikti: 1 2 

console.log(x, y, z);                         //cikti: 1 2 5

console.log(...w);                            //cikti: 6 7 8
//----------

let a = 15, b = 25;
[a, b] = [b, a];                              //cikti: 25 15  - a ve b nin degerleri degisti.
console.log(a,b);

//Use Destructuring Assignment to Pass an Object as a Function's Parameters=======================
//fonksiyon prametre olarak bir obje aliyor!

const half = ({max, min}) => (max + min) / 2.0; 

//Create Strings using Template Literals===========================================================
//forla iteration örnegi yapti.

const result = {
  failure: ["no-var", "var-on-top", "linebreak"],
};
function makeList(arr) {

  const failureItems = [];

  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList);    

/*cikti:
0: "<li class=\"text-warning\">no-var</li>"
1: "<li class=\"text-warning\">var-on-top</li>"
2: "<li class=\"text-warning\">linebreak</li>" */   

//Write Concise Object Literal Declarations Using Object Property Shorthand============================
//name:name age:age vs yapmana gerek yok. kisayoldan fonk. ikisini esitliyor.

const createPerson = (name, age, gender) => {
  return ({name, age, gender});
  };
  
let person1 = createPerson("Zodiac Hasbro", 56, "male");
console.log(person1);

//Write Concise Declarative Functions with ES6========================================================
// obje icinde fonksiyonun kisa yazilis bicimi :shorthand syntax described:

const person = {
  name: "Taylor",
  /*sayHello: function() {             bu uzun yazilmis syntax
    return `Hello! My name is ${this.name}.`;   */
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
let msg = person.sayHello();
console.log(msg);

//Use class Syntax to Define a Constructor Function================================================
/*JS sınıfları bir nesne değildir. Nesne tanımlamak için sınıf oluşturulur.
Yeni bir nesne oluşturulduğunda eğer sınıfın içerisinde constructor metodu varsa otomatik olarak çalışır.
Nesne özelliklerini başlatmak için kullanılırlar. 
Yani kısaca sınıf başladığında bir işlem yaptırmak istiyorsak ilk olarak bu metot çalışır.
Eğer bir constructor tanımlamazsanız Javascript otomatik olarak boş bir constructor çalıştırır

//class: fonksion, construktor:clasla birlikte obje taslagi olusturuyor, new: yeni obje üretiyor
//contruktoru classla birlikte otomatik calisan method gibi düsün.
/*var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');  es5 de böyleymis */

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
console.log(zeus);             //cikti: SpaceShuttle {targetPlanet: 'Jupiter'}
//-------------------
class Araba {
  constructor(ad, model) {
    this.ad = ad;
    this.model = model;
  }
}
let araba = new Araba("Bmv","e220D");
console.log(araba.ad, araba.model);     //Bmv e220D
   

//Use getters and setters to Control Access to an Object========================================================
//Not: _Özel bir değişkenin adının önüne bir alt çizgi (_) koymak gelenekseldir.

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);      //cikti: anonymous
novel.writer = 'newAuthor';
console.log(novel.writer);     //cikti: newAuthor
//-------------

class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; 
console.log(temp);         //76 fahrenheit girdi, cikti: 24.44 in Celsius 

thermos.temperature = 26;
temp = thermos.temperature; 
console.log(temp);        //cikti: 26 in Celsius


//Create a Module Script=======================================================================
/*js dosyasini html sayfasini eklemeyi gösterdi. type: module dikkat!

<html>
  <body>
    
  <script type="module" src="index.js"></script>
  </body>
</html> */


//Use export to Share a Code Block============================================================
//diyelim bir js dosyasinda add methodunuz var. baska js dosyalarinda kullanacaksin.
/*önce export yapmaliymissin. örnek;

const add = (x, y) => {
  return x + y;
} 
export { add }; */

//Reuse JavaScript Code Using import===================================================
/*baska js dosyasindan import nasil yapilir? örnek;

import { add, subtract } from './math_functions.js';     gibi*/


//Use * to Import Everything from a File==========================================================
/* bir js dosyasinin tüm metodlarini baska isimde alma;  

import * as myMathModule from "./math_functions.js";
myMathModule.add(2,3);
myMathModule.subtract(5,3);*/

//Create an Export Fallback with export default===================================================
/* varsayılan dışa aktarmayı var, let veya const ile kullanamazsınız.

export default function add(x, y) {
  return x + y;
}  
*/

//Import a Default Export=========================================================
/* süslü parantezsiz {} import yapti!

import add from "./math_functions.js";  
*/

//Create a JavaScript Promise================================================================
/* söyle görünüyor;

const myPromise = new Promise((resolve, reject) => {

});
*/

//Complete a Promise with resolve and reject==================================================

const makeServerRequest = new Promise((resolve, reject) => {
 
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});                                //cikti yok
//-------
makeServerRequest.then(result => {  //Bir sunucu isteği yaptığınızda bu biraz zaman alır 
  console.log(result);              //ve tamamlandıktan sonra genellikle sunucudan gelen yanıtla bir şeyler yapmak istersiniz. 
});                                 //Bu, then yöntemi kullanılarak elde edilebilir. cikti:We got the data
//--------

makeServerRequest.catch(error => {  //Handle a Rejected Promise with catch
  console.log(error);               //false dersen cikti:Data not received
});                                 

