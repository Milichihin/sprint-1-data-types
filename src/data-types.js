//=== Dynamic (weak) typing===================================
//=== Динамическая типизация =================================

// let x; // type undefined
// console.log(x); // undefined

// x = 45; // type number
// console.log(x); // 45

// x = "45"; // type string
// console.log(x); // "45"

//=== Type Conversions. String ==============================
//=== Преобразования типов. В строки ==========================

//===Function String()
// let a = 20;
// let data = String(a);
// console.log(data); 			 // "20"
// console.log(typeof data); // "string"

//=== Operation + and empty string
// let a = 20;
// console.log(typeof a); // number
// let data = a + "";
// console.log(data); 			 // "20"
// console.log(typeof data); // "string"

//=== Type Conversions. Number ==============================
//=== Преобразования типов. В число =========================

//=== Function Number()
// let a = "20";
// let num = Number(a);
// console.log(num); 			// 20
// console.log(typeof num); // "number"

//=== Unary operation "+""
// let a = "20";
// let num = +a;
// console.log(num);     		// 20
// console.log(typeof num); // "number"

//=== Function parseInt() - converts to an integer
// console.log(parseInt("7")); // 7
// console.log(parseInt("7.5")); // 7
// console.log(parseInt("7nm")); // 7
// console.log(parseInt("nm")); // NaN

//=== Function parseFloat() - converts to a fractional number
// console.log(parseFloat("7")); // 7
// console.log(parseFloat("7.125")); // 7.125
// console.log(parseFloat("7nm")); // 7
// console.log(parseFloat("nm")); // NaN

//=== Function isNaN() - checks if a value represents a number
// console.log(isNaN(1)); // false
// console.log(isNaN("1")); // false
// console.log(isNaN("1m")); // true
// console.log(isNaN(null)); // false
// console.log(isNaN(undefined)); // true

//=== Type Conversions. Boolean ==============================
//=== Преобразования типов. В булево число ===================

//=== Function Boolean()
// let a = "1";
// let bln = Boolean(a);
// console.log(bln); // true
// console.log(typeof bln); // "boolean"

// //=== Double Boolean NOT !!
// let a = "1";
// let bln = !!a;
// console.log(bln); // true
// console.log(typeof bln); // "boolean"

//=== Operator precedence ==============================
//=== Приоритет оператора ===================

// If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the default priority order of operators.
// To change the standard course of operations, some expressions can be put (taken) in brackets:

// console.log(10 - 20 / 5); // 6
// console.log(2 ** 4 * 2); // 32

// let m = 2;
// let n = m * (4 + 2);
// console.log(n); // 12
