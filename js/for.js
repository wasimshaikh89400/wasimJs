function createArr() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      return console.log(i);
    });
  }
  return arr;
}

var ar = createArr();
console.log(": ", ar);

ar[0]();
ar[1]();
ar[2]();
