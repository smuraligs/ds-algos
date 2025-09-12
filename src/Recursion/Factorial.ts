class Factorial {
  static findFactorial(num) {
    
    let result = 1;
    if (num == 0 || num == 1) {
      return 1;
    } else {
      result = num * Factorial.findFactorial(num - 1);
      return result;
    }
  }
}

console.log(Factorial.findFactorial(2));
console.log(Factorial.findFactorial(3));
console.log(Factorial.findFactorial(4));
console.log(Factorial.findFactorial(5));
