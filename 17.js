addEventListener(`DOMContentLoaded`,()=>{
    // # DEFINIR VARIABLES NUEMRIAS
    // # DATOS DE ENTRADA
    // ## OPERACIONES BASICAS: + /*
    let prod=Number(prompt(`coloque el valor del producto:`))
    let iva=Number(prompt(`coloque el valor del iva:`))
    // #PROCESOS U OPERACIONES
    let vaiva=prod*iva
    let res=prod+vaiva
    // #salida o entrada de resultado
    console.log(`valor del producto con el iva:${res}`);("", res)
    console.log(`valor del iva:${vaiva}`);
})