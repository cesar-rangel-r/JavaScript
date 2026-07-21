// strings

// concatenacion
let name= "cesar"
let frase = "hola ,"+ name + "!"
console.log(frase)
console.log(typeof frase)

//longitud
console.log(frase.length)

//acceso a cara caracteres

console.log(frase[0])
console.log(frase[1])

//metodos comunes 

console.log(frase.toUpperCase())
console.log(frase.toLowerCase())
console.log(frase.indexOf("cesar"))
console.log(frase.indexOf("hola"))
console.log(frase.indexOf("!"))
console.log(frase.includes("cesar"))
console.log(frase.includes("hola"))
console.log(frase.includes("!"))
console.log(frase.replace("cesar" , "junior"))

// templet literals (plantillas lietrales )

let mensaje=`este es mi 
curso de JavaScript`

console.log(mensaje)

let correo="cesarjrre@gmail.com"

console.log(`hola ,${name} tu correo es ${correo}`)

//comparar 
//-1: Si el primer string va antes en el diccionario.
// 0: Si ambos strings son exactamente iguales.
// 1: Si el primer string va después en el diccionario

//comparar por longitud de string

console.log(correo.length===mensaje.length)
