function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota
	nota=Math.floor(Math.random()*(11-1))+1;
		if(nota>8)
		{
			alert("exelente")
		}else
		{
			if(nota<4){
				alert("vamos, la proxima se puede")}
				else
				{
					alert("aprobo")
				}

		}
}//FIN DE LA FUNCIÓN