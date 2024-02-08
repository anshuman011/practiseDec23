
Filter:
filter() method creates a new array with all elements that pass the test implemented by the provided function.However, the filter() method expects a boolean value to determine whether to include the element in the resulting array. In JavaScript, non-boolean values are coerced into booleans.
**Truthy and Falsy Values In JS:**
truthy values are those that evaluate to true when coerced to a boolean context, while falsy values are those that evaluate to false.
Truthy:
Non-empty strings: Any string with at least one character.
Numbers other than 0: Any number that is not zero.
Arrays: Any array, even if it's empty.
Objects: Any object, including {} (empty object).
Functions: Any function, even if it doesn't return anything.
Special values like Infinity and NaN.
Other truthy values such as true itself.
console.log(Boolean("Hello")); // true
console.log(Boolean(42)); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(function() {})); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(true)); // true
Falsy:
Empty strings: '' (empty string).
Number 0.
NaN (Not a Number).
null.
undefined.
false.
Other falsy values such as document.all (a property that is false in most cases).
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false
//incomplete

