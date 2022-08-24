
/// Seleciona dentro de una lista un equipo y devuelve la lista menos el equipo

import { paises} from './variables.js'

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

/// Dentro de una lista selecciona un equipo para armar los grupos

function hacerSeleccion(){
    let tpaises = [...paises]
    let seleccionado=""
    //let i=1
    let temp={}
    temp = seleccionar([...tpaises])
    //console.log(temp)
    seleccionado=temp[0]
    tpaises=[...temp[1]]
return seleccionado
}

/// Esta es la funcion que enfrenta dos jugadores y da dos resultados

function match(){
    let seguir =1
    let goles=0
        let rresultado1=0
    let rresultado2=0
        while (seguir==1){
    
    goles=Math.floor(Math.random() * 6) + 2
    rresultado1=Math.floor(Math.random() * goles)
    rresultado2=goles-rresultado1
    if (rresultado1<0){
        rresultado1=0
    }

    if (rresultado2<0){
        rresultado2=0
    }


    if (rresultado1 != rresultado2){
        seguir=0
    }
    }return [rresultado1,rresultado2]}
    

export { seleccionar, hacerSeleccion, match };