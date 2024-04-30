const { interval, Subject, takeUntil, of } = require("rxjs");

const stop$ = new Subject();

const intervalObservable = interval(1000); // 0, 1, 2, 3 ....
const predefinedObservable = of("A", "C", "L", "A");

intervalObservable.subscribe(console.log);

// intervalObservable
//   //   .pipe(takeUntil(stop$))
//   .subscribe((num) => console.log(num + 1));

// setTimeout(() => {
//   console.log("STOP!");
//   stop$.next();
//   //   stop$.complete();
// }, 5100);
