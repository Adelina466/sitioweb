function muestraHabito(){
	const numeroHabit = parseInt(document.getElementById('numeroHabit').value);
	let nombreHabit;

	switch (numeroHabit) {
	  case 1:
	  nombreHabit = "Cierra el grifo al asearte o lavar utensilios";
	  break;
	   case 2:
	  nombreHabit = "Reduce el agua de la cisterna del inodoro";
	  break;
	   case 3:
	  nombreHabit = "Procura que en tu alimentación no haya productos procesados, pues requieren gran cantidad de agua para su elaboración.";
	  break;
	   case 4:
	nombreHabit = "Cuida las instalaciones de agua de tu casa";
	  break;
	  case 5:
	 nombreHabit = "Usa los electrodomésticos de manera eficiente";
	  break;
	   case 6:
	 nombreHabit = "No contamines el agua";
	  break;
	   case 7:
	 nombreHabit = "Recolecta agua de lluvia para regar o limpiar zonas exteriores.";
	  break;
	   case 8:
	 nombreHabit = "Reutiliza el agua con la que has limpiado las verduras para el riego de las plantas.";
	  break;
	   case 9:
	 nombreHabit = "Reduce, reutiliza y recicla para impedir que los océanos se llenen de plástico.";
	  break;
	   case 10:
	 nombreHabit = "No compres agua embotellada si no es necesario. Se invierten hasta 5 litros de agua en la elaboración de cada botella.";
	  break;
	   
	   
	   
	  
	  default:
	  nombreHabit = "Número no válido. Por favor , introduzca un número entre 1 y 10.";
	  break;


	}
	document.getElementById('result').textContent = nombreHabit;
}