
1// Crear programa que cuente los caracteres de una cade de texto

/* function contarCaracteres (texto = "") {
    (!texto)
    ? console.warn ("No ingresaste un texto")
    : console.info (texto.length);
} */

/* contarCaracteres();
contarCaracteres('Hola');
contarCaracteres('Estás contratado para barcelona 2024 en primera división de futbol profesional'); */

2//Progarama que tome una cadena de string y devuelve un array de textos separados por caracter


/* function separarCaracter (texto = "", separador = undefined){
    (!texto)
    ? console.warn("No ingresaste texto")
    : (separador === undefined)
    ? console.warn("El separador ingresado no es válido")
    : console.info (texto.split(separador)) 
} */
/* separarCaracter();
separarCaracter("Hola Sñr. Matias");
separarCaracter("Hola Sñr. Matias", " ");
separarCaracter("Estás contratado para barcelona 2024 en primera división de futbol profesional", " "); */

3//Programa que repita una funcion cantidad x de veces

function repetirTexto (texto = "", veces = undefined){
    if (!texto) return console.warn("No ingresaste texto")
    if (veces === undefined) return console.warn("No ingresaste una cantidad de veces para repetir el texto")
    if (veces === 0) return console.error ("La cantidad de veces no puede ser 0");
    if (Math.sign(veces === -1)) return console.error("El número de veces no puede ser negativo");
    
    for (let i = 1; i <= veces; i++ ){
        console.info(texto, i);
    }
}
repetirTexto();
repetirTexto("Felicidades Sñr. Arriagada ya está dentro de barcelona");
repetirTexto("Hola Mundo",-1);
repetirTexto("Felicidades Sñr. Arriagada ya está dentro de barcelona", 2);

4//Programa que invierta una cadena de textos

5//Programa que nos de un número aleatorio

6//Programa que convierta la temperatura de grados celcius a fahrenheit y vicerversa