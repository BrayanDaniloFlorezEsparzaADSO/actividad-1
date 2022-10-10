addEventListener(`DOMContentLoaded`,()=>{
  // # DEFINIR VARIABLES NUEMRIAS
  // # DATOS DE ENTRADA
  // ## OPERACIONES BASICAS: + /*
   
  let d=Number(prompt(`coloque el valor de la velocidad:`))
  let t=Number(prompt(`coloque las horas :`))
  // #PROCESOS U OPERACIONES
  let vxm=((d*1000)/(t*3600))
  let kxh=d
  // #salida o entrada de resultado
  console.log(`los metros por segundos:${vxm}`);
  console.log(`los kilometros por hora:${kxh}`);
})