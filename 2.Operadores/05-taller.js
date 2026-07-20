// 1. Crea una variable para cada operaciÃ³n aritmÃ©tica.

let casa= 5
let apartamentos= 12

console.log(casa+apartamentos)
console.log(apartamentos-casa)
console.log(casa*apartamentos)
console.log(casa/apartamentos)
console.log(casa % apartamentos)
console.log(apartamentos**casa)


// 2. Crea una variable para cada tipo de operacion de asignacion, que haga uso de las variables utilizadas para las operaciones aritmeticas.

let plata=7
console.log(plata)
plata += 3
console.log(plata)
plata -= 3
console.log(plata)
plata*=3
console.log(plata)
plata/=3
console.log(plata)
plata **= 3
console.log(plata)
plata %= 3
console.log(plata)


// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparacion.

console.log(2==2)
console.log(3<4)
console.log(8===8)
console.log(10>2)
console.log(4!=2)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion.

console.log(2==="")
console.log(4!=4)
console.log(1<true)
console.log(-1>false)
console.log(5<=4)

// 5. Utiliza el operador logico and.

console.log(78<79 && 45<2)
// 6. Utiliza el operador logico or.
console.log(25>=20 || 20<15)

// 7. Combina ambos operadores logicos.
console.log(5<10&&20<7||40>20)

// 8. Añade alguna negacion.
console.log(!(78<79 && 45<2))

// 9. Utiliza el operador ternario.

let futbol= true
 futbol? console.log ("goolll"):console.log("offside")

// 10. Combina operadores aritmeticos, de comparacion y logicas.

let santafe =11
let nacional=17

console.log(santafe*2)

nacional+=2

console.log(nacional<santafe)

console.log(santafe<5&&nacional<santafe)

!(false || true)
