// 1. Crea un array que almacene cinco animales.

let array = []
array =["vaca","perro","gato","pajaro","conejo"]

console.log(array)

// 2. AÃ±ade dos mÃ¡s. Uno al principio y otro al final.
array.push("leon")
array.push("tigre")

array=[]
array[5]="vaca"
array[1]="perro"
array[2]="gato"
array[3]="pajaro"
array[4]="conejo"
array[6]="leon"
array[0]="tigre"

console.log(array)
// 3. Elimina el que se encuentra en tercera posiciÃ³n.

array.splice(2,1)
console.log(array)


// 4. Crea un set que almacene cinco libros.

let set = new Set(["libro1","libro2","libro3","libro4","libro5"])
console.log(set)

// 5. AÃ±ade dos mÃ¡s. Uno de ellos repetido.

set.add("libro6","libro3")
console.log(set)

// 6. Elimina uno concreto a tu elecciÃ³n.

set.delete("libro1")
console.log(set)

// 7. Crea un mapa que asocie el nÃºmero del mes a su nombre.

let dia =new Map()
dia = new Map([
    [1,"enero"],
    [2,"febrero"],
    [3,"marzo"],
    [4,"abril"],
    [5,"mayo"]
])
console.log(dia)


// 8. Comprueba si el mes nÃºmero 5 existe en el map e imprime su valor.

console.log(dia.has(5))
console.log(dia.entries())

// 9. AÃ±ade al mapa una clave con un array que almacene los meses de verano.
dia.set("verano",["primavera,otroño,invierno"])
console.log(dia.get("verano"))
console.log(dia)

// 10. Crea un Array, transfÃ³rmalo a un Set y almacÃ©nalo en un Map.

let vars=[1,2,3]

let car=new Set(vars)

let mymaa=new Map()
mymaa.set("mazda","camioneta")

console.log(mymaa)
