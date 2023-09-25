let a = [1,2,3,4,5];
let total = a.reduce((total, x) =>
  {
  return total+=x;
  },0);
console.log(total)
