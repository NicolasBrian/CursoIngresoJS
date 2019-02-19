function mostrar()
{

var sexo = prompt("ingrese f ó m .");
var contador=0;
  while(sexo!="F" && sexo !="m"){
    sexo=prompt("respuesta incorrecta");
      contador ++;
      contador =sexo;
  }

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
