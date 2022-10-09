addEventListener(`DOMContentLoaded`,()=>{
    let num1=Number(prompt(`ingrese el numero`))
    let num2=Number(prompt(`ingrese el numero`))
    let num3=Number(prompt(`ingrese el numero`))
    let suma=num1+num2+num3
    let resta=num1-num2-num3
    let multi=num1*num2*num3
    let div=num1/num2/num3

    console.log(`RESULTADO DE LA SUMA ES:${suma}`);
    console.log(`RESULTADO DE La RESTA ES:${resta}`);
    console.log(`RESULTADO DE LA MULTIPICACION ES:${multi}`);
    console.log(`RESULTADO DE LA DIVICIÓN ES:${div}`);
})