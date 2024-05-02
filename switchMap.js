const { of, switchMap, map } = require("rxjs");

const switched = of(1, 2, 3).pipe(switchMap((x) => [x, x ** 2, x ** 3]));
switched.subscribe((x) => console.log(x));

const mapped = of(1, 2, 3).pipe(map((x) => [x, x ** 2, x ** 3]));
mapped.subscribe((x) => console.log(x));
