//set 


//declaracion

let mySet = new Set()

console.log(mySet)

//inicializacion

mySet= new Set ("cesar","rangel","junior",20,true)

console.log(mySet)

mySet = new Set (["cesar","rangel","junior",20,true])
console.log(mySet)


// metodos comunes 

//add  y dellete
mySet.add("cesarrangel.r01")
console.log(mySet)

mySet.delete("cesar")
console.log(mySet)

console.log(mySet.delete("rangel"))//si existe el valor y se elimina aparera un true 
console.log(mySet.delete(4))// si no existe el valor, no habra que eliminar asi que por tal motivo tendra un false de respuesta
console.log(mySet)


// has

console.log(mySet.has("junior"))
console.log(mySet.has("rangel"))

//size

console.log(mySet.size)

//convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

//convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

//no admite duplicados  

mySet.add("cesarrangel.r01")
console.log(mySet)