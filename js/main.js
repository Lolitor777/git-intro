function presionar() {
    alert('presionaste este boton')
}

function resta() {
    let numUno = document.getElementById("numUno").value;
    let numDos = document.getElementById("numDos").value;
    let resultado = parseInt(numUno) - parseInt(numDos);
    document.getElementById("resultado").innerText = resultado;
    console.log(resultado);
}