// 1. ===== Polyfill for Number.isNaN =====
if (!Number.isNaN) {
  Number.isNaN = function(value) {
    return typeof value === "number" &&          // Check if value is a number
                  value !== value;               // NaN is the only number that is not equal to itself

  };
}


// 2. ===== Polyfill for Number.isFinite =====
if (!Number.isFinite) {
  Number.isFinite = function(value) {
    return typeof value === "number" &&          // Must be a number
           !Number.isNaN(value) &&               // Must not be NaN
           value !== Infinity &&                 // Must not be positive Infinity
           value !== -Infinity;                  // Must not be negative Infinity
  };
}


// 3. ===== Polyfill for Number.isInteger =====
if (!Number.isInteger) {
  Number.isInteger = function(value) {

    // Must be a finite number
    if (!Number.isFinite(value)) return false;

    // Must have no decimal part (floor equals itself)
    return Math.floor(value) === value;
  };
}


// 4. ===== Polyfill for Number.isSafeInteger =====
if (!Number.isSafeInteger) {
  Number.isSafeInteger = function(value) {
    return Number.isInteger(value) &&                  // Must be integer
           Math.abs(value) <= 9007199254740991;        // Must be between -2^53+1 and 2^53-1
  };
}


// Example Usage
if (typeof module !== 'undefined' && require.main === module) {

  console.log("===== Number.isNaN =====");
  console.log(Number.isNaN(NaN));            // true
  console.log(Number.isNaN(42));             // false
  console.log(Number.isNaN("hello"));        // false
  console.log(Number.isNaN(undefined));      // false

  console.log("===== Number.isFinite =====");
  console.log(Number.isFinite(10));          // true
  console.log(Number.isFinite(-5.5));        // true
  console.log(Number.isFinite(Infinity));    // false
  console.log(Number.isFinite(-Infinity));   // false
  console.log(Number.isFinite(NaN));         // false
  console.log(Number.isFinite("10"));        // false

  console.log("===== Number.isInteger =====");
  console.log(Number.isInteger(10));         // true
  console.log(Number.isInteger(-5));         // true
  console.log(Number.isInteger(3.14));       // false
  console.log(Number.isInteger("10"));       // false
  console.log(Number.isInteger(NaN));        // false
  console.log(Number.isInteger(Infinity));   // false

  console.log("===== Number.isSafeInteger =====");
  console.log(Number.isSafeInteger(10));                   // true
  console.log(Number.isSafeInteger(9007199254740991));     // true
  console.log(Number.isSafeInteger(9007199254740992));     // false
  console.log(Number.isSafeInteger(3.14));                 // false
}
