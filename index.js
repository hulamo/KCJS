
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

/// JUEGOS CUARTOS DE FINAL

console.log("Empiezan Juegos Cuartos de Final")
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
//let Semi_3=[]
jugador1=Grupo_C[0]
jugador2=Grupo_D[1]
resultados=match()
resultado1=resultados[0]
resultado2=resultados[1]
if (resultado1>resultado2){
    ganador=jugador1
Semi_1.push(jugador1)
} else {
    ganador=jugador2
    Semi_1.push(jugador2)}
DesplegarJuego(jugador1,jugador2,resultado1,resultado2,ganador)


//Juego 4
//let Semi_4=[]
jugador1=Grupo_C[1]
jugador2=Grupo_D[0]
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

/// JUEGOS SEMIFNALES

console.log ("")
console.log ("Empiezan Juegos Semifinales")
console.log ("============================")

//Juego 1
let Final=[]
let Terceroy4=[]
jugador1=Semi_1[0]
jugador2=Semi_1[1]
resultados=match()
resultado1=resultados[0]
resultado2=resultados[1]
if (resultado1>resultado2){
ganador=jugador1
    Final.push(jugador1)
    Terceroy4.push(jugador2)
} else {
    ganador=jugador2
    Final.push(jugador2)
    Terceroy4.push(jugador1)}
DesplegarJuego(jugador1,jugador2,resultado1,resultado2,ganador)

// Juego 2
jugador1=Semi_2[0]
jugador2=Semi_2[1]
resultados=match()
resultado1=resultados[0]
resultado2=resultados[1]
if (resultado1>resultado2){
ganador=jugador1
    Final.push(jugador1)
    Terceroy4.push(jugador2)
} else {
    ganador=jugador2
    Final.push(jugador2)
    Terceroy4.push(jugador1)}
DesplegarJuego(jugador1,jugador2,resultado1,resultado2,ganador)


/// Empieza Juego de Tercer y Cuarto Lugar

console.log ("")
console.log ("Empiezan Juego Tercer y Cuarto Lugar")
console.log ("============================")
//Juego 1
let tercero=""
let cuarto=""
jugador1=Terceroy4[0]
jugador2=Terceroy4[1]
resultados=match()
resultado1=resultados[0]
resultado2=resultados[1]
if (resultado1>resultado2){
tercero=jugador1
cuarto=jugador2


} else {
    tercero=jugador2
    cuarto=jugador1}
DesplegarJuego(jugador1,jugador2,resultado1,resultado2,ganador)
console.log("Cuarto Lugar del Campeonato => ",cuarto )
console.log("Tercer Lugar del Campeonato => ",tercero )

console.log ("")
console.log ("Empieza la gran Final")
console.log ("============================")
//Juego 1
let primer=""
let segundo=""
jugador1=Final[0]
jugador2=Final[1]
resultados=match()
resultado1=resultados[0]
resultado2=resultados[1]
if (resultado1>resultado2){
primer=jugador1
segundo=jugador2


} else {
    primer=jugador2
    segundo=jugador1}
DesplegarJuego(jugador1,jugador2,resultado1,resultado2,ganador)
console.log("Segundo Lugar del Campeonato => ",segundo )
console.log (" ")
console.log ("============================")
console.log("EL GRAN CAMPEÓN !!! => ",primer )
console.log ("============================")

//console.log("Resultado1 ", resultado1)
//console.log("Resultado2 ", resultado2)

