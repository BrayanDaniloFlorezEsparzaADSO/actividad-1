addEventListener(`DOMContentLoaded`,()=>{
    // # DEFINIR VARIABLES NUEMRIAS
    // # DATOS DE ENTRADA
    // ## OPERACIONES BASICAS:
    
    // let mets=Number(prompt(`INGRESE EL VALOR`,2))
    // let segs=Number(prompt(`INGRESE EL VALOR DE LOS SEGUNDOS:`,60))
    // let tiempo=Number(prompt`INGRESE EL VALOR DEL TIEMPO`,5)
    let mets=Number(2*1000)
    let segs=Number(60*5)
    let tiempo=Number(5)
    // #PROCESO U OPERACIONES
    let ms=mets/segs
    let v=mets/tiempo
    // #salida o entrada de resultados
    console.log(`metros en segundos ${ms}`);
    console.log(`velocidad ${v}`);
})