
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


let goles=0
let resultado1=0
let resultado2=0
let resultados=[]

function match(){
let seguir =1
    let rresultado1=0
let rresultado2=0
    while (seguir==1){

goles=Math.floor(Math.random() * 6) + 2
rresultado1=Math.floor(Math.random() * goles)
rresultado2=goles-resultado1

if (rresultado1 != rresultado2){
    seguir=0
}
}return [rresultado1,rresultado2]}



/// Juegos Cuartos de Final
let jugador1=""
let jugador2=""
let ganador=""

function DesplegarJuego(jugador1,jugador2,resultado1,resultado2,ganador){
    console.log("Juego --> ", jugador1,"[",resultado1,"] vs ",jugador2,"[",resultado2,"] ganador =>",ganador)
}

/// JUEGOS SEMIFINALES

console.log("Empiezan Juegos Semifinales")
console.log("===========================")

//Juego 1
let Semi_1=[]
jugador1=Grupo_A[0]
jugador2=Grupo_B[1]
resultados=match()
resultado1=resultados[0]
resultado2=resultados[1]
if (resultado1>resultado2){
ganador=jugador1
    Semi_1=[jugador1]
} else {
    ganador=jugador2
    Semi_1 = [jugador2]}
DesplegarJuego(jugador1,jugador2,resultado1,resultado2,ganador)

//Juego 2
let Semi_2=[]
jugador1=Grupo_A[1]
jugador2=Grupo_B[0]
resultados=match()
resultado1=resultados[0]
resultado2=resultados[1]
if (resultado1>resultado2){
ganador=jugador1
    Semi_2.push(jugador1)
} else {
    ganador=jugador2
    Semi_2.push(jugador2)}
DesplegarJuego(jugador1,jugador2,resultado1,resultado2,ganador)

//Juego 3
let Semi_3=[]
jugador1=Grupo_C[0]
jugador2=Grupo_D[1]
resultados=match()
resultado1=resultados[0]
resultado2=resultados[1]
if (resultado1>resultado2){
    ganador=jugador1
Semi_3=[jugador1]
} else {
    ganador=jugador2
    Semi_3 = [jugador2]}
DesplegarJuego(jugador1,jugador2,resultado1,resultado2,ganador)


//Juego 4
let Semi_4=[]
jugador1=Grupo_C[1]
jugador2=Grupo_D[0]
resultados=match()
resultado1=resultados[0]
resultado2=resultados[1]
if (resultado1>resultado2){
    ganador=jugador1
Semi_4.push(jugador1)
} else {
    ganador=jugador2
    Semi_4.push(jugador2)}
DesplegarJuego(jugador1,jugador2,resultado1,resultado2,ganador)



//console.log("Resultado1 ", resultado1)
//console.log("Resultado2 ", resultado2)

