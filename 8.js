addEventListener(`DOMContentLoaded`,()=>{
    // # DEFINIR VARIABLES NUEMRIAS
    // # DATOS DE ENTRADA
    // ## OPERACIONES BASICAS: */ **
    let numA=Number (prompt(`ingrese el numero`,10))
    let numB=Number (prompt(`ingrese el numero`,12))
    let numC=Number (prompt(`ingrese el numero`,15) )
    let num1=Number (prompt(`ingrese el numero`,2))
    let num2=Number (prompt(`ingrese el numero`,7))
    // #PROCESOS U OPERACIONES
    let op=(numA+num1*numC)/(numB+num2-numA)+num2*numB
    
    // #salida o entrada de resultado
    console.log(`HAGA LA SIGUIENTE EXPRECION:${op}`);
    
})