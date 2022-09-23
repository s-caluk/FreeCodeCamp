


/* OOP veya Nesne Yönelimli Programlama, yazılım geliştirme sürecine yönelik başlıca yaklaşımlardan biridir. 
OOP'de nesneler ve sınıflar, şeyleri ve yapabileceklerini açıklamak için kodu düzenler.
Bu kursta, this anahtar sözcüğü, prototip zincirleri, yapıcılar ve kalıtım dahil olmak üzere 
JavaScript'te OOP'nin temel ilkelerini öğreneceksiniz.*/

/*JavaScript'teki nesneler, gerçek dünyadaki nesneleri modellemek için kullanılır ve 
onlara gerçek dünyadaki benzerleri gibi özellikler ve davranışlar kazandırır.*/

//Create a Basic JavaScript Object===================================================================

let dog = {
    name: "Karabas",
    numLegs: 4,
    sayLegs: function() {
      return "This dog has " + dog.numLegs + " legs.";
    }
  };

//Use Dot Notation to Access the Properties of an Object=============================================

console.log(dog.name);

// Create a Method on an Object=======================================================================

console.log(dog.sayLegs());

//Make Code More Reusable with the "this" Keyword======================================================

let katze = {
    name: "Lili",
    numLegs: 4,
    sayLegs: function() {
      return "This katze has " + this.numLegs + " legs.";   //this kullanimi!
    }
  };
  console.log(katze.sayLegs());

//Define a Constructor Function / object sablonu==========================================================
//1)Construktor büyük harfli bir adla tanımlanır, 
//2)this anahtar sözcüğünü kullanır. Yapıcı içinde bu oluşturacağı yeni nesneyi ifade eder.
//3)Construktor, bir değer döndürmek yerine özellikleri ve davranışları tanımlar.

  function Dog() {
    this.name = "karabas";
    this.color = "schwarz";
    this.numLegs = 4;
  }

//Use a Constructor to Create Objects===================================================================
//yukaridaki construktor/sablon tipinde bir nesne/object olusturmus olduk

  let hound = new Dog();
  hound.name = "cakal";                //its properties can be accessed and modified:
  console.log(hound);     

//Extend Constructors to Receive Arguments/ constructoru genisletin =========================================
//nesne olustururken parametre vermek daha pratik bir yöntem!
//constructor icinde = ; kullanldigina dikkat! nesne olustururken "" icinne yaziliyor dikkat!

function Dog2(name, color) {         //let Dog2 = function(name, color){...} böyle de yazilir. ayni!
    this.name = name;
    this.color = color;
    this.numLegs = 4;
    }
    
    let terrier = new Dog2("kucukucu", "braun");
    console.log(terrier);

//Verify an Object's Constructor with instanceof/ Bir Nesnenin const.unu instanceof ile doğrulayın=========
//instanceof(örnek demek), bir nesneyi bir const.u karşılaştırmanıza, true veya false döndürmenize olanak tanır.


let Bird = function(name, color) {                  //burasi Bird adli bir construktordur
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  let crow = new Bird("Alexis", "black");         //use instanceof to verify that it is an instance of Bird
  
  console.log(crow instanceof Bird);              //true  crow, Bird const.unun örnegimi ?

//Understand Own Properties / Kendi Özelliklerini Anlayın=================================================
//propertieslerin ciktisini almak gibi...

  function Bird2(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird2("Tweety");
  let ownProps = [];
  
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
  console.log(ownProps);                        // ['name', 'numLegs']

//Use Prototype Properties to Reduce Duplicate Code======================================================= 
// Yinelenen Kodu Azaltmak için Prototip Özelliklerini Kullanın: 
//bsp:numLegs, muhtemelen tüm Bird örnekleri için aynı değere sahip olacağından, 
//esasen her Bird örneğinin içinde yinelenen bir numLegs değişkenine sahipsiniz.Prototipíne ekleyin.

function Dog3(name) {
    this.name = name;                 //own property
}
Dog3.prototype.numLegs = 2;         // prototype property
let beagle = new Dog3("Snoopy");
console.log(beagle.numLegs) ;       //2

//Iterate Over All Properties / Tüm Özellikler Üzerinde Yinele=============================================
//iki tür özellik gördünüz: kendi özellikleri ve prototip özellikleri.
//Kendi özellikleri doğrudan nesne örneğinin kendisinde tanımlanır. Ve prototype özellikleri prototype üzerinde tanımlanır.
//kendi özelliklerini ownProps[] dizisine ve prototip özelliklerini prototypeProps dizisine nasıl ekleyeceğiniz açıklanmıştır.

function Dog4(name) {
    this.name = name;
  }
  
  Dog4.prototype.numLegs = 4;
  
  let beagle2 = new Dog4("Snoopy");
  
  let ownProps_ = [];
  let prototypeProps_ = [];
  
  for (let property in beagle2) {               
    if(beagle2.hasOwnProperty(property)) {
      ownProps_.push(property);
    } else {
      prototypeProps_.push(property);
    }
  }

  console.log(ownProps_);                       //['name']
  console.log(prototypeProps_);                 //['numLegs']
  console.log(beagle2.constructor === Dog4);    //true

// Understand the Constructor Property / const. Özelliğini Anlayın========================================
//Const.un avantajı, ne tür bir nesne olduğunu bulmak için bu özelliği kontrol etmenin mümkün olmasıdır.

function Dog5(name) {                          //const.
    this.name = name;                      
  }
  
  let dog_lolo = new Dog5();                    //const. nesnesi
  
  function joinDogFraternity(candidate) {       //parametre nesnesi Dog5 sablonunda mi ?
    if (candidate.constructor === Dog5){
      return true;
    }else{
      return false;
    }
  }

  console.log(joinDogFraternity(dog_lolo));         //true

//Change the Prototype to a New Object / Prototipi Yeni Bir Nesneyle Değiştirin=============================
 //2.Remember to Set the Constructor Property when Changing the Prototype==================================

function Dog6(name) {                       //const!
    this.name = name;
  }
  
  Dog6.prototype = {                        //prototype!

    constructor: Dog6,                      //2.bunu manuel mutlaka ekleyin, yoksa bazi aksakliklar olabiliyor.
     numLegs: 2,  
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

  let dog66 = new Dog6();
  console.log(dog66.eat);

// Understand Where an Object’s Prototype Comes From======================================================
//Bir Nesnenin Prototipinin Nereden Geldiğini Anlayın: isPrototypeOf() ile sorgulaniyor.

function Bird2(name) {
    this.name = name;
  }
  
  let duck = new Bird2("Donald"); 

 console.log( Bird2.prototype.isPrototypeOf(duck));      //true  
 
 
//Understand the Prototype Chain==========================================================================
//JavaScript'teki tüm nesnelerin bir prototipi var. Ayrıca, bir nesnenin prototipinin kendisi de nesnedir.
//bir prototipin kendi prototipi olabilir! Bu durumda, Bird.prototype'ın prototipi Object.prototype'dir:
//Object.prototype.isPrototypeOf(Bird.prototype);
//In this prototype chain, Bird is the supertype for duck, while duck is the subtype.
//+Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. 
//+Therefore, any object can use the hasOwnProperty method. yukarinin devami:


console.log( typeof Bird2.prototype);                     //object

console.log( Object.prototype.isPrototypeOf(Bird2.prototype)) ;  //true

console.log( duck.hasOwnProperty("name"));                   //true

//Use Inheritance So You Don't Repeat Yourself==========================================================
//Kalıtımı Kullanın, Böylece Kendinizi Tekrar Etmeyin
//Programlamada Kendini Tekrar Etme (DRY:Don't Repeat Yourself ) diye bir prensip vardır.
/*
Bird.prototype = {
    constructor: Bird,
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  
  Dog.prototype = {
    constructor: Dog,
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  */

  function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,    
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,   
  };
  
function Animal() { }  

  Animal.prototype = {                         //supertype (parent)
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    } 
  };

 //Inherit Behaviors from a Supertype=====================================================================
 //Bir Süper Tipten Devralma Davranışları:Object.create(Animal.prototype) gibi
 

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

let animal = Object.create(Animal.prototype); //let animal = new Animal(); ayni,fakat butarzin dezavantajlari var
animal.eat();                                 //nom nom nom 
console.log(animal instanceof Animal);        //true

//Set the Child's Prototype to an Instance of the Parent===================================================
//Çocuğun Prototipini Ebeveynin Bir Örneğine Ayarlayın

function Animal7() { }

Animal7.prototype = {
  constructor: Animal7,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog7() { }

Dog7.prototype = Object.create(Animal7.prototype);

let beagle7 = new Dog7();
beagle7.eat();

//Reset an Inherited Constructor Property===============================================================
//Devralınan const. Özelliğine Sıfırla

function Animall() { }
function Birdd() { }
function Dogg() { }

Birdd.prototype = Object.create(Animall.prototype); //animale bagladi.
Dogg.prototype = Object.create(Animall.prototype);

Birdd.prototype.constructor = Birdd; //Fix the code so duckk.constructor return their respective constructors.  
Dogg.prototype.constructor = Dogg;

let duckk = new Birdd();
let beaglee = new Dogg();

//Add Methods After Inheritance========================================================================
//Kalıtımdan Sonra Yöntem Ekle

function Animalll() { }
Animalll.prototype.eat = function() {
  console.log("nom nom nom");
};
function Birddd() { }
Birddd.prototype = Object.create(Animalll.prototype);  //baglanti
Birddd.prototype.constructor = Birddd;                 //const.u fixledi.

Birddd.prototype.fly = function() {                 //yerel method ekledi 
    console.log("I'm flying!");
  };

  let duckkk = new Birddd();
  duckkk.eat();                     //nom nom nom
  duckkk.fly()                      //I'm flying!

//Override Inherited Methods========================================================================
//Devralınan Yöntemleri Geçersiz Kıl

function Birrd() { }

Birrd.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Birrd.prototype);  //Pinguin->Bird->Object
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";    //önce fly Pinguinde varmi diye bakar, yoksa üste...
};

let penguin = new Penguin();
penguin.fly();                                 

//Use a Mixin to Add Common Behavior Between Unrelated Objects=========================================
//Ancak, kalıtımın en iyi çözüm olmadığı durumlar vardır. Kalıtım, Kuş ve Uçak gibi ilgisiz nesneler 
//için iyi çalışmaz. İkisi de uçabilir, ancak Kuş bir Uçak türü değildir ve bunun tersi de geçerlidir.
//İlişkisiz nesneler için karışımları kullanmak daha iyidir.Mixin herhangi bir nesneyi alır ve ona o yöntemini verir

let bbird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  let glideMixin = function(obj) {
    obj.glide = function() {
      console.log("glide, kayma");
    };
  };
  
  glideMixin(bbird);
  glideMixin(boat);        

  bbird.glide();             //glide, kayma
  boat.glide();

//Use Closure to Protect Properties Within an Object from Being Modified Externally========================
//Bir Nesne İçindeki Özellikleri Harici Olarak Değiştirilmekten Korumak için Kapatmayı Kullanın

function Biird() {
    let weight = 15;
    
    this.getWeight = function() { 
      return weight;
    };
}    
let kus = new Biird();
kus.getWeight();
kus.weight;

//Understand the Immediately Invoked Function Expression (IIFE)=========================================
/*İşlevin bir adı olmadığını ve bir değişkende saklanmadığını unutmayın. 
İşlev ifadesinin sonundaki iki parantez () hemen yürütülmesine veya çağrılmasına neden olur. 
Bu model, hemen çağrılan işlev ifadesi veya IIFE olarak bilinir.*/

(function () {
    console.log("IIFE is ready");
  })();

//Use an IIFE to Create a Module========================================================================
//Modül oluşturmak için bir IIFE kullanın
/*
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
*/

let funModule = ( function (){
    return{
        isCuteMixin : function(obj) {
            obj.isCute = function() {
                return true;
            };
        },
        singMixin : function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            };
        } 
    }
 })();