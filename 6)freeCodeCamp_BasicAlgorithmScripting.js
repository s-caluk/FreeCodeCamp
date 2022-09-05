


/*Algoritma, bir şeyin nasıl yapılacağını açıklayan bir dizi adım adım talimattır.
Bu kursta, sıcaklıkları dönüştürmekten karmaşık 2B dizileri işlemeye kadar 
her şeyi yapan algoritmalar yazarak algoritmik düşünmenin temellerini öğreneceksiniz.
=======================================================================================================*/

//Convert Celsius to Fahrenheit=========================================================================
//The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

function convertToF(celsius) {

    let fahrenheit = celsius*(9/5)+32;
    return fahrenheit;
  }  
  console.log(convertToF(30));                         //cikti:86


//Reverse a String- Bir Dizeyi Ters Çevir==============================================================
//You may need to turn the string into an array before you can reverse it.Your result must be a string.

function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
}
console.log(reverseString("hello"));                  //cikti:olleh

//--------------
function reverseString2(str) {
    return str
      .split("")                                     //elemanlari bsp:virgule göre ayri ayri alabilmeni sagliyor
      .reverse()                                     //arrayin elemanlarini ters cevirir.
      .join("");                                     //yeni bir dize oluşturur ve döndürür.
  }
console.log(reverseString("merhaba"));               //cikti:abahrem


//Factorialize a Number - Bir Sayıyı Faktoringe Al========================================================
// 5!=5*4*3*2*1 = 120 gibi

function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
}  
console.log(factorialize(5)) ;
//----------------

function factorialize2(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize2(num - 1);
  }
  
console.log(factorialize2(5)) ;
//-------------------

function factorialize3(num) {
    return num < 0 ? 1 :
      new Array(num)
        .fill(undefined)                                                  //fill() - doldur
        .reduce((product, _, index) => product * (index + 1), 1);         //reduce() - girdilerin * yada + verir.
  }
console.log(factorialize3(5)) ;


//Find the Longest Word in a String-Bir Dizedeki En Uzun Kelimeyi Bulun========================================
//Sağlanan cümledeki en uzun kelimenin uzunluğunu döndürün. Yanıtınız bir sayı olmalıdır.

function findLongestWordLength(str) {
    let words = str.split(' ');                      //bosluklara göre stringi ayir
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    return maxLength;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))  ;
//---------------

function findLongestWordLength2(str) {
    return Math.max(...str.split(" ").map(word => word.length));
  }
console.log(findLongestWordLength2("The quick brown fox jumped over the lazy dog"))  ;



//Return Largest Numbers in Arrays-Dizilerdeki En Büyük Sayıları Döndür======================================
//bunun 10 farkli cözümü sitede. Math.max.apply() ya da Math.min.apply() kullanisli metodlar

function largestOfFour(arr) {  
  var maxNumbers = [];
  
  for (var i = 0; i < arr.length; i++) {
    maxNumbers.push(Math.max.apply(null, arr[i]));   //apply() arrayde secilen degiskeni cagirir.
  }
  
  return maxNumbers;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


//Confirm the Ending - Sonu Onaylayın===================================================================

function confirmEnding(string, target) {
  if (string.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}
console.log(confirmEnding('Bastian', 'an'));


//Repeat a String Repeat a String=========================================================================
//Verilen bir dizgiyi (birinci argüman) num kez (ikinci argüman) tekrarlayın. Sayı pozitif bir sayı değilse boş bir dize döndürür.
//There are the three approaches I’ll cover: using a while loop, using recursion, using ES6 repeat() method
//aslinda islem repeat() ile yapiliyor fakat onu kullanmadan yap diyor.

function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
console.log(repeatStringNumTimes("abc", 3));


//Truncate a String /Bir Dizeyi Kes=====================================================================
//slce() dizenin bir bölümünü çıkarır ve orijinal dizeyi değiştirmeden onu yeni bir dize olarak döndürür.

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}                                                         //cikti:A-tisket...
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//Finders Keepers / Kim bulduysa onundur====================================================================
//soru "ilk öğeyi döndüren bir işlev oluşturun" diyor.

function findElement(arr, func) {
  var num;
  
  for(var i = 0; i <arr.length; i++) {
    
    if(func(arr[i]) === true) {
      num = arr[i];
      
      return num;
      
    }
  }                                   //% isareti kalani sorgular!
}                                     //cikti:2 ilk buldugunu dönderdi!
console.log(findElement([1, 2, 3, 4, 6, 8], function(num){ return num % 2 === 0; }));


//Boo who / Check if a value is classified as a boolean primitive.==========================================
  // We check to see if our input is exactly equal to the boolean true or boolean false. 

function booWho(bool) {
  
  if (bool === true || bool === false) {
    return true
  } else {
    return false
  }
}
console.log(booWho(null));

//Title Case a Sentence=====================================================================================
//Sağlanan dizeyi, her kelimenin ilk harfi büyük olacak şekilde döndürün.

function titleCase(str) {
  const newStr = str.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
  return newStr;
}
console.log(titleCase("I'm a little tea pot"));

//2.cözüm-------
var newStr2 =  'this is very interesting'.replace(/\b[a-z]/g, (x) => x.toUpperCase())

console.log(newStr2);

//Slice and Splice /Dilim ve Ekleme========================================================================

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));    //[4,1,2,3,5,6]

//Falsy Bouncer / sahte fedai=============================================================================
//Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {

  var check = arr.filter(function(i) {
    return Boolean(i);
  });

  return check;
}
console.log(bouncer([7, "ate", "", false, 9]));            //[7, "ate", 9]
console.log(bouncer([null, NaN, 1, 2, undefined]));        //[1, 2]    

//Where do I Belong /nereye aitim?=======================================================================
//hangi indexe ait oldugunu bulacagiz.

function getIndexToIns(arr, num) {
  arr.push(num)
  let arr2 = arr.sort(function(a, b) {
      return a - b;
  });

  return arr2.indexOf(num);
}
console.log(getIndexToIns([40, 60], 50));        //1
console.log(getIndexToIns([2, 5, 10], 15));      //3

//Mutations================================================================================================
//Dizinin ilk öğesindeki dize, dizinin ikinci öğesindeki dizenin "tüm harflerini" içeriyorsa true döndürür.

function mutation(arr) {
  let target = [...arr[0].toLowerCase()];
  let source = [...arr[1].toLowerCase()];

  return source.every(item => (target.indexOf(item) > -1));
}

console.log(mutation(["hello", "hey"]));       //false (y yok)
console.log(mutation(["Alien", "line"]));       //true

//Chunky Monkey /tıknaz maymun=============================================================================
//Bir diziyi (birinci argüman) boyutun uzunluğunu (ikinci argüman) gruplara ayıran 
//ve onları iki boyutlu bir dizi olarak döndüren bir fonksiyon yazın.

function chunkArrayInGroups (arr, size) {  
  const chunks = []
  arr = [].concat(...arr)

  while (arr.length) {
    chunks.push(
      arr.splice(0, size)
    )
  }

  return chunks
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));    //[["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));   //[[0, 1, 2], [3, 4, 5], [6]]