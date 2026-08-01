//if,else
//is es si
let age=18

if (age == 18){
    console.log("la persona esta joven")
}

//else(si no)

if(age != 18){
    console.log("error")
} 
else{
    console.log("numero correcto")
}
 //else if (si no,si)

 if(age != 18){
    console.log("digite el numero otra vez")
}else if (age <18){
    console.log("eres menor de edad")
}else{
    console.log("eres mayor de edad")
}

//operador ternario si y no 

const mensaje = age == 37? "la edad es 37":"la edad no es 37"
console.log(mensaje)

//switch

let day = 5
let dayname 

switch(day){// revisar la misma variable
    case 0:
        dayname = "lunes"
        break
    case 1:
        dayname = "martes"
        break
    case 2:
        dayname= "miercoles"
        break
    case 3 :
        dayname= "jueves"
        break
    case 4:
        dayname ="viernes"
        break
    case 5:
        dayname ="sabado"
        break
    case 6 :
        dayname= "domingo"
        break
    default : 
        dayname= "dia no encontrado"
}
console.log(dayname)