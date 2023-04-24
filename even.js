const isEven  = function (num) {
...   return num % 2 === 0;
... }
SyntaxError: Identifier 'isEven' has already been declared

const tenIsEven = isEven(10);
SyntaxError: Identifier 'tenIsEven' has already been declared

const elevenIsEven = isEven(11);
SyntaxError: Identifier 'elevenIsEven' has already been declared

console.log(tenIsEven);
true

console.log(elevenIsEven);
false
