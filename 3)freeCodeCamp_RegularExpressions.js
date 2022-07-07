



/*Genellikle "regex" veya "regexp" olarak kısaltılan normal ifadeler, programcıların metni eşleştirmesine, 
aramasına ve değiştirmesine yardımcı olan kalıplardır.Bu kursta, istediğiniz herhangi bir metni eşleştirmek için özel karakterleri, 
yakalama gruplarını, olumlu ve olumsuz bakış açılarını ve diğer teknikleri nasıl kullanacağınızı öğreneceksiniz.
##########################################################################################################*/

//Using the "Test Method" ===========================================================
//test() methoduyla /.../ metnin icinde geciyor mu ? ona bakiyor.

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result);                    //cikti:true


//Match Literal Strings============================================================
//harflere duyarli oldugunu unutma. baska bir örnek.

let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
console.log(testRegex.test(testStr));    //cikti:true


//Match a Literal String with Different Possibilities==============================
//bu OR su metinde geciyor mu ? 1 dogru true olur.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let sonuc = petRegex.test(petString);
console.log(sonuc);                       //cikti:true


//Ignore Case While Matching===============================================================
// burdaki i , karsilastirirken büyük kücük harfi ignore et demek.

let myyString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; 
console.log(fccRegex.test(myString));     //cikti:false


//Extract "Match Metodu" ===================================================================
//syntaxi test() methodunun ziddi! obje gibi ciktisi var:

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex));  


//Find More Than the First Match=============================================================
//mit g , ohne g dene. mit g kac tane tekrar varsa hepsini dönderir. ohne g; sadece ilkini verir.
//hem tekrarlar olsun, hem de büyük kücük harf duyarsiz secsin!

let testStrr = "Repeat, Repeat, Repeat";
let ourRegexx = /repeat/gi;
console.log(testStrr.match(ourRegexx));


//Match Anything with Wildcard Period==========================================================
//joker karakter kullanarak arama yapiyorsun. bsp:

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;                       // run, sun, fun, pun... hepsi olabilir.
console.log(unRegex.test(exampleStr)) ;    //cikti:true


//Match Single Character with Multiple Possibilities=============================================
//Örneğin, bag, big ve bug'ı eşleştirmek istiyorsunuz ancak bog değil. 
//Bunu yapmak için /b[aiu]g/ normal ifadesini oluşturabilirsiniz.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex));             //['big', index: 0, input: 'big', groups: undefined]
bagStr.match(bgRegex);
bugStr.match(bgRegex);
console.log(bogStr.match(bgRegex));             //cikti:null
//-----------
let quoteSample = "Beware of bugs in the above code";
let vowelRegex = /[aeiou]/gi ;                  //g:tekrarlari versin. i:büyük/kücük harf duyarsiz olsun.
let resultt = quoteSample.match(vowelRegex); 
console.log(resultt);                          //cikti:['e', 'a', 'e', 'o', 'u', 'i', 'e', 'a', 'o', 'e', 'o', 'e']


//Match Letters of the Alphabet-Alfabenin Harflerini Eşleştir===========================================================
//Örneğin, a'dan e'ye kadar olan küçük harfleri eşleştirmek için [a-e] kullanırsınız.
//cikti:(21) ['T', 'h', 'e', 'q', 'u', 'i', 'c', 'k', 'b', 'r', 'o', 'w', 'n', 'f', 'o', 'x', 'j', 'u', 'm', 'p', 's']


let quoteSamplee = "The quick brown fox jumps.";        //a dan z ye tüm harfleri versin istiyorsan
let alphabetRegex = /[a-z]/gi ; 
let resulttt = quoteSamplee.match(alphabetRegex);
console.log(resulttt);     


//Match Numbers and Letters of the Alphabet-Alfabedeki Rakam ve Harfleri Eşleştirme======================================
//use the case insensitive flag(i) , use the global flag(g).
//cikti: (12) ['J', 'e', 'n', 'n', 'y', '8', '6', '7', '5', '3', '0', '9']

let jennyStr = "Jenny8675309";
let my_Regex = /[a-z0-9]/ig;                             
console.log(jennyStr.match(my_Regex));  


//Match Single Characters Not Specified==============================================================================
//Örneğin, /[^aeiou]/gi sesli harf olMayan tüm karakterlerle eşleşir. 
//., !, [, @, / ve beyaz boşluk gibi karakterlerin eşleştiğine dikkat edin 
//olumsuzlanan sesli harf seti(a negated character set,) yalnızca sesli harfleri hariç tutar.
//cikti:(9) [' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.']      (bosluk ve noktayi da aliyor)

let quoteSampleee = "3 blind mice.";
let myRegexx = /[^aeiou^0-9]/gi; 
let son = quoteSampleee.match(myRegexx); 
console.log(son);


//Match Characters that Occur One or More Times-Bir veya Daha Fazla Kez Meydana Gelen Karakterleri Eşleştir=============
//karakter veya desen ardışık olarak mevcut olmalıdır! + karakteri ile yapilir.
//Örneğin, /a+/g, abc'de bir eşleşme bulur ve ["a"] döndürür. + nedeniyle, aabc'de tek bir eşleşme bulur ve ["aa"] döndürür.
//Bunun yerine abab dizesini kontrol etseydi, iki eşleşme bulur ve ["a", "a"] döndürür!

let difficultSpelling = "Mississippi";
let myRRegex = /s+/gi; 
let sonn = difficultSpelling.match(myRRegex);
console.log(sonn);                                    //cikti: (2) ['ss', 'ss']

//Match Characters that Occur Zero or More Times - Sıfır veya Daha Fazla Kez Meydana Gelen Karakterleri Eşleştir========
//Bunu yapacak karakter yıldızdır: *.
//cikti: ['Aaaaaaaaaaaaaaaa', index: 0, input: 'Aaaaaaaaaaaaaaaarrrgh!', groups: undefined]

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*/;
let sonucc = chewieQuote.match(chewieRegex);
console.log(sonucc);



//Find Characters with Lazy Matching - Tembel Eşleştirme ile Karakterleri Bul==============================================
/*1) t[a-z]*i/ normal ifadesini (basically a pattern) "titanic" dizesine uygulayabilirsiniz... 
Bu normal ifade temel olarak t ile başlayan, i ile biten ve aralarında bazı harfler bulunan bir kalıptır.
Eşleşme ["titani"] döndürür. Modele uyması mümkün olan en büyük alt diziyi bulur.*/

//2) you can use the ? character to change it to "lazy matching" . 
//"titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].
//cikti:['<h1>', index: 0, input: '<h1>Winter is coming</h1>']            ->Lazy Matchingi cok anlamadim

let text = "<h1>Winter is coming</h1>";
let myyRegex = /<.*?>/; 
let re_sult = text.match(myyRegex);
console.log(re_sult);     


//Find One or More Criminals - Bir veya Daha Fazla Suçlu Bulun===============================================================
// aramak istedigin her neyse bsp:/C+/   yanina + koyarak yapiyruz
//cikti: ['CCCCCCCCCCCCCCC', index: 8, input: 'P2P1P5P4CCCCCCCCCCCCCCCP3P1' 

let metin = "P2P1P5P4CCCCCCCCCCCCCCCP3P1";
let reCriminals = /C+/;                           //bir yada daha fazla C ariyoruz!
let ressult = metin.match(reCriminals);
console.log(ressult);


//Match Beginning String Patterns ===========================================================================================
//dizilerde belirli konumlardaki kalıpları aramak için kullanılırlar. dizinin en basinda var mi yok mu?
//you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]
//negated carakter DISINDA dize basinda arama yapmak icin de (^) bu isaret kullanilir.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let rezult = calRegex.test(rickyAndCal);
console.log(rezult) ;                              //cikti: true


//Match Ending String Patterns===============================================================================================
//You can search the end of strings using the dollar sign character $ at the end of the regex.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let rezzult = lastRegex.test(caboose);
console.log(rezzult);                               //cikti: true


//Match All Letters and Numbers - Tüm Harfleri ve Sayıları Eşleştir ========================================================
//JavaScript'te alfabeye en yakın karakter sınıfı \w'dir. Bu kısayol, [A-Za-z0-9_]'a eşittir. 
//Bu karakter sınıfı, büyük ve küçük harflerle sayılarla eşleşir.  alt çizgi karakterini de  (_) içeriyor.

let quoteSampple = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi;                              //w = [A-Za-z0-9_] tüm sayi ve harfler demektir.
let resullt = quoteSampple.match(alphabetRegexV2).length;
console.log(resullt);                                      //cikti:31


//Match Everything But Letters and Numbers - Harfler ve Rakamlar Dışında Her Şeyi Eşleştir==================================
// \W ile \w'nin tersini arayabilirsiniz. Bu kısayol, [^A-Za-z0-9_] ile aynıdır.

let quoteeSample = "The five boxing wizards jump quickly!!";
let nonAlphabetRegex = /\W/gi; 
let reesult = quoteeSample.match(nonAlphabetRegex).length;
console.log(reesult);                                      //cikti:7  (bosluklari ve !saydi)


//Match All Numbers - Tüm Sayıları Eşleştir=================================================================================
//Rakam karakterlerini aramanın kısayolu, küçük harf d ile \d'dir. = [0-9]

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;                                       //g tekrari da al demek
let resuult = movieName.match(numRegex);
console.log(resuult);                                       //cikti:(4) ['2', '0', '0', '1']


//Match All Non-Numbers - Rakam Olmayan Tümleri Eşleştir===================================================================
//Rakam olmayan karakterleri aramanın kısayolu \D'dir. = [^0-9] eşittir.

let movieNamee = "2001: A Space";
let noNumRegexx = /\D/g; 
let res_ult = movieNamee.match(noNumRegexx)
console.log(res_ult);                                  //cikti: (9) [':', ' ', 'A', ' ', 'S', 'p', 'a', 'c', 'e']


//Restrict Possible Usernames - Olası Kullanıcı Adlarını Kısıtla============================================================
//Bir veritabanındaki tüm kullanıcı adlarını kontrol etmeniz gerekir. 
//Kullanıcıların kullanıcı adlarını oluştururken uymaları gereken bazı basit kurallar var.
/*1)Usernames can only use alpha-numeric characters.
2)The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
3)Username letters can be lowercase and uppercase.
4)Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;  
let rresult = userCheck.test(username);
console.log(rresult)                                   //true

/* ^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input */

//const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;        //bu da olur.

/*^ - start of input
[a-z] - first character is a letter
[0-9]{2,0} - ends with two or more numbers
| - or
[a-z]+ - has "one or more" letters next
\d* - and ends with "zero or more" numbers
$ - end of input
i - ignore case of input */


//Match Whitespace ==================================================================================================
//Küçük s olan \s'yi kullanarak boşlukları arayabilirsiniz. 
//Bunu [ \r\t\f\n\v] karakter sınıfına benzer olarak düşünebilirsiniz.

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let ree_sult = sample.match(countWhiteSpace);
console.log(ree_sult);                                      //cikti:(5) [' ', ' ', ' ', ' ', ' ']


//Match Non-Whitespace Characters - Boşluk Olmayan Karakterleri Eşleştir===========================================
// \S ile yapilir. Bu desen boşluk, satır başı, sekme, form beslemesi ve 
//yeni satır karakterleriyle eşleşmeyecektir. [^ \r\t\f\n\v] karakter sınıfına benzerdir.

let samplee = "W hite spa ce ";
let countNonWhiteSpace = /\S/g; 
let reee_sult = samplee.match(countNonWhiteSpace);
console.log(reee_sult);                              //10) ['W', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e']


//Specify Upper and Lower Number of Matches- Üst ve Alt Desen Sayısını Belirtin===================================
//Bir veya daha fazla karakter aramak için artı işaretini + işaretini 
//ve sıfır veya daha fazla karakter aramak için yıldız işaretini * kullandığınızı hatırlayın.
//Miktar belirteçleri, küme parantezleri ({ ve }) ile kullanılır.
//BSP: yalnızca ah dizesinde 3 ila 5 kez görünen a harfini eşleştirmek için normal ifadeniz /a{3,5}h/ olur.

let ohStr = "Ohhhhh nooooo";
let ohRegex = /Oh{3,6} no/;                       // Oh no ariyoruz. h 3-6 arasi yazilmis olabilir.
let r_esult = ohRegex.test(ohStr);
console.log(r_esult);                             //true


//Specify Only the Lower Number of Matches - Yalnızca alt sinir Sayısını Belirtin==================================
//Bazen üst limit olmadan yalnızca alt desen sayısını belirtmek istersiniz.
//BSP: yalnızca hah dizesini en az 3 kez görünen a harfiyle eşleştirmek için normal ifadeniz /ha{3,}h/ olur.

let haStr = "Hazzzzzzzzah";
let haRegex = /Haz{4,}ah/;                         //4 yada daha fazla z olacak sekilde arama yap.
let rr_esult = haRegex.test(haStr);                //true
console.log(rresult);

//Specify Exact Number of Matches - Tam Eşleşme Sayısını Belirtin================================================
//BSP: yalnızca hah kelimesini 3 kez a harfiyle eşleştirmek için normal ifadeniz /ha{3}h/ olur.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;                        //4m olacak sekilde arama yap
let rrrresult = timRegex.test(timStr);                //true


//Check for All or None - Tümünü veya Hiçbirini Kontrol Etme====================================================
//Bir öğenin olası varlığını soru işaretiyle ? belirtebilirsiniz! Olsada olur olmasada olur gibi
//BSP:Amerikan ve İngiliz İngilizcesinde küçük farklılıklar vardır ve ? her iki yazımla eşleştirmek için kullanabilirsiniz.

let favWord = "favorite";
let favRegex = /favou?rite/;                     // u? orda u harfi olsada olur olmasa da olur. true ver demek bu
let rrrrresult = favRegex.test(favWord);


//Positive and Negative Lookahead - Olumlu ve Olumsuz Bakış======================================================
//Olumlu bir bakış, arama modelindeki öğenin orada olduğundan emin olmak için bakacaktır. 
//Olumlu bir bakış, (?=...) olarak kullanılır; burada ... eşleşmeyen gerekli kısımdır.
//Negatif bir bakış açısı (?!...) olarak kullanılır, burada ... orada olmak istemediğiniz kalıptır. 
//olumlu da varligindan , olumsuzda yoklugundan emin olmak istersiniz


let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;          //Here is a (naively) simple password checker; 
let resul_t = checkPass.test(password);          //that looks for between 3 and 6 characters and at least one number:
console.log(resul_t);                            //true

//-------

let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6,})(?=\w*\d{2})/;          //that are greater than 5 characters long, and have two consecutive digits.
let resull_t = pwRegex.test(sampleWord);


//Check For Mixed Grouping of Characters - Karakterlerin Karışık Gruplandırılmasını Kontrol Edin====================

let metinnn = "Pumpkin";                         //aradigin "penguen" de olabilir, "pumpkin" de
let testtRegex = /P(engu|umpk)in/;
let resulll_t = testtRegex.test(metinnn);
console.log(resulll_t);                           //true


//Reuse Patterns Using Capture Groups - Yakalama Gruplarını Kullanarak Kalıpları Yeniden Kullanma====================
/* "test test test"   ->                   /(test)(\s)\1\2\1/      burda 2 \s:bosluk denk geliyor
    "test test test test test test" ->     /(test)(\s)\1\2\1/g     burda g öncekinin tekrarina dnk geliyor
*/
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;                   //^:dize basi, $:dize sonu, \s:bosluk
let resul__t = reRegex.test(repeatNum);
console.log(resul__t);                             //true


//Use Capture Groups to Search and Replace - Aramak ve Değiştirmek için Yakalama Gruplarını Kullanın=================
//word de arama yapip , bir kelimenin degismesini istemek gibi. replace() kullaniliyor.
//Bsp: "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');   ->   Camp Code
 
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
let degis = wrongText.replace(silverRegex, "blue");
console.log(degis);                                  //cikti:The sky is blue.

//----------------

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
let degiss = str.replace(fixRegex, replaceText);
console.log(degiss);                                 //cikti:three two one


//Remove Whitespace from Start and End - Boşluğu Başlangıç ve Sondan Kaldır==========================================
//normalde trim() methodu ile olmasi gerekeni , replace() ile yapti. 

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;                     //bastaki ve sondaki bosluklari secti!
let degisss = hello.replace(wsRegex, "");       //bosluklari sifir ile degisti gibi...




