addEventListener(`DOMContentLoaded`,()=>{
    // # DEFINIR VARIABLES NUEMRIAS
    // # DATOS DE ENTRADA
    // ## OPERACIONES BASICAS: + /*
    let nombre=(prompt(`ingreese su nombre:`))
    let hrs=Number(prompt(`ingrese el numero de horas que trabajo:`))
    let pxh=15300
    // #PROCESOS U OPERACIONES
    let res=(hrs*pxh)
    // #salida o entrada de resultado
    console.log(`las horas de trabajo son :${res}`);
})