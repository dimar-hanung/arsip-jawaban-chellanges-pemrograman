function arrayDiff(a, b) {
  return a.filter(arr1 => !b.includes(arr1));
}

console.log(arrayDiff([1, 2, 3], [1, 2]));
