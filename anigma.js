function sortAnigma(anigma) {
  let alpabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let newAnigma = "";

  for (let i = 0; i < anigma.length; i++) {
    for (let j = 0; j < alpabet.length; j++) {
      if (anigma[i] === alpabet[j] && j > 3) {
        newAnigma += alpabet[j - 3];
      } else if (j === 1 && anigma[i] === alpabet[j]) {
        newAnigma += alpabet[23];
      } else if (j === 2 && anigma[i] === alpabet[j]) {
        newAnigma += alpabet[24];
      } else if (j === 3 && anigma[i] === alpabet[j]) {
        newAnigma += alpabet[25];
      }
    }
  }
  return newAnigma;
}
console.log(sortAnigma("abcdefg"));
