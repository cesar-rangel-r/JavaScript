//loops o bucles

//for repite cuantas veces le digas 

for(let i = 0;i<5 ; i++){
    console.log("HOLA")

}

const numbers = [1,2,3,4,5]

for (let i = 0 ; i < numbers.length ; i++) {
    console.log(`ELEMENTOS: ${numbers[i]}`)
}

// while apenas cumpla la funcion se detiene
let i = 5
while (i < 5) {
    console.log( "hola")
    i++ 
}
//bucle infinito
//while (true)

//do while
i = 0
do {
    console.log("hola")
    i++
} while(i < 5)

// for of recorrer valores  como bases de datos

myArray=[1,2,3,4]
mySet = new Set (["cesar","rangel","junior",20,true])
mymap= new Map ([

    ["name","cesar"],
    ["email","cesrarangel.r"], 
    ["age",20]
])

mystring = "hola ,JavaScrip"

for (let valor of myArray){
    console.log(valor)
}
for (let valor of mySet){
    console.log(valor)
}
for (let valor of mymap){
    console.log(valor)
}
for( let valor of mystring){
    console.log(valor)
}

//buenas practicas
//break continue

for(let i = 0 ; i < 10 ; i++){
    if (i == 5){
        continue
    }else if (i == 6){
        break
    }
    console.log("HOLA")

}
