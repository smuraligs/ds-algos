class Fibonacci {
  static series: Array<number>;
  static generateSeries(num) {
    
    if(num <= 0) {
      this.series = [];
    }
    if(num == 1) {
      this.series = [0];
    }
    else {
      this.series = [0, 1];
      for (let i = 2; i<num; i++) {
        this.series.push(this.series[i-2] + this.series[i-1]);
      }
    }
    return this.series;
  }
}

console.log(Fibonacci.generateSeries(2));
console.log(Fibonacci.generateSeries(3));
console.log(Fibonacci.generateSeries(5));
console.log(Fibonacci.generateSeries(10));