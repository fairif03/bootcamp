// let n = 10;
// let string = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     string += " ";

//     // for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

//mengubah ke bentuk fungsi

/*function bentukPersegi(tinggi, lebar) {
  let counterTinggi = 0,
    counterLebar = 0,
    pola = "";
  while (counterTinggi < tinggi) {
    console.log(counterTinggi);
    while (counterLebar < lebar) {
      console.log(counterLebar);
      pola += "*";
      counterLebar++;
    }
    pola += "\n";
    counterTinggi++;
  }
  return pola;
}
console.log(bentukPersegi(5, 5));*/

//mengubah bentuk fungsi dengan for
function bentukPersegi(tinggi, lebar) {
  let string = "";

  for (let i = 1; i <= tinggi; i++) {
    for (let j = 1; j <= lebar; j++) {
      string += " ";

      // for (let k = 0; k < 2 * i - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  return string;
}
console.log(bentukPersegi(6, 5));

//membuat pola bntang dengan while
/*let loop = ``;
let x = 0;
let y = 0;
let n;
{
  if (x < 5) {
    x++;
    loop += "*";
  } else y < 5;
  y++;

  loop += "\n";
}
console.log(loop);*/
