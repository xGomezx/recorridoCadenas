/*  Dada la cadena “Somos SENA”:
c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “E”
d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una
variable contadora para contar el número de veces que se encuentra la letra “o”.   */

let cadena = "Somos SENA";

let si = false
for (let i = 0; i < cadena.length; i++) {
    
    if (cadena[i] == "E") {
        si = true
        break;
    }

    
}
if (si) {
    console.log("contiene E");
}else{
    console.log("No contiene E");
}

console.log("-----------------------------------------------------------");

let cont = 0;
for (let i = 0; i < cadena.length; i++) {
    
    if (cadena[i] == "o") {
        cont++
    }
    
}
console.log("la 'o' esta",cont, "veces");
