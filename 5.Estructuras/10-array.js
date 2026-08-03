// array

//declaracion

let myArray=[]
let variable=new Array()

console.log(myArray)
console.log(variable)

myArray=[3]
variable=new Array(3)

console.log(myArray)
console.log(variable)

//inicializacion 

myArray=[1,2,3,4]
variable=new Array(1,2,3,4)

console.log(myArray)
console.log(variable)

myArray=["cesar","rangel","junior",20,true]
variable=new Array("cesar","rangel","junior",20,true)

console.log(myArray)
console.log(variable)


variable=new Array(3)
variable[0]="cesar"
variable[1]="rangel"
variable[2]="junior"

console.log(variable)

myArray=[]
myArray[0]="cesar"
myArray[1]="rangel"
myArray[2]="rios"
console.log(myArray)

//metodos comunes
myArray=[]

//push y pop

myArray.push("cesar")
myArray.push("rangel")
myArray.push("crack")
myArray.push("20")

console.log(myArray)

//pop
console.log(myArray.pop())//elimina el ultimo y lo devuelve
myArray.pop()
console.log(myArray)

//shift y unshift.

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("crack","colombia")
console.log(myArray)


// leght medida

console.log(myArray.length)

//clear
myArray=[]
myArray.length=0 // alternativa
console.log(myArray)

//slice

myArray.push("cesar","rangel","junior",20,true)
let nuwarray=myArray.slice(1,2)
console.log(myArray)
console.log(nuwarray)

//splice

myArray.splice(1,3)// el primer numero dice ehn que pocision nos vamos a ubicar,el segundo numero nos dice cuantos elemetos queremos elimirnar 
console.log(myArray)

myArray=["cesar","rangel","junior",20,true]
myArray.splice(1,2,"nueva entrada")
console.log(myArray)