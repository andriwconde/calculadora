let h5resultado = document.getElementById('resultado')
let c = document.getElementById('c')


let sumaBtn = document.getElementById('suma')
sumaBtn.onclick = function(){
    let inputnumero1 = document.getElementById('numero1').value
    let inputnumero2 = document.getElementById('numero2').value
    
    let resultado1 = parseInt(inputnumero1) + parseInt(inputnumero2);
    h5resultado.innerHTML = resultado1
    
}

let restabtn = document.getElementById('resta')
restabtn.onclick = function(){
    let inputnumero1 = document.getElementById('numero1').value
    let inputnumero2 = document.getElementById('numero2').value
    
    let resultado1 = parseInt(inputnumero1) - parseInt(inputnumero2);
    h5resultado.innerHTML = resultado1
    
}


let multiplicacionbtn = document.getElementById('multiplicacion')
multiplicacionbtn.onclick = function(){
    let inputnumero1 = document.getElementById('numero1').value
    let inputnumero2 = document.getElementById('numero2').value
    
    let resultado1 = parseInt(inputnumero1) * parseInt(inputnumero2);
    h5resultado.innerHTML = resultado1
    
}


let divicionbtn = document.getElementById('divicion')
divicionbtn.onclick = function(){
    let inputnumero1 = document.getElementById('numero1').value
    let inputnumero2 = document.getElementById('numero2').value
    
    let resultado1 = parseInt(inputnumero1) / parseInt(inputnumero2);
    h5resultado.innerHTML = resultado1
    
}

c.onclick = function limpiar(){
    document.getElementById('numero1').value = ""
    document.getElementById('numero2').value = ""
    document.getElementById('resultado').innerHTML = ""

}
