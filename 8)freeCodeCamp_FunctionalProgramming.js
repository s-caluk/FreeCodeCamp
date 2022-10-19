

/*Bu kursta, pure functions(saf işlevler), mutasyonlardan nasıl kaçınılacağı ve 
.map() ve .filter() gibi yöntemlerle nasıl daha temiz kod yazılacağı 
dahil olmak üzere İşlevsel Programlamanın temel kavramlarını öğreneceksiniz.

Functional programming is about:

1)Isolated functions - değişime tabi olan küresel değişkenleri içeren 
programın durumuna bağımlılık yoktur.

2)Pure functions - aynı girdi her zaman aynı çıktıyı verir

3)Functions with limited side effects - Sınırlı yan etkileri olan fonksiyonlar
fonksiyonun dışındaki programın durumundaki herhangi bir değişiklik veya mutasyon 
dikkatli bir şekilde kontrol edilir

TERIMLER
Callbacks: o işlevin çağrılmasına karar vermek için kaydırılan veya başka bir işleve geçirilen işlevlerdir.
first class functions: Bir değişkene atanabilen, başka bir işleve aktarılabilen veya herhangi bir normal değer gibi başka bir işlevden döndürülebilen işlevlere birinci sınıf işlevler denir.
higher order functions: The functions that take a function as an argument, or return a function as a return value, are called higher order functions.
lambda : When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.

*/



//Understand the Hazards of Using Imperative Code===========================================================
// tabOpen(), tabClose(), and join()

const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
};


Window.prototype.join = function(otherWindow) { // When you join two windows into one window
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};


Window.prototype.tabOpen = function(tab) { // When you open a new tab at the end
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
};


Window.prototype.tabClose = function(index) { // When you close a tab

  
    const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    return this;
};
  
// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
 
  
const finalTabs = socialWindow    // Now perform the tab opening, closing, and other operations
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

//===================================================================================================
//Avoid Mutations and Side Effects Using Functional Programming
//Fonksiyonel programlamayı kullanarak mutasyonlardan ve yan etkilerden kaçının
// A function, ideally, should be a pure function, meaning that it does not cause any side effects.



let fixedValue = 4; // The global variable

function incrementer() {
    return fixedValue + 1
}

var newValue = incrementer(); 
console.log(fixedValue); // Should print 4
console.log(newValue); // Should equal 5

//================================================================================================
//Pass Arguments to Avoid External Dependence in a Function
//Bir Fonksiyonda Dışa Bağımlılıktan Kaçınmak İçin Argümanları kullan

let fixedValuee = 4;

function incrementer2(val) {
  return val+1

}
console.log(incrementer2(10));

//================================================================================================
//Refactor Global Variables Out of Functions


// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", 
"Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  newArr.push(bookName); // Add bookName parameter to the end of the new array.
  return newArr; // Return the new array.
}


function remove(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  if (newArr.indexOf(bookName) >= 0) {
    // Check whether the bookName parameter is in new array.
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
    return newArr; // Return the new array.
  }
}


var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList);


//============================================================================================
//Use the map Method to Extract Data from an Array
//Bir Diziden Veri Çıkarmak için map Yöntemini kullanın


const watchList = [// The global variable
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    
  ];
  
//bu da olur
//const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));

const ratings = watchList.map(item => ({
    title: item["Title"],
    rating: item["imdbRating"]
}));
  
console.log(JSON.stringify(ratings));

//==================================================================================
//Implement map on a Prototype / mapi bir Prototip üzerinde uygulayın 


const s = [23, 65, 98, 5];  // The global variable

Array.prototype.myMap = function(callback) {
  const newArray = [];

/* alternatif
for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
}*/

  this.forEach(a => newArray.push(callback(a)));
 
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

//====================================================================================
//Use the filter Method to Extract Data from an Array
//Bir Diziden Veri Çıkarmak için filter Yöntemini kullanın, yukaridaki watchList´i kullaniyor
//The new array should only include objects where imdbRating is greater than or equal to 8.0. 

  const filteredList = watchList
    .filter(({ imdbRating }) => imdbRating >= 8.0)
    .map(({ Title: title, imdbRating: rating }) => ({ title, rating }));
  
  console.log(filteredList);


//=====================================================================================
//Implement the filter Method on a Prototype
//Write your own Array.prototype.myFilter()

let ss = [23,65,98,5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
 
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i]);
    }
  }
  
  return newArray;
};

var new_ss = ss.myFilter(function(item) {   //filter sarti burada
  return item % 2 === 1;
});

console.log(new_ss); //[23, 65, 5] 


//============================================================================================
//Return Part of an Array Using the slice Method

function sliceArray(anim, beginSlice, endSlice) {
    
    return anim.slice(beginSlice, endSlice);
  
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  
  console.log(sliceArray(inputAnim, 1, 3));   //['Dog', 'Tiger']

//============================================================================================
//Remove Elements from an Array Using slice Instead of splice
//Ekleme Yerine Dilim Kullanarak Diziden Öğeleri Kaldırma
//splice ve slice methodlarinin kullanimina dikkat! 2 örnek ayni sonucu veriyor

 /*
function nonMutatingSplice(cities) {
    
    return cities.splice(0, 3);
  
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  console.log(nonMutatingSplice(inputCities));    //['Chicago', 'Delhi', 'Islamabad']
 */

  function nonMutatingSplice(cities) {
    
    return cities.slice(0, 3);
 
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
 console.log(nonMutatingSplice(inputCities)) ;  // ['Chicago', 'Delhi', 'Islamabad']


 //====================================================================================
 //Combine Two Arrays Using the concat Method

 function nonMutatingConcat(original, attach) {
     
    return original.concat(attach);  
    //return original.push(attach);  
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  console.log(nonMutatingConcat(first, second));     //[1, 2, 3, 4, 5]


//=====================================================================================
//Add Elements to the End of an Array Using concat Instead of push
//Push Yerine concat Kullanarak Dizinin Sonuna Öğeler Ekleme
//const arr = [1, 2, 3]; arr.push(4, 5, 6); 

  function nonMutatingPush(original, newItem) {

    return original.concat(newItem);
  
  }
  
  const firstt = [1, 2, 3];
  const secondd = [4, 5];
  console.log(nonMutatingPush(firstt, secondd));

//======================================================================================
//Use the reduce Method to Analyze Data
//watchList listesini kullaniyor yukarida.
//Christopher Nolan'ın yönettiği filmlerin ortalama IMDB puanını bulmak

function getRating(watchList){
    // Add your code below this line
    const averageRating = watchList
      // Use filter to find films directed by Christopher Nolan
      .filter(film => film.Director === "Christopher Nolan")
      // Use map to convert their ratings from strings to numbers
      .map(film => Number(film.imdbRating))
      // Use reduce to add together their ratings
      .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
    // Divide by the number of Nolan films to get the average rating
    watchList.filter(film => film.Director === "Christopher Nolan").length;
    // Add your code above this line
    return averageRating;
  }
  console.log(getRating(watchList));

  //==================================================================================
  //Use Higher-Order Functions "map, filter, or reduce" to Solve a Complex Problem
  //Karmaşık Bir Sorunu Çözmek için Üst Düzey İşlevleri eşleyin, filtreleyin veya küçültün
  //yalnızca pozitif tam sayıların karelerini içeren yeni bir dizi döndürmelidir.

  const squareList = arr => {
    return arr
            .filter(num => num > 0 && num % parseInt(num) === 0)
            .map(num => Math.pow(num, 2));
  };
  
  const squaredIntegers = squareList([-3, 4.2, 5, 3, -3.2]);
  console.log(squaredIntegers);

/*lösung2-----------------
const squareList = arr => {
  return arr.reduce((sqrIntegers, num) => {
    return Number.isInteger(num) && num > 0
      ? sqrIntegers.concat(num * num)
      : sqrIntegers;
  }, []);
};
*/

//======================================================================================
//Sort an Array Alphabetically using the sort Method

function alphabeticalOrder(arr) {
  
    return arr.sort(function(a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
    });
    
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));  //['a', 'a', 'c', 'd', 'g', 'z']


//======================================================================================
//Return a Sorted Array Without Changing the Original Array

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {

return [].concat(arr).sort(function(a, b) {
    return a - b;
  });

}
console.log(nonMutatingSort(globalArray));    //[2, 3, 5, 6, 9]

//=========================================================================================
//Split a String into an Array Using the split Method
///\W/ Matches any non-word character. 

function splitify(str) {
    
    return str.split(/\W/);
    
  }
 console.log(splitify("Hello World,I-am code"));    //['Hello', 'World', 'I', 'am', 'code']


//=========================================================================================
//Combine an Array into a String Using the join Method

function sentensify(str) {

    return str.split(/\W/).join(" ");  //!!!
  
  }
  
  sentensify("May-the-force-be-with-you");   //['Hello', 'World', 'I', 'am', 'code']

//=========================================================================================
//Apply Functional Programming to Convert Strings to URL Slugs


function urlSlug(title) {
    return title
      .toLowerCase()        
      .trim()               //basta sonda bosluk varsa at
      .split(/\s+/)         //bir yada daha fazla bosluklari sayar, array haline getirir
      .join("-");
  }                         //cikti : a-mind-needs-books-like-a-sword-needs-a-whetstone
  
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")); 

//=========================================================================================
//Use the every Method to Check that Every Element in an Array Meets a Criteria
//Every(), dizideki tüm öğelerin, uygulanan testi geçip geçmediğini test eder.

function checkPositive(arr) {
  
    return arr.every(val => val > 0);
    
}
    
console.log(checkPositive([1, 2, 3, -4, 5]));   //false

//========================================================================================
//Use the some Method to Check that Any Elements in an Array Meet a Criteria
//some(), değerlerden herhangi biri ölçütü karşılıyorsa doğru, değilse yanlış.

function checkPositive(arr) {
    return arr.some(val => val > 0)
  }
  
console.log(checkPositive([1, 2, 3, -4, 5]));   //true

//==========================================================================================
//Introduction to "Currying" and "Partial Application"

/*
function add(x) {
    return y => z => x + y + z;
   }
   
console.log(add(10)(20)(30));
-----------

function add(x) {
  
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
  
}
add(10)(20)(30);
*/

