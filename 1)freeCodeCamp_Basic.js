
function isLess(a, b) {
  
    return a<b;            //sadece bu ayni islevi yapabiliyor!
    
      /*if (a < b) {
        return true;
      } else {
        return false;
      }*/
    
     /* switch(true){
        case a<b:
        return true;
        break
        default:
        return false;
      }*/  
}
    
console.log(isLess(10, 15));   //true 
console.log(isLess(15, 10));   //false
//========================================================

function myFun() {
  console.log("Hello");
  return "World";            //returndan sonrasi calismiyr.
  console.log("byebye")
}
myFun();
//=======================================================
//Accessing Object Properties with Variables. 
//1)dot notation 2)brocket[] notationla objenin propertisine ulasilir.
//ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper";
//delete myDog.tails;  propertisi siler

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";         // Bu konu cok önemli!
const myBreed = dogs[myDog];    //bracket notationla ulasmis!
console.log(myBreed);           //cikti:Doberman

//=====================================================
//Using Objects for Lookups. This is most useful

function phoneticLookup(val) {
  let result = "";

  /*switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }*/
    var lookup = {         //switch-case yada if-else objeye cevrilebliyor!
    "alpha": "Adams",      //bu yol (obje) daha kullanisli.
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  return result;
}
console.log(phoneticLookup("charlie"));   //cikti:Chicago

//====================================================
//checkProp obj nesnesinin propertisimidir? degilse notfound versin. (ciktisi yok)
// If the property is found, return that property's value. If not, return "Not Found".
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];             //dot. notation ile cagirinca islemiyor, anlamadim.
  }else{
    return "Not Found";
  }  
}
//ders:84 / 91 / 92 /100 son ders ANLAMADIM , ingilizcesi önemli! zor=================================================
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line

function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
/*cikti: 
1245: {artist: 'Robert Palmer', tracks: Array(0)}
2468: {albumTitle: '1999', artist: 'Prince', tracks: Array(2)}
2548: {albumTitle: 'Slippery When Wet', artist: 'Bon Jovi', tracks: Array(2)}
5439: {albumTitle: 'ABBA Gold', artist: 'ABBA'}*/

//==Replace Loops using Recursion================================================================
//funcsionun kendi kendini cagirmasi.
//recursion 2 kisimdan olusur base case, recursion! 2 bsp var.
function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];          //burasi recursion=özyineleme
  }
  return product;
}
let dizi=[1,2,3]
console.log(multiply(dizi,dizi.length));   //cikti: 6

function Factorial(n) {
  if (n === 1) {                   //1)Base Case kismi:kosul ve islem
      return n;                    //Base Case
  } else {
      return n * Factorial(n - 1); //2)Recursion kismi
  }
}

Factorial(3);                             //cikti 6

//====================================================================================

function convertToInteger(str) {              //arguman oldugu icin mi ?
  return parseInt(str);                      //neden "str" cift tirnak kullanilmiyor
  
}
console.log(typeof convertToInteger("56"));  //cikti: number , string number oldu

//====parseInt(string, radix);============================================================

function convertToInteger(str) {
  return parseInt(str, 2)            //ordaki 2 radixmis.yani binary 2 li sistemin sonucunu veriyr.
}

convertToInteger("10011");           //cikti 19

//========ternary operator========================================================================

function checkSign(num) {

  return num > 0 ? "positive"
    : num < 0 ? "negative"
    : "zero";
}
console.log(checkSign(10));           //cikti:positive


//=======Use Recursion to Create a Countdown======================================================

function countdown(n){
  return n < 1 ? [] : [n, ...countdown(n - 1)];        //böyle mümkünmüs
//return n < 1 ? [] : [n].concat(countdown(n - 1));     //baska yol
} 

