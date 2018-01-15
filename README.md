## Continuous Average

> Calculate averages for large quantities or continuous data without having to
> store a huge array

usage

```js
const Average = require('continuous-average');
const average = new Average();

for (let i = 1; i < 100000000; i++) {
  average.add(i);
}

console.log(average.value); // 50000000
```


