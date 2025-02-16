function foo(a, b) {
  // Explicit type checking and conversion
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input";
  }
  return a + b;
}
console.log(foo(1, "2")); // Output: 3

function bar(a, b) {
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input";
  }
  return a - b;
}
console.log(bar(1, "2")); // Output: -1