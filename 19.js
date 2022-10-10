addEventListener(`DOMContentLoaded`,()=>{
    // # DEFINIR VARIABLES NUEMRIAS
    // # DATOS DE ENTRADA
    // ## OPERACIONES BASICAS: + /*
    let b=Number(prompt(`ingrese el valor de su nota del 1-5:`))
    let a=Number(prompt(`ingrese el valor de su nota del 1-5:`))
    let c=Number(prompt(`ingrese el valor de su nota del 1-5:`))
    let d=Number(prompt(`ingrese el valor de su nota del 1-5:`))
    // #PROCESOS U OPERACIONES
    let res=(a+b+c+d)/5
    
    // #salida o entrada de resultado
    console.log(`su promedio es :${res}`);
})