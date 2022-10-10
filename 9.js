addEventListener(`DOMContentLoaded`,()=>{
    // # DEFINIR VARIABLES NUEMRIAS
    // # DATOS DE ENTRADA
    // ## OPERACIONES BASICAS: */
    let num1=Number(prompt(`ingerse el numero`,2) )
    let num2=Number(prompt(`ingerse el numero`,3.14) )
    let numR=Number(prompt(`ingerse el numero`,13) )
    let numH=Number(prompt(`ingerse el numero`, 12))
    // #PROCESOS U OPERACIONES
    let A=(num1*(num2*numR**2))+((num1*num2*numR)*numH)
    let V=(num2*numR**2)*numH
    // #salida o entrada de resultado
    console.log(`calculo del volumen del ciliindro${A}`);
    console.log(`calculo de el area del cilindro${V}`);
    
})