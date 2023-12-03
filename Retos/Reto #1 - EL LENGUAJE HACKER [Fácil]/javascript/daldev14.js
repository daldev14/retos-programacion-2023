/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/)
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

const Dictionary = {
  a: "4",
  b: "ß",
  c: "©",
  d: "cl",
  e: "€",
  f: "ƒ",
  g: "6",
  h: "#",
  i: "!",
  j: "]",
  k: "|c",
  l: "£",
  m: "nn",
  n: "И",
  o: "0",
  p: "|º",
  q: "&",
  r: "Я",
  s: "$",
  t: "7",
  u: "บ",
  v: "/",
  w: "Ш",
  x: "Ж",
  y: "Ч",
  z: "2",
  1: "L",
  2: "R",
  3: "E",
  4: "A",
  5: "S",
  6: "b",
  7: "T",
  8: "B",
  9: "g",
  0: "o",
};

function ConvertToLeet(text) {
  return text
    .toLowerCase()
    .split("")
    .map((char) => {
      if (Dictionary[char]) return Dictionary[char];
      return char;
    })
    .join("");
}

console.log(ConvertToLeet("Hello World 👋"));
