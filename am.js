function polaSegitiga(b) {
  let pola = "";
  for (let i = 1; i <= b; i++) {
    for (let j = 1; j <= i; j++) {
      pola += "*";
    }
    pola += "\n";
  }
  return pola;
}
console.log(polaSegitiga(2));
