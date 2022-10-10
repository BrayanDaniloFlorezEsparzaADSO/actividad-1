addEventListener(`DOMContentLoaded`,()=>{
  // # DEFINIR VARIABLES NUEMRIAS
  // # DATOS DE ENTRADA
  // ## OPERACIONES BASICAS: +
  let p=Number(prompt(`coloque aqui el valor del producto `))
  let d=Number (0.05)
  // #PROCESOS U OPERACIONES
  let res=Number(p*d)
  let des=Number(p-res)
  // #salida o entrada de resultado
  console.log(`el precio final mas el descuent es:${des}`);
})