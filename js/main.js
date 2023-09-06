function presionar() {
    alert('presionaste este boton')
}

function sumar() {
    let numSuma1 = document.getElementById("numSuma1").value;
    let numSuma2 = document.getElementById("numSuma2").value;
    let resultadoSuma = parseInt(numSuma1) + parseInt(numSuma2);
    document.getElementById("resultadoSuma").innerText = resultadoSuma;
}


    function resta() {
    let numResta1 = document.getElementById("numResta1").value;
    let numResta2 = document.getElementById("numResta2").value;
    let resultadoResta = parseInt(numResta1) - parseInt(numResta2);
    document.getElementById("resultadoResta").innerText = resultadoResta;
}