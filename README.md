# JavaScript Number Polyfills

This repository provides polyfills for important JavaScript Number methods and parsing functions to ensure compatibility with older JavaScript environments. 
The polyfills follow the ECMAScript standard as closely as possible.

## About the Methods

### 1. Number.isNaN(value)
- Purpose: Checks whether a value is exactly NaN (Not-a-Number).  
- Theory: NaN is a special numeric value representing an undefined or unrepresentable number. Unlike the global isNaN, Number.isNaN does not convert other types—it returns true only if the value is actually the numeric NaN. This ensures more precise type-safe checking in modern JavaScript code.

### 2. Number.isFinite(value)
- Purpose: Determines whether a value is a finite number.  
- Theory: A finite number is any number that is not Infinity, -Infinity, or NaN. Unlike the global isFinite, this method does not coerce other types, meaning it only evaluates actual number values. It is used to safely validate numeric values without unexpected type conversions.

### 3. Number.isInteger(value)
- Purpose: Checks if a value is an integer.  
- Theory: An integer is a numeric value without a fractional part. Number.isInteger returns false for decimal numbers, NaN, Infinity, and non-number types. This method is useful for validating counts, indexes, or any value that must be a whole number.

### 4. Number.isSafeInteger(value)
- Purpose: Checks if a value is a safe integer.  
- Theory: Safe integers are integers that can be precisely represented in JavaScript without losing precision, according to the IEEE 754 standard. The safe integer range is from -(2^53 - 1) to 2^53 - 1. Values outside this range may suffer from rounding errors, making Number.isSafeInteger important for precise arithmetic.

### 5. parseInt(value, radix)
- Purpose: Converts a string to an integer using a specified radix (base).  
- Theory: This method reads a string and parses it into an integer, character by character. It handles optional signs (+ or -) and stops parsing when it encounters an invalid character. Using a radix allows converting numbers from different bases (for example, binary, octal, hexadecimal).

### 6. parseFloat(value)
- Purpose: Converts a string to a floating-point number.  
- Theory: parseFloat extracts the first valid numeric value from a string, including decimals and scientific notation. It is useful for safely converting numeric strings to numbers, ignoring any trailing non-numeric characters. If the string does not contain a valid number, it returns NaN.




