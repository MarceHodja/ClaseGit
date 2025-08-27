//Definimos diferentes tipos de datos en JavaScript

// Números
let numeroEntero = 42; // Entero
let numeroDecimal = 3.14; // Decimal
let numeroNegativo = -7; // Negativo
let numeroGrande = 1e6; // Notación científica
let numeroHexadecimal = 0xFF; // Hexadecimal
let numeroBinario = 0b1010; // Binario
let numeroOctal = 0o12; // Octal
let numeroNaN = NaN; // Not a Number
let numeroInfinity = Infinity; // Infinito
let numeroNegativoInfinity = -Infinity; // Infinito negativo
let numeroBigInt = BigInt(123456789012345678901234567890); // BigInt para números enteros grandes
let numeroDecimalBigInt = BigInt(12345678901234567890.1234567890); // BigInt con decimal (no recomendado)

// Cadenas de texto
let cadenaSimple = 'Hola, mundo'; // Comillas simples  
let cadenaDoble = "Hola, mundo"; // Comillas dobles
let cadenaTemplate = `Hola, mundo`; // Template literals (backticks)
let cadenaMultilinea = `Esta es una cadena
de varias líneas`; // Cadena de varias líneas con template literals

// Booleanos
let booleanoVerdadero = true; // Verdadero
let booleanoFalso = false; // Falso

// Indefinido y Nulo
let indefinido; // Indefinido (no se ha asignado un valor)
let nulo = null; // Nulo (intencionalmente vacío)

// Objetos
let objeto = {
    clave: 'valor',
    numero: 42,
    booleano: true,
    funcion: function() {
        return 'Hola desde una función';
    }
};

// Arreglos (Arrays)
let arreglo = [1, 2, 3, 'cuatro', true, null]; // Arreglo con diferentes tipos de datos

// Funciones
function funcionEjemplo(parametro) {
    return `El parámetro es: ${parametro}`;
}

// Símbolos (ES6)
let simbolo = Symbol('descripcion'); // Símbolo único

// Mapas (ES6)
let mapa = new Map();
mapa.set('clave1', 'valor1');
mapa.set('clave2', 'valor2');
mapa.set('clave3', 'valor3');   

// Conjuntos (Sets) (ES6)
let conjunto = new Set();
conjunto.add(1);
conjunto.add(2);
conjunto.add(3);

// Imprimir los tipos de datos
console.log('Número Entero:', numeroEntero);
console.log('Número Decimal:', numeroDecimal);
console.log('Número Negativo:', numeroNegativo);
console.log('Número Grande:', numeroGrande);
console.log('Número Hexadecimal:', numeroHexadecimal);
console.log('Número Binario:', numeroBinario);
console.log('Número Octal:', numeroOctal);
console.log('Número NaN:', numeroNaN);
console.log('Número Infinity:', numeroInfinity);
console.log('Número Negativo Infinity:', numeroNegativoInfinity);
console.log('Número BigInt:', numeroBigInt);
console.log('Número Decimal BigInt:', numeroDecimalBigInt);
console.log('Cadena Simple:', cadenaSimple);
console.log('Cadena Doble:', cadenaDoble);
console.log('Cadena Template:', cadenaTemplate);
console.log('Cadena Multilinea:', cadenaMultilinea);
console.log('Booleano Verdadero:', booleanoVerdadero);
console.log('Booleano Falso:', booleanoFalso);
console.log('Indefinido:', indefinido);
console.log('Nulo:', nulo);
console.log('Objeto:', objeto);
console.log('Arreglo:', arreglo);
console.log('Función Ejemplo:', funcionEjemplo('test'));
console.log('Símbolo:', simbolo);
console.log('Mapa:', mapa);
console.log('Conjunto:', conjunto);
// Fin de la definición de tipos de datos
