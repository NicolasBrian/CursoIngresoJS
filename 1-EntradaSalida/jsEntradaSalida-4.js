/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var alerta = prompt("algun dato");
	document.getElementById("elNombre").value = alerta;


}