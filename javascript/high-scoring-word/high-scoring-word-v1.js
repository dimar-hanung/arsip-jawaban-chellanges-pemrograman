function high(x) {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  const score = x.split(" ").map(word =>
    word
      .split("")
      .map(char => alphabet.indexOf(char) + 1)
      .reduce((a, b) => a + b)
  );
  return x.split(" ")[score.indexOf(Math.max(...score))];
}

console.log(high("man i need a taxi up to ubud"));
