

//Sum All Numbers in a Range============================================

function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
console.log(sumAll([1, 4]));   //10


//Diff Two Arrays=======================================================
//iki dizinin simetrik farkını herhangi bir sirada döndürün.

function diffArray(arr1, arr2) {
    const newArr = [];
  
    function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (let i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }
  
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
  
    return newArr;
  }
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));  //[4]


// Seek and Destroy /Aramak ve yok etmek=====================================
/*
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
Passed:destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
Passed:destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
Passed:destroyer([2, 3, 2, 3], 2, 3) should return [].
*/

function destroyer(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    const filteredArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      let removeElement = false;
      for (let j = 0; j < valsToRemove.length; j++) {
        if (arr[i] === valsToRemove[j]) {
          removeElement = true;
        }
      }
      if (!removeElement) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
}

// Wherefore art thou/bu yüzden sen=======================================

function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    const souceKeys = Object.keys(source);
  
    // filter the collection
    return collection.filter(obj => {
      for (let i = 0; i < souceKeys.length; i++) {
        if (!obj.hasOwnProperty(souceKeys[i]) ||
            obj[souceKeys[i]] !== source[souceKeys[i]]) {
          return false;
        }
      }
      return true;
    });
  }
  
  // test here
 console.log(whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }     //cikti: { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }  //bu neredeyse onu cagir!
  ));


//Spinal Tap Case/========================================================
/*
spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
Waiting:spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
*/

function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;
  
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
}
  
// test here
console.log(spinalCase("This Is Spinal Tap"));  //this-is-spinal-tap


//Pig Latin================================================================
//Pig Latin, İngilizce Kelimeleri değiştirmenin bir yoludur.
//- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
//- If a word begins with a vowel, just add way at the end.


function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
  translatePigLatin("consonant");


//Search and Replace================================================================

function myReplace(str, before, after) {
    // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
    if (/^[A-Z]/.test(before)) {
      after = after[0].toUpperCase() + after.substring(1)
    } else {
      after = after[0].toLowerCase() + after.substring(1)
    }
  
    // return string with argument "before" replaced by argument "after" (with correct case)
    return str.replace(before, after);
  }
  
  // test here , "jumped", "leaped" yer degistirmeli

  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

//DNA Pairing/ DNA eslestirme========================================================================
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

function pairElement(str) {
    // Function to match each character with the base pair
    let matchWithBasePair = function(char, pairedArray) {
      switch (char) {
        case "A":
          pairedArray.push(["A", "T"]);
          break;
        case "T":
          pairedArray.push(["T", "A"]);
          break;
        case "C":
          pairedArray.push(["C", "G"]);
          break;
        case "G":
          pairedArray.push(["G", "C"]);
          break;
      }
    };
  
    // Find pair for every character in the string
    const paired = [];
    for (let i = 0; i < str.length; i++) {
      matchWithBasePair(str[i], paired);
    }
  
    return paired;
  }
  
console.log(pairElement("GCG"));

//Missing letters / Eksik harfler=============================================================
//fearNotLetter("abce") should return the string d.

function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
      /* code of current character */
      const charCode = str.charCodeAt(i);
  
      /* if code of current character is not equal to first character + no of iteration
          then a letter was skipped */
      if (charCode !== str.charCodeAt(0) + i) {
        /* if current character skipped past a character find previous character and return */
        return String.fromCharCode(charCode - 1);
      }
    }
    return undefined;
  }
  
 console.log(fearNotLetter("abce")) ;

//Sorted Union / Siralanmis birlik ==================================================================================
//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

function uniteUnique(arr1, arr2, arr3) {
    // Creates an empty array to store our final result.
    const finalArray = [];
  
    // Loop through the arguments object to truly make the program work with two or more arrays
    // instead of 3.
    for (let i = 0; i < arguments.length; i++) {
      const arrayArguments = arguments[i];
  
      // Loops through the array at hand
      for (let j = 0; j < arrayArguments.length; j++) {
        let indexValue = arrayArguments[j];
  
        // Checks if the value is already on the final array.
        if (finalArray.indexOf(indexValue) < 0) {
          finalArray.push(indexValue);
        }
      }
    }
  
    return finalArray;
  }
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //(5) [1, 3, 2, 5, 4]


//Convert HTML Entities==================================================================

function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }
  
  // test here
console.log(convertHTML("Dolce & Gabbana"));


//Sum All Odd Fibonacci Numbers / ===========================================================
//sumFibs(4) should return 5.   sumFibs(6) should return 1, 1, 2, 3, 5 = 8

function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }
  
console.log(sumFibs(4));  // 5 
console.log(sumFibs(8));  // 10


//Sum All Primes / ============================================================

function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
  
    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
  }

//Smallest Common Multiple - En Küçük Ortak Kat========================================
function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;
    // Largest possible value for SCM
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
      upperBound *= i;
    }
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
      // Check if every value in range divides 'multiple'
      let divisorCount = 0;
      for (let i = min; i <= max; i++) {
        // Count divisors
        if (multiple % i === 0) {
          divisorCount += 1;
        }
      }
      if (divisorCount === numberDivisors) {
        return multiple;
      }
    }
  }
  
  console.log(smallestCommons([1, 5]));

//Drop it - birak==========================================================

function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
  }
  
  // test here
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  });


//Steamroller - İç içe diziyi düzleştirin==================================

function steamrollArray(arr) {
    const flattenedArray = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // Recursively flatten entries that are arrays
        //  and push into the flattenedArray
        flattenedArray.push(...steamrollArray(arr[i]));
      } else {
        // Copy contents that are not arrays
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
  };
  
  // test here
  console.log(steamrollArray([1, [2], [3, [[4]]]])) ; //(4) [1, 2, 3, 4]

//Binary Agents - İkili Aracılar==========================================================

function binaryAgent(str) {
    var biString = str.split(" ");
    var uniString = [];
  
    /*using the radix (or base) parameter in parseInt, we can convert the binary
        number to a decimal number while simultaneously converting to a char*/
  
    for (var i = 0; i < biString.length; i++) {
      uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }
  
    // we then simply join the string
    return uniString.join("");
  }
  
  // test here
  console.log(binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  ));    // cikkti ren't bonfires fun!?


//Everything Be True ================================================================

function truthCheck(collection, pre) {
    // Create a counter to check how many are true.
    let counter = 0;
    // Check for each object
    for (let c in collection) {
      // If it is has property and value is truthy
      if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
        counter++;
      }
    }
    // Outside the loop, check to see if we got true for all of them and return true or false
    return counter == collection.length;
  }
  
console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"));

//Arguments Optional=================================================================
//İki bağımsız değişkeni birlikte toplayan bir işlev oluşturun.
//Örneğin, addTogether(2, 3) 5 döndürmeli ve addTogether(2) bir işlev döndürmeli.
//Argümanlardan herhangi biri geçerli bir sayı değilse, tanımsız döndürün

function addTogether() {
    const [first, second] = arguments;
    if (typeof(first) !== "number")
      return undefined;
    if (arguments.length === 1)
      return (second) => addTogether(first, second);
    if (typeof(second) !== "number")
      return undefined;
    return first + second;
  }

//Make a Person=====================================================================
/*getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)  */

const Person = function(firstAndLast) {
    let fullName = firstAndLast;
  
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
  
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
  
    this.getFullName = function() {
      return fullName;
    };
  
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
  
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
  
    this.setFullName = function(name) {
      fullName = name;
    };
  };
  
  const bob = new Person("Bob Ross");
  console.log(bob.getFullName());




  

