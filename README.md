# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion in arithmetic operations.  JavaScript's dynamic typing can cause unexpected behavior when mixing numbers and strings in calculations.

## Bug Description

The `foo` function demonstrates string concatenation when adding a number and a string. The `bar` function shows how subtracting a string from a number results in `NaN` (Not a Number).

## Solution

The solution involves explicit type checking and conversion to ensure consistent data types before performing arithmetic operations. The `bugSolution.js` file provides corrected versions of the functions.