

/////////EJ 5:  "ESC"  >>>>ESTE<<<<<

let entrada = prompt("Ingrese los datos que quiera y luego ESC para terminar.");
// //Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
     entrada = prompt("Ingresar otro dato o ESC para terminar");
 }

