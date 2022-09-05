




/*Veriler birçok şekilde saklanabilir ve erişilebilir. Diziler ve nesneler gibi bazı yaygın JavaScript veri yapılarını 
zaten biliyorsunuz. Bu Temel Veri Yapıları kursunda, diziler ve nesneler arasındaki farklar ve 
farklı durumlarda hangilerinin kullanılacağı hakkında daha fazla bilgi edineceksiniz. 
Ayrıca, verilere erişmek ve bunları işlemek için splice() ve Object.keys() gibi yararlı JS yöntemlerini 
nasıl kullanacağınızı da öğreneceksiniz. */


//Use an Array to Store a Collection of Data - Bir Veri Koleksiyonunu Depolamak için Dizi Kullanın====================
//şimdilik bilmeniz gereken tek şey, dizilerin karmaşık nesneleri de depolayabildiğidir.

let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ];

  let yourArray = ["slav", 5, true, null, undefined]        //her type icerebilir
  console.log(yourArray);


  //Access an Array's Contents Using Bracket Notation - Parantez Notasyonunu Kullanarak Dizinin İçeriğine Erişme======
  
  yourArray[2] = "hello" ;
  console.log(yourArray);

  //ADD Items to an Array with push() and unshift() - Push() ve unshift() ile Diziye Öğeler Ekleme===================

  function mixedNumbers(arr) {

    arr.unshift('I', 2, 'three');              //basaekler
    arr.push(7, 'VIII', 9);                    //sonaekler
    return arr;
  }  
  console.log(mixedNumbers(['IV', 5, 'six']));


  //REMOVE Items from an Array with pop() and shift()- Pop() ve shift() ile Diziden Öğeleri Kaldırma=================
  
  function popShift(arr) {
    let popped = arr.pop();                     //sondakini siler
    let shifted = arr.shift();                  //bastakini siler
    return [shifted, popped];
  }
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

//Remove Items Using splice()-Splice() Kullanarak Öğeleri Kaldırma=================================================
//dizilerin başından ve sonundan öğeleri nasıl kaldıracağımızı öğrendik, peki ya ortadaki bir yerden bir öğeyi 
//kaldırmak istiyorsak? Veya aynı anda birden fazla öğeyi kaldırmak mı? İşte burada splice() devreye giriyor.
//splice()'ın ilk parametresi indexi, ikinci parametre ise  silinecek öğe sayısı!

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.shift();
arr.splice(3,4);
console.log(arr);                                          //toplamda 10u versin istiyoruz


//Add Items Using splice() - splice() Kullanarak Öğe Ekleme========================================================

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;                                      //ilk silinecek index
const amountToDelete = 1;                                  //kac tane silinecek
numbers.splice(startIndex, amountToDelete, 13, 14);        //silinen alana 13, 14 ekle
console.log(numbers);


//Copy Array Items Using slice() - Slice() Kullanarak Dizi Öğelerini Kopyalama=======================================
//belirli sayıda öğeyi yeni bir diziye kopyalar veya ayıklar ve çağrıldığı diziye dokunulmadan bırakır.
//2 parametre alır - ilki, çıkarmanın başlayacağı dizindir ve ikincisi, çıkarmanın durdurulacağı dizindir

function forecast(arr) {
    let myfore = arr.slice(2,4);        //index 2 den 4 e kadar kismi kopyalayip myforeye atiyor.
    console.log(myfore);                //cikti: ['warm', 'sunny']
    return myfore;
  }
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


  //Copy an Array with the Spread Operator-  ...X ile bir Diziyi Kopyalayın==========================================

  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
    newArr.push([...arr]);                
      num--;
    }
    return newArr;  }
  
  console.log(copyMachine([true, false, true], 3));

  //Combine Arrays with the Spread Operator=========================================================================
  //diğer büyük avantajı, dizileri birleştirme veya herhangi bir dizinde bir dizinin tüm öğelerini diğerine
  //ekleme yeteneğidir.geleneksel yöntemleri kullansaydık daha karmaşık ve daha ayrıntılı olacakti.

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];


//Check For The Presence of an Element With indexOf() - indexOf() ile Bir Elemanın Varlığını Kontrol Edin============

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');           // -1  yani yok      
fruits.indexOf('oranges');         // 2  index
fruits.indexOf('pears');           // 1 ilk buldugu indexi veriyor

//---------------
function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true : false;
  }
  console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

//--aynisi--------
function quickCheck(arr, elem) {
    if (arr.indexOf(elem) >= 0) {
      return true;
    }
    return false;
  }
  console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));


//Iterate Through All an Array's Items Using For Loops==============================================================
//For Döngülerini Kullanarak Dizinin Tüm Öğelerinde Yineleme
//JavaScript, farklı sonuçlar elde etmek için (her(), forEach(), map(), vb. gibi) birkaç yerleşik yöntem sunar

function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }  
 console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));     //cikti: [12, 14, 80]


 //Create complex multi-dimensional arrays - Karmaşık çok boyutlu diziler oluşturun=================================
let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']       //burasi 'deeper still' olacak!
      ]
    ]
  ]
];

nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);


//Add Key-Value Pairs to JavaScript Objects - JavaScript Nesnelerine Anahtar-Değer Çiftleri Ekleme==================
//objects are just collections of key-value pairs.

const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
  };

tekkenCharacter.origin = 'South Korea';               //ek özellik eklemek istersen
tekkenCharacter['hair color'] = 'dyed orange';        //bosluk varsa böyle eklenir
const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';                      // = buna dikkat! :degil

/*{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};*/

//Modify an Object Nested Within an Object - Bir Nesnenin İçinde Yuvalanmış Bir Nesneyi Değiştirme===================

let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8                  //burasina 10 atadi
    }
  }
};

nestedObject.data.onlineStatus.busy = 10;

//Access Property Names with Bracket Notation - Parantez Gösterimi ile Özellik Adlarına Erişim=======================
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    return foods[scannedItem]                        //burda nasil ulastigina dikkat
  }  
  console.log(checkInventory("apples"));             //cikti:25


//Use the delete Keyword to Remove Object Properties-Nesne Özelliklerini Kaldırmak için Sil Anahtar Kelimesini kullanın==
  
delete foods.apples;
delete foods.plums;
delete foods.strawberries;
console.log(foods);                                 //cikti:bananas: 13 grapes: 35 oranges: 32



//Check if an Object has a Property - Bir nesnenin bir özelliği olup olmadığını kontrol edin=============================
//Artık nesnelere anahtar ekleyebilir, değiştirebilir ve kaldırabiliriz.
//Peki ya bir nesnenin belirli bir özelliği olup olmadığını bilmek istersek? 2 yol var.
/*
users.hasOwnProperty('Alan');
'Alan' in users;
*/

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  if (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
  ) {
    return true;
  }
  return false;
}
/* bu da olur
function isEveryoneHere(userObj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
    userObj.hasOwnProperty(name)
  );
}
*/

//Iterate Through the Keys of an Object with a "for...in" Statement ===================================================
//for...in İfadesi ile bir Nesnenin Anahtarlarını Yineleyin

for (let user in users) {
  console.log(user);              // cikti :"Alan", "Jeff", "Sarah", "Ryan"        
}
//------------------

const users2 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: true
  }
}

function countOnline(usersObj) {

  let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {     //if (obj.user.online === true)   bu da olur
      result++;
    }
  }
  return result;
 
}
console.log(countOnline(users2));            //cikti=2  users2 deki true´lari sayiyor!


//Generate an Array of All Object Keys with Object.keys()=============================================================
//Object.keys() yöntemiyle bir nesnede depolanan tüm anahtarları içeren bir dizi de oluşturabiliriz.


function getArrayOfUsers(obj) {

  return Object.keys(obj);                  //user2 nin keylerini arraye topladi.
 
 }
 console.log(getArrayOfUsers(users2));      // cikti: [ 'Alan', 'Jeff', 'Sarah' ]


 //Modify an Array Stored in an Object-Bir Nesnede Depolanan Diziyi Değiştirme=======================================
 //Anahtar/değer çiftlerini ekleyebilir, değiştirebilir ve kaldırabilir, 
 //anahtarların olup olmadığını kontrol edebilir ve bir nesnedeki tüm anahtarları yineleyebilirsiniz.

 let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [                            //buraya yeni friend nasil eklenir? .push()!
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
   userObj.data.friends.push(friend);
  return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));             //cikti: [ 'Sam', 'Kira', 'Tomo', 'Pete' ]





