decodeMorse = function (morseCode) {
  //your code here
  const morseLists = [
    { word: "A", morse: ".-" },
    { word: "B", morse: "-..." },
    { word: "C", morse: "-.-." },
    { word: "D", morse: "-.." },
    { word: "E", morse: "." },
    { word: "F", morse: "..-." },
    { word: "G", morse: "--." },
    { word: "H", morse: "...." },
    { word: "I", morse: ".." },
    { word: "J", morse: ".---" },
    { word: "K", morse: "-.-" },
    { word: "L", morse: ".-.." },
    { word: "M", morse: "--" },
    { word: "N", morse: "-." },
    { word: "O", morse: "---" },
    { word: "P", morse: ".--." },
    { word: "Q", morse: "--.-" },
    { word: "R", morse: ".-." },
    { word: "S", morse: "..." },
    { word: "T", morse: "-" },
    { word: "U", morse: "..-" },
    { word: "V", morse: "...-" },
    { word: "W", morse: ".--" },
    { word: "X", morse: "-..-" },
    { word: "Y", morse: "-.--" },
    { word: "Z", morse: "--.." },
    { word: ".", morse: ".-.-.-" },
    { word: ",", morse: "--..--" },
    { word: ":", morse: "---..." },
    { word: "-", morse: "-....-" },
    { word: "/", morse: "-..-." },
    { word: "SOS", morse: "...---..." }
  ];
  return morseCode
    .trim()
    .split("  ")
    .map(word =>
      word
        .split(" ")
        .map(
          morse =>
            morseLists
              .filter(list => list.morse == morse)
              .map(obj => obj.word)[0]
        )
        .join("")
    )
    .join(" ");
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
console.log(decodeMorse("...---..."));
