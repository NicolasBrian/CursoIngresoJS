/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var primernumero
var segundonumero
var resultado

function sumar()
{	
	primernumero = document.getElementById("numeroUno").value;
    segundonumero = document.getElementById("numeroDos").value; 
    resultado = parseInt (primeronumero) + parseInt (segundonumero);         
    alert (resultado);   
}

function restar()
{
	primernumero= document.getElementById("numeroUno").value;
    segundonumero= document.getElementById("numeroDos").value;
	
}

function multiplicar()
{ 
	primernumero= document.getElementById("numeroUno").value;
    segundonumero= document.getElementById("numeroDos").value;
}

function dividir()
{
	primernumero= document.getElementById("numeroUno").value;
    segundonumero= document.getElementById("numeroDos").value;
}

