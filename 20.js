addEventListener(`DOMContentLoaded`,()=>{
    // # DEFINIR VARIABLES NUEMRIAS
    // # DATOS DE ENTRADA
    // ## OPERACIONES BASICAS: + /*
    let suel=Number(prompt(` dijite el valor de su sueldo:`))
    let ven1=Number(prompt(`dijite el valor de su 1er venta:`))
    let ven2=Number(prompt(`dijite el valor de su 2da venta:`))
    let ven3=Number(prompt(`dijite el valor de su 3er venta:`))
    // #PROCESOS U OPERACIONES
    let comision=(ven1+ven2+ven3)*0.10
    // #salida o entrada de resultado
    console.log(`su sueldo es :${suel}`);
    console.log(`la comicion que recivio fue:${comision}`);
    console.log(`total del sueldo es:${suel+comision}`);
})