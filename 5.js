addEventListener(`DOMContentLoaded`,()=>{
    //     # DEFINIR VARIABLES NUEMRIAS
    // # DATOS DE ENTRADA
    // ## OPERACIONES BASICAS: *, **
    let radio=Number(prompt(`ingrese el numero`))
    let long=Number(prompt(`ingrese el numero`))
    let area=Number(prompt(`ingrese el numero`))
    // #PROCESO U OPERACIONES
    let logcir=(long*area*radio) 
    let areacir=((area*radio)**2)
    // #salida o entrada de resultados
    console.log(`la longitud de la circunferencia es:${logcir}`);
    console.log(`EL AREA DE LA CIRCUNFERENCIA ES:${areacir}`);

})