let star = "";
for (let i = 5; i > 0; i--) {
  //mengatur jarak
  //console.log(i);
  for (let j = 0; j < i; j += 3) {
    // ngeprint bintang
    //console.log(j);
    star += 2;
    //star += "\n";
    //console.log(star);
  }
  console.log("loop j berhenti");
  star += "\n";
}
console.log(star);
