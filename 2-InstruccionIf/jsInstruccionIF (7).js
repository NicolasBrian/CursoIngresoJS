function mostrar()
{
//tomo la edad  
    var edad=document.getElementById("edad").value;
    var estado =document.getElementById("estadoCivil").value;
    if(edad<18 && estado !="soltero"){
        alert("ses muy pequño par ano ser soltero")
    }
	


}//FIN DE LA FUNCIÓN