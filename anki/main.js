const data = ["car"];

const transportation = data.reduce((x, index) => {
  if (!x[index]) {
    x[index] = 0;
  }
  x[index]++;
  return x;
}, {});

data.forEach((x, index) => {
  console.log(index);
});

let sum = 0;
for (let i = 0; i < sum.length; i++) {
  sum += i;
}
console.log(sum);
