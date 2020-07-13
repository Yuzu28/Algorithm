//from coderbyte.com

/////////factorial////////////////

function FirstFactorial(num) { 

    var factorial = 1;

for (var i = 1; i <= num; i++) {  
  // multiply each number between 1 and num  
  // factorial = 1 * 1 = 1
  // factorial = 1 * 2 = 2
  // factorial = 2 * 3 = 6
  // factorial = 6 * 4 = 24
  // ...
  factorial = factorial * i;
}

return factorial;

}

FirstFactorial(4);                            

//////////////////////////////////////

///////////////Reverse a string ///////////////////////

function FirstReverse(str) { 
    return str.split("").reverse().join("");; 
  }

// The split() method splits a String object into an array of string by separating the string into sub strings.
// The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
// The join() method joins all elements of an array into a string.

  //////////////////////////////////////

//find the longest wordd
  function LongestWord(sen) { 
    //regex to remove puncutation
    var newstring = sen.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"")
    //sen.replace(/[^\w]/g, ' ');
    var array = newstring.split(' ');
    
    var longestWord = array.sort(function(a, b) { 
      return b.length - a.length;
    })
    
    //The sort() method sorts the elements of an array in place and returns the array.
  
    // code goes here  
    return  longestWord[0]
  
  }


  ////////////////////////////////////////////////////////



  function SimpleAdding(num) { 
  
  
    var answer = 0;
  
    // loop from 1 to num
    for (var i = 1; i <= num; i++) {
      answer = answer + i;
    } 
  
    return answer;
           
  }


  ////////////////////////////////

/////
var totalPrice = [ ]

var total = 0;

for (var i  = 0; i < totalPrice.length; i++){

   total  += totalPrice[i];

}




/////



var arr = ['harry', 3, 'tom', 5, 'toma'];



function like(arrr){
  var sol = arrr.toString()
  var vol = sol.replace(/\d+/g,"").split(" ")
  return sol;
}

console.log(like(arr));

/////////////////////////

let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

let bigCities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].population > 3000000) {
        bigCities.push(cities[i]);
    }
}
console.log(bigCities);


/////////////////////////////


for (let i = 1; i <= 100; i++){
  if (i % 3 === 0 && i % 5 ===0){
    console.log("Fizzbuzz")
  }
  else if (i % 3 === 0){
    console.log("Fizz")
  }
  else if (i % 5 === 0){
    console.log("Buzz")
  }
  else {
    console.log(i)
  }
}


////////////////////////////////

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);


function myFunction(value) {
  return value * 2;
}
console.log(numbers2) //[90, 8, 18, 32, 50]


//////////////////////////////////////

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
console.log(over18); //[45, 25]
  
//////////////////////////////////////////

var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(myFunction);


function myFunction(total, value) {
  return  total + value;
}

console.log(sum) //99

///////////////////////////////////////



var numbers = [45, 4, 9, 16, 25, 'humpy', 'miller'];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
  return typeof value === "string"
  // return typeof value === "number"
}
console.log(over18); // ["humpy", "miller"]]




//////code wars

function spinWords(string){
  var arr = string.split(" ");
  
  var newarr = [];
  
  for (var i = 0; i < arr.length; i++){
    if (arr[i].length >= 5){
       newarr.push(arr[i].split("").reverse().join(""))
    }
    else {
      newarr.push(arr[i]);
    }
  }
  return newarr.join(" ")
}

console.log(spinWords("Hey fellow warriors"))

//outcome : "Hey wollef sroirraw"



// 
function solution(str, ending){
  
  
  // count the length of string
  let endCount = ending.length - 1
  let stringCut = str.split("").slice(endCount).join("");
  //put the string in an array, slice the array then out back into a string
  
  return stringCut  === ending
}

console.log(solution('abcde', 'cde')); //return true 
console.log(solution('abcde', 'abc')); // return false
