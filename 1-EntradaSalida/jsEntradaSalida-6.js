/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var primero;
    var segundo;
    var resultado;
    primero = document.getElementById("numeroUno").value;
    segundo = document.getElementById("numeroDos").value;
    resultado = parseInt (primero)+ parseInt(segundo)
    alert (resultado);
}

