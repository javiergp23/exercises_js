document.getElementById('textoSaludo').innerHTML = "Hola este parrafo fue hackeado";

document.getElementById('entradaUno').value = "Click Aqui para ser hackeado";

document.getElementById('entradaUno').type = 'button';

document.getElementById('entradaUno').setAttribute("style", "background-color: yellow");
document.getElementById('entradaUno').setAttribute(onclick, "alert('Hola este parrafo fue hackeado')");