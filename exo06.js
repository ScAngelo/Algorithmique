let A = 3, B = 9, C = false, D = !C, E = 9

console.log(A, B, C, D, E);

// 1. 
console.log("1.", A > 8)
// 3 > 8
// false

// 2. 
console.log("2.", B == 9)
// 9 == 9
// true

// 3. 
console.log("3.", !(A != 3)) // SHIFT + ALT + ARROWDOWN
// NON(3 != 3)
// NON(false)
// true

// 4. 
console.log("4.", !(C))
// !(false)
// true

// 5. 
console.log("5.", (A < B) || C)
// (3 < 9) || false
// true || false
// true

// 6. 
console.log("6.", !((A + B) != 12))
// !((3 + 9) != 12)
// !(12 != 12)
// !(false)
// true

// 7. 
console.log("7.", (B == 5) || ( (E > 10) && (A < 8) ))
// (9 == 5) || ( (9 > 10) && (3 < 8))
// false || ( false && true)
// false || false
// false

// 8. 
console.log("8.", (((B == 5) || ((E > 10) && (A < 8))) || (A < B) || C) && C)
// (((9 == 5) || ((9 > 10) && (3 < 8))) || (3 < 9) || false) && false
// ((false || (false && true)) || true || false) && false
// ((false || false) || true) && false
// (false || true) && false
// true && false
// false