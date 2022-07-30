
//separador=""


//i=0
//while (i < 10) {
    
 //   separador=separador+"="
 //   i++
 // }

// Importar variables.js

import { paises,npaises,ngrupos,tgrupo} from './variables.js'
//console.log(separador)

console.log("========================================")
console.log("===COMIENZAN LAS FASES ELIMINATORIOAS===")
console.log("========================================")
console.log(" ")
console.log(" ")


let tpaises = [...paises]
//let seleccionado=""




function seleccionar(equipos){
    let seleccionado1 = equipos[Math.floor(Math.random() * equipos.length)];
    //console.log(seleccionado1)
    
   
    equipos=equipos.filter(function(value, index, arr){ 
        return value != seleccionado1;
    });
    //console.log(seleccionado1)
//return {equipos: equipos,seleccionado1,seleccionado1}
return [seleccionado1, equipos]

}

//const {tpaises2,seleccionado} = seleccionar(tpaises)

//let [seleccionado,tpaises] = seleccionar([...paises])

//console.log(tpaises)
//console.log(seleccionado)


// Seleccionar Equipos

var Grupo_A=[]
var Grupo_B=[]
var Grupo_C=[]
var Grupo_D=[]

let seleccionado=""
let i=1
let temp={}

function hacerSeleccion(){
    temp = seleccionar([...tpaises])
    //console.log(temp)
    seleccionado=temp[0]
    tpaises=[...temp[1]]
return seleccionado
}

while (i <=2 ) {


    Grupo_A.push(hacerSeleccion())
    Grupo_B.push(hacerSeleccion())
    Grupo_C.push(hacerSeleccion())
    Grupo_D.push(hacerSeleccion())
   /*
    [seleccionado,tpaises] = seleccionar([...tpaises])
    Grupo_B.push(seleccionado)
    [seleccionado,tpaises] = seleccionar([...tpaises])
    Grupo_C.push(seleccionado)
    let [seleccionado,tpaises] = seleccionar([...tpaises])
    Grupo_D.push(seleccionado)
*/
  i++
  }


console.log("Equipos que porticiparan en los Playoffs")
console.log(" ")
console.log(" ")

console.log("Grupo_A " , Grupo_A)
console.log("Grupo_B " ,Grupo_B)
console.log("Grupo_C " ,Grupo_C)
console.log("Grupo_D " ,Grupo_D)

console.log(" ")

let seguir =1
while (seguir===1){
let goles=Math.floor(Math.random() * 10) + 1
let resultado1=Math.floor(Math.random() * goles)
let resultado2=goles-resultado1
if (resultado1 != resulrado2){
    seguir=0
}
}
console.log("Resultado1 ", resultado1)
console.log("Resultado2 ", resultado2)



