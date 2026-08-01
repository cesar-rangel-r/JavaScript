// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.

let nombre="cesar"
if (nombre==="cesar"){
    console.log("positivo")
}

// 2. Imprime por consola un mensaje si el usuario y contraseÃ±a concide con unos establecidos.

let contraseña="hola"
let usuario= 123
if (contraseña==="hola" && usuario===123){
    console.log("el susuario esta registrado")
}

// 3. Verifica si un nÃºmero es positivo, negativo o cero e imprime un mensaje.
let numero=8
let edad=18
let falta= edad - numero
if (numero >= 1){
    console.log("el numero es positivo")
}
else if(numero<0){
    console.log("el numero es negativo")
}
else
    console.log("el numero es cero")

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuÃ¡ntos aÃ±os le faltan..
if (numero>=18){
    console.log("puede votar")
}
else (numero<18)
    console.log(`usted no puede votar,ya que es menor de edad y le faltan  ${falta} años para ser mayor de edad`)


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .

let adulto=edad <18?"es menor":"es un adulto"
console.log(adulto)

// 6. Muestra en que estaciÃ³n del aÃ±o nos encontramos dependiendo del valor de una variable "mes".

let mes = "diciembre"
if (mes=== "marzo" || mes === "abril"|| mes ==="mayo"){
    console.log("primavera")
}
else if (mes=== "junio"|| mes ==="julio"|| mes ==="agosto"){
    console.log("verano")
}else if (mes=== "septiembre"||mes === "octubre"|| mes ==="noviembre"){
    console.log("otoño")
}
else if (mes === "diciembre"){
    console.log("invierno")
}
else
    console.log("erro,digite correctamente el mes")
    
// 7. Muestra el nÃºmero de dÃ­as que tiene un mes dependiendo de la variable del ejercicio anterior.
if (mes==="febrero" ){
    console.log("tiene 28 a 29 dias")
}else if (mes ==="abril","junio","septiembre","noviembre"){
    console.log("tiene 30 dias el mes")
}else{
    console.log("tiene 31 dias")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.
let idioma= "español"
let saludo

switch(idioma){
    case "español":
        saludo = "hola"
        break
    case "ingles":
        saludo = "hello"
        break
    case "portugues":
        saludo="olá"
        break
    default:
        saludo ="idioma no encontrado "
}
    console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6.
let etapa
switch(mes){
    case "mayo"||"marzo"||"abril":
        etapa = "primavera"
        break
    case "junio"||"julio"||"agosto":
        etapa = "verano"
        break
    case "septiembre"||"octubre"||"noviembre":
        etapa ="otoño"
        break
    case "diciembre":
        etapa= "invierno"
        break
    default:
        etapa= "mes no encontrado"
}
    console.log(etapa)

// 10. Usa un switch para hacer de nuevo el ejercicio 7.
let me ="hola"
let dias
switch(me){
    case "febrero":
        dias = "tiene 28 a 29 dias"
        break
    case "abril","junio","septimbre","noviembre":
        dias= "tiene 30 dias"
        break
    case "enero","marzo","mayo","julio","agosto","octubre","diciembre":
        dias= "tiene 31 dias "
        break
    default:
        dias="mes incorrecto"
}
    console.log(dias)