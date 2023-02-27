// let n = 20;
// let string = "";

// for (let i = 1; i <= n; i++) {
//   // untuk mengatur jarak
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // nge-print bintangnya
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

function Segitiga(Tinggi, Lebar) {
  let string = "";

  for (let i = 1; i <= Tinggi; i++) {
    // untuk mengatur jarak
    for (let j = 1; j <= Lebar - i; j++) {
      string += " ";
    }
    // nge-print bintangnya
    for (let k = 0; k <= 2 * i - 1; k++) {
      string += "*";
    }
    string += "\n";
    //return string;
  }
  return string;
}
console.log(Segitiga(5));
