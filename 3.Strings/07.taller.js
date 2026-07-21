// 1. Concatena dos cadenas de texto.
let apellido= "rangel"
let nombre= "cesar "+"junior " + apellido +"!"

console.log(nombre + apellido)

// 2. Muestra la longitud de una cadena de texto.

console.log(nombre.length)

// 3. Muestra el primer y ultimo carÃ¡cter de un string.

console.log(nombre[0])
console.log(nombre[4])

// 4. Convierte a mayÃºsculas y minÃºsculas un string.

console.log(nombre.toUpperCase())
console.log(apellido.toLowerCase())

// 5. Crea una cadena de texto en varias lÃ­neas.

let raza = `serus
 rangel
  vbgkjiu`
console.log(raza)

// 6. Interpola el valor de una variable en un string.

console.log(`yo soy ${nombre}. `)

// 7. Reemplaza todos los espacios en blanco de un string por guiones.

let sts = "carro "
console.log(sts.replace("","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta.

console.log(nombre.includes("cesar"))

// 9. Comprueba si dos strings son iguales.

console.log(nombre.localeCompare(sts))

// 10. Comprueba si dos strings tienen la misma longitud.

console.log(nombre.length===sts.length)