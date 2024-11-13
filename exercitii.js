// 1)
let a = 3; 
let b = 1;
console.log(a+b);

// 2)
let i = 0;
while (i <= 10) {
    console.log(i);
    i=i+2;
  }

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
console.log(factorialize(10));

// 3)
function isPrime(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
      var prime = num != 1;
      for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  }
console.log(isPrime(79));

// 4)
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log (reverseString("crocodile"));

// 5)
var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[0];

for (i = 0; i < arr.length; i++) {
  if (arr[i] > largest ) {
    largest = arr[i];
  }
}
console.log(largest);

// 6)
function isPalindrome(str) {
    let rev = str.split("").reverse().join("");

    if (rev == str) {
        return true
    }
    return false

}
console.log(isPalindrome("racecar"));

// 7)
function sumOfDigit(num) {
    let sum = 0;
    while(num > 0) {
        sum = sum + num%10;
        num = Math.floor(num/10);
    }
    return sum;
}
console.log(sumOfDigit(733));

// 8)
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  sum += numbers[index];
}
console.log(sum); 