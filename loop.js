// var loop = "";

// for (var x = 0; x < 5; x++) {
//   for (var y = 0; y < 5; y--) {
//     loop += "*";
//   }
//   loop += "\n";
// }
// console.log(loop);

let loop = ``;
for (let x = 0; x < 5; x++) {
  for (let y = 0; y < 5; y++) {
    if ((x == 0) & (y == 2)) {
      loop += ` ##### `;
    } else if ((x == 1) & (y == 1)) {
      loop += ` ##### `;
    } else if ((x == 1) & (y == 2)) {
      loop += ` ##### `;
    } else if ((x == 1) & (y == 3)) {
      loop += ` ##### `;
    } else if ((x == 2) & (y == 0)) {
      loop += ` ##### `;
    } else if ((x == 2) & (y == 1)) {
      loop += ` ##### `;
    } else if ((x == 2) & (y == 2)) {
      loop += ` ##### `;
    } else if ((x == 2) & (y == 3)) {
      loop += ` ##### `;
    } else if ((x == 2) & (y == 4)) {
      loop += ` ##### `;
    } else if ((x == 3) & (y == 1)) {
      loop += ` ##### `;
    } else if ((x == 3) & (y == 2)) {
      loop += ` ##### `;
    } else if ((x == 3) & (y == 3)) {
      loop += ` ##### `;
    } else if ((x == 4) & (y == 2)) {
      loop += ` ##### `;
    } else {
      loop += ` (${x},${y}) `;
    }
  }
  loop += `\n`;
}
console.log(loop);
