function mostrar()
{

	var contador=0;
	var suma=0;
  var numero;
  var promedio
     while(contador<5){
       contador ++;
       numero =prompt("introuce un numero")
       numero =parseInt(numero);
       suma+=numero;
       while(csNaN (numero)){
         numero=prompt("otra ves")
         numero =parseInt(numero);
       }
     }
     promedio=suma /contador;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
