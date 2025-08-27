//Definimos diferentes tipos de datos
let numero = 42; // Número entero
let texto = "Hola mundo!"; // Cadena de texto
let booleano = true; // Valor booleano (true/false) verdadero
let indefinido; // Variable no inicializada - Valor indefinido
let nulo = null; // Variable nula - Valor nulo/vacío
//let objeto = { clave: "valor" }; - Objeto con una clave y un valor
let objeto = { nombre: "Luis", edad: 30 }; // Objeto con propiedades


// Mostrar los valores de las variables y explicar su tipo
console.log("Número:", numero); // Tipo: number - Esto es un número
console.log("Texto:", texto); // Tipo: string - Esto es una cadena de texto
console.log("Booleano:", booleano); // Tipo: boolean - Esto es un booleano (verdadero o falso)
console.log("Indefinido:", indefinido); // Tipo: undefined - Esto es indefinido (La variable no tiene valor)
console.log("Nulo:", nulo); // Tipo: object (null es un caso especial - representa un valor vacío)
console.log("Objeto:", objeto); // Tipo: object - Esto es un objeto (con propiedades nombre y edad)



// En JavaScript, el valor `null` es considerado de tipo `object` debido a una 
// peculiaridad histórica del lenguaje. Si ejecutas `typeof null`, el resultado será 
// `"object"`. Sin embargo, `null` no es realmente un objeto, sino un valor primitivo 
// que representa la ausencia intencional de cualquier valor u objeto.

// Esta confusión se debe a un error en la implementación original de JavaScript, 
// que se ha mantenido por compatibilidad. Por eso, aunque técnicamente `typeof null`
// devuelve `"object"`, debes recordar que `null` significa “sin valor” o “vacío”,
// y no es un objeto como tal.