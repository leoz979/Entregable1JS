//Leonardo Hernandez Paez
function campeonesMundiales(anio){
   let pais
   switch (anio) {
    case 1930:
        pais = "URUGUAY"
        break
    case 1934:
        pais = "ITALIA"
        break
    case 1938:
        pais = "ITALIA"
        break
    case 1950:
        pais = "URUGUAY"
        break
    case 1954:
        pais = "ALEMANIA"
        break
    case 1958:
        pais = "BRASIL"
        break       
    case 1962:
        pais = "BRASIL"
        break    
    case 1966:
        pais = "INGLATERRA"
        break
    case 1970:
        pais = "BRASIL"
        break
    case 1974:
        pais = "ALEMANIA"
        break
    case 1978:
        pais = "ARGENTINA"
        break
    case 1982:
        pais = "ITALIA"
        break
    case 1986:
        pais = "ARGENTINA"
        break
    case 1990:
        pais = "ALEMANIA"
        break
    case 1994:
        pais = "BRASIL"
        break
    case 1998:
        pais = "FRANCIA"
        break
    case 2002:
        pais = "BRASIL"
        break
    case 2006:
        pais = "ITALIA"
        break
    case 2010:
        pais = "ESPANA"
        break
    case 2014:
        pais = "ALEMANIA"
        break
    case 2018:
        pais = "FRANCIA"
        break
    case 2022:
        pais = "ARGENTINA"
        break                                                            
    default:
        pais = "ninguno, en ese año no hubo campeon"
        break
   }
   return pais
}
let continuar = true
do{
    let opcIngresada = Number(prompt("CAMPEONES MUNDIALES DE LA FIFA \n  ingrese una opcion \n 1 Campeon del año \n 2 Cuantas veces fue campeon \n 3 Salir"))
    
    switch(opcIngresada){
        case 1:
            let anioIngresado = Number(prompt("Ingrese el año que desea conocer el campeon"))
            if (!isNaN(anioIngresado)){
                alert( anioIngresado + " campeon " + campeonesMundiales(anioIngresado))
            }
            else{
                alert("Año incorrecto")
            }
            break
        case 2:        
            let paisIngresado = prompt("Ingrese el nombre del pais que quiere saber cuantas veces ha sido campeon").toUpperCase()
            let numCampeonatos = 0
            for(let i = 1930; i <= 2022; i = i + 4){
                let paisConsultado = campeonesMundiales(i)
                if(paisConsultado == paisIngresado){
                    numCampeonatos++
                }
            }
            if(numCampeonatos == 1){
                alert(paisIngresado + " ha sido " + numCampeonatos + " vez campeon mundial de la FIFA")
            }
            else if(numCampeonatos != 0){
                alert(paisIngresado + " ha sido " + numCampeonatos + " veces campeon mundial de la FIFA")
            }
            else{
                alert(paisIngresado + " no ha sido  campeon mundial de la FIFA")
            }
            break
        case 3:
            continuar = false
            break
        default:
            alert("Opcion ingresada incorrecta")
            break
    }

}while(continuar)
alert("Fin, gracias!!!")