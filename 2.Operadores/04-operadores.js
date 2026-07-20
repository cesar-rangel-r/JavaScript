//operadores

//operadores Aritmeticos 
console.log(8 + 10) // suma

let a = 7
let b = 7
console.log(a + b)
console.log(a - b)
console.log(a / b)
console.log(a * b)


console.log(a % b) //modulo o residuo de la division 
console.log(a ** b) //exponente o potenciacion

a++ // incremento
console.log(a)

b-- //decremento 
console.log(b)

//opereandores de asignacion  

let myvarible = 2
console.log(myvarible)

myvarible += 4
console.log(myvarible)
myvarible -= 4
console.log(myvarible)
myvarible /= 4
console.log(myvarible)
myvarible %= 4
console.log(myvarible)
myvarible *= 4
console.log(myvarible)
myvarible **= 4
console.log(myvarible)


//operadores de comparacion 

console.log(a > b)
console.log(a< b)
console.log(4<=4)
console.log(7>=7)
console.log(a<=3)
console.log(a==8) //igualdad por valor
console.log(a=="8") //igualdad por valor
console.log (a==a)
console.log(a===a)// igualdad por identidad (por tipo y valor)
console.log(a===8)
console.log(a=="8") //diferencia ya que uno es number y el otro es tipo string

console.log(a != 8)
console.log(a !== "8")

console.log(0 == false)
console.log(1 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == "hola")

console.log(0 === "")

//console.log(undefield === null)
//console.log(undefield == null)


//truthy values (valores verdaderos )
//todos lo numeros positivos  y negativos  menos l cero
//todas las cadenas de texto menos las vacias 
//el boolean true

//falsy values (valores falsos )
//0
//0n
// null
//undefined
//NAN
//el bolean false
//cadena de  texto vacias 


//operadores logicos 

// and (&&) 
// si almenos una no cumple con la cadena sera falso
console.log(a>b && b >a)
console.log(5 < 13 && 5 <20)
console.log(20<30 && 80<20)
console.log(20<30 && 80<20&& 54<20)

// or (||)
// si almenos una cumple con la cadena sera verdadero
console.log(a>b || b >a)
console.log(5 < 13 || 5 <20)
console.log(20<30 || 80<20)
console.log(20<30 || 80<20 || 54<20)


console.log(20<30 && 80<20 || 54<20)
console.log(20<30 && 80<20 || 54>20)

//not (!)

console.log(!(55< 13 && 55 <20))
console.log(!(5 > 13 || 5 > 20))
console.log(!true)
console.log(!false)

//operadores ternarios 
const estalloviendo=false
estalloviendo ? console.log ("esta lloviendo"): console.log("esta haciendo sol")

