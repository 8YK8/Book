function showPow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt ("What x?", ``);
let n = prompt ("What n?", ``);

if (n < 1) {
  alert (`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert (showPow (x,n) );
}
