const { of, tap, map } = require("rxjs");

// const observableRandom = of(Math.random());

// observableRandom
//   .pipe(
//     tap(console.log),
//     map((n) => (n > 0.5 ? "big" : "small"))
//   )
//   .subscribe(console.log);

const observableNumbers = of(1, 2, 3, 4, 5, 6);

observableNumbers
  .pipe(
    tap(console.log),
    map((n) => (n % 2 === 0 ? "even/genap" : "odd/ganjil"))
  )
  .subscribe(console.log);
