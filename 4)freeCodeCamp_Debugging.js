




/*Debugging : Hata ayıklama, kodunuzu gözden geçirme, sorunları bulma ve düzeltme işlemidir.
Koddaki sorunlar genellikle üç biçimde ortaya çıkar: 
-> programınızın çalışmasını engelleyen sözdizimi hataları, 
-> kodunuzun beklenmeyen davranış gösterdiği çalışma zamanı hataları,
-> kodunuzun istediğinizi yapmadığı mantıksal hatalar. 
*/

//Use the JavaScript Console to Check the Value of a Variable===================================================

let a = 5;
let b = 1;
a++;
console.log(a);


//Understanding the Differences between the freeCodeCamp and Browser Console===================================
//Chrome: Ctrl + Shift + J (F12)   ,   Firefox: Ctrl + Shift + K  ,  webdeveloperConsole

let output = "slav";
console.log(output);
//console.clear();


// Use typeof to Check the Type of a Variable====================================================================
// 7 primitiv DataType : Boolean, Null, Undefined, Number, String, Symbol (new with ES6), and BigInt (new with ES2020), 
// and one 1 type for mutable items: "Object"  (array de objedir!)

let three = "3";
console.log(typeof "three");


//Catch Misspelled Variable and Function Names-Yanlış Yazılan Değişken ve İşlev Adlarını Yakala==================
//Burda harf hatasi , büyük/kücük harf uyumsuzlugunu yakaladik.

let receivables = 10;
let payables = 8;
//let netWorkingCapital = recievables - payable;    //s yok , ie yeri farkli


//Catch Unclosed Parentheses, Brackets, Braces and Quotes - Kapatılmamış Parantezleri, cift tirnak vs==============
// let myArray = [1, 2, 3;       gibi...


//Catch Mixed Usage of Single and Double Quotes-('') ve ("") Karışık Kullanımını Yakalayın==========================

let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";    // \ olmazsa hata!
console.log(innerHtml);


//Catch Use of Assignment Operator(=) Instead of Equality Operator(==) -> = , == , === /===================================

let x = 7;
let y = 9;
let result = "to come";

if(x == y) {                               //burdaki esitligi unutma diyor
  result = "Equal!";
} else {
  result = "Not equal!";
}
console.log(result);


//Catch Missing Open and Closing Parenthesis After a Function Call==================================================

function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let resultt = getNine();                  //burdaki parantezi unutma diyor.
  console.log(result);


//Catch Arguments Passed in the Wrong Order When Calling a Function=============================================

function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(base, exp);      //(b, e) siralamasini dogru girin diyor.
  console.log(power);


//Catch Off By One Errors When Using Indexing-İndekslemeyi Kullanırken Bir Hatadan Kurtulmak======================

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  for (let i = 0; i < len; i++) {           //i=1 den baslamaz dikkat et diyor
    console.log(firstFive[i]);
  }
}
countToFive();


//Use Caution When Reinitializing Variables Inside a Loop===========================================================
//Bir döngü içindeki değişkenleri yeniden başlatırken dikkatli olun



//Prevent Infinite Loops with a Valid Terminal Condition - Sonsuz Döngüleri Önleyin===========================================




