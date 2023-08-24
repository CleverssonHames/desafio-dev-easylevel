salarios = [1500, 2300, 5000, 8000]
salarios_ajustados = []

const calcula_reajuste = (salario, reajuste) => {
    return (salario * reajuste) + salario
}
    

const reajuste = (salario) => {

    salario_reajutado = 0
    percentua_reajuste = 0

    if (salario >= 0 && salario <= 1999.99) {
        percentua_reajuste = 0.20
    }  else if (salario >= 2000 && salario <= 3999.99) {
        percentua_reajuste = 0.15
    } else if (salario >= 4000 && salario <= 6999.99) {
        percentua_reajuste = 0.10
    } else if (salario >= 7000) {
        percentua_reajuste = 0.5
    } else {
        percentua_reajuste = 0
    }
    
    salario_reajutado = calcula_reajuste(salario, percentua_reajuste)

    return salario_reajutado
}

const ajustar = () => {
    salarios.map((salario) => 
        salarios_ajustados.push(reajuste(salario))
    )
}

ajustar()

console.log(salarios_ajustados)

// visualizar na página
let elUl = document.getElementById("demo")
let elUl2 = document.getElementById("demo2")


salarios.map((salario) => {
    let el = document.createElement("li")
    el.innerHTML = salario
    elUl.append(el)
})

salarios_ajustados.map((salario) => {
    let el = document.createElement("li")
    el.innerHTML = salario
    elUl2.append(el)
})



