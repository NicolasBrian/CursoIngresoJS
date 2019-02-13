/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo =document.getElementById("Largo").value;
    var ancho =document.getElementById("Ancho").value;
    var cantidad = 2*(parseInt(largo)+parseInt(ancho));
    cantidad = cantidad*3;
    alert (cantidad);

}
function Circulo () 
{
    var radio=document.getElementById("Radio").value;
    var alambre =2* Math.PI*radio;
    alambre =alambre*3;
    alert (alambre);

}
function Materiales () 
{
    var largo =document.getElementById("Largo").value;
    var ancho =document.getElementById("Ancho").value;
    var metrocuadrado =parseInt(largo)*parseInt(ancho);
    var cemento = metrocuadrado*2;
    var cal = metrocuadrado *3;
    alert(cemento+" de cemnto "+ cal+"de cal");

}