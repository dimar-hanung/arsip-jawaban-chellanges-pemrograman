// Menggunakan Metode Recrusive, yaitu function yang memanggil dirinya sendiri

function persistence(num, count = 0) {
  num.toString().length > 1 && count++;
  const multiply = num
    .toString()
    .split("")
    .reduce((a, b) => parseInt(a) * parseInt(b));
  return multiply.toString().length > 1 ? persistence(multiply, count) : count;
}

console.log(persistence(39));
