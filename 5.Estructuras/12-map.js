// map

// declaracion

let mymap = new Map()

console.log(mymap)

//inicializacion

mymap= new Map ([

    ["name","cesar"],
    ["email","cesrarangel.r"], 
    ["age",20]
])
console.log(mymap)

// metos y propiedades

//set /agregar

mymap.set("alias","junior")
mymap.set("name","cersar Rangel")

console.log(mymap)

//get / encontar variable 

console.log(mymap.get("name"))
console.log(mymap.get("surname"))

//has /tener

console.log(mymap.has("surname"))
console.log(mymap.has("age"))

// delete / borrar

console.log(mymap.delete("email"))


//keys / llave

console.log(mymap.keys())
console.log(mymap.values())
console.log(mymap.entries())

// size

console.log(mymap.size)

//clear
mymap.clear()
console.log(mymap)

