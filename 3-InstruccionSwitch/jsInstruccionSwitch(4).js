function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño){
        case"Enero":
        case "Marzo":
        case "Mayo":
        case "julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert("si tiene 31 dias")
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "noviembre":
            alert("si tiene 30 dias")
            break;
        case "Febrero":
            alert("si tiene 29 dias")
            break;
    }



}//FIN DE LA FUNCIÓN