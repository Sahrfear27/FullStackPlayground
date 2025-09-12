/**
 Check for even num, check for odd number:
 Even = num % 2 == 0 ==>    Even
 Odd = 9, 15, 21, 25
 num 
 3 + 1 = 4 
 4 % 3
 * **/
function isPrime(num) {
  // Check if the number is prime
  if (num == 1 || num == 2 || num == 3) {
    return true;
  }
  if (num % 3 == 0 || num % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isPrime(15));
