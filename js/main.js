
//Se ingresa la actividad a travez de un prompt.
let actividad = prompt("Ingrese una actividad");
//Se ingresa un horario a travez de un prompt.
let horarioActividad = parseInt(prompt("Ingrese el horario de la actividad"));

//Condicional que evalua si no se lleno un campo y en caso de que no, lo solicita
if(actividad && horarioActividad != ""){
    //Horario disponible.
     let horarioDisponible = 18;
    //Condicional que evalua si se ingreso el horario correcto, en casi de que si se muestra la actividad guardada con su horario.
    if(horarioActividad !== horarioDisponible){
    alert("Este horario ya esta ocupado, ingrese otro");
    } else {
    alert(`Usted realizara ${actividad} a las ${horarioActividad} hs`);
    }
} else {
    alert("Debe ingresar algo");
}