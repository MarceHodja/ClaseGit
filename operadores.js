//Operadores aritméticos
let a = 10;
let b = 3;
console.log("Suma:", a + b); // Suma: 13
console.log("Resta:", a - b); // Resta: 7
console.log("Multiplicación:", a * b); // Multiplicación: 30
console.log("División:", a / b); // División: 3.3333333333333335
console.log("Módulo:", a % b); // Módulo: 1 (resto de la división)

//Operadores de comparación

console.log("Mayor que:", a > b); // true - a es mayor que b
console.log("Menor que:", a < b); // false - a no es menor que b
console.log("Estrictamente igual:", a === b); // false - a no es igual a b
console.log("Estrictamente igual:", a === 10); // true - a es igual a 10
console.log("Igualdad:", a == b); // false - a no es igual a b
console.log("Desigualdad:", a != b); // true - a es diferente de b

// Operadores lógicos
console.log(true && false); // false - ambas condiciones no son verdaderas
//&& (AND): Devuelve true solo si ambas condiciones (valores) son verdaderas
//Aquí es false porque una de las condiciones es falsa

console.log(true || false); // true - al menos una condición es verdadera
//|| (OR): Devuelve true si al menos una de las condiciones (valores) es verdadera
//Aquí es true porque una de las condiciones es verdadera

console.log(!true); // false - invierte el valor de verdad
//! (NOT): Devuelve true si la condición (valor) es falsa
//Aquí es false porque la condición es verdadera

console.log("Y lógico:", a > 5 && b < 5); // false - ambas condiciones no son verdaderas
console.log("O lógico:", a > 5 || b < 5); // true - al menos una condición es verdadera
console.log("No lógico:", !(a > 5)); // false - invierte el valor de verdad
