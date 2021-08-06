/*
//Se ingresa la actividad atraves de un prompt.
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
*/

//Se ingresa la actividad atraves de un prompt.
let actividad = prompt("Ingrese atividad");
//Se ingresa el dia a travez de un prompt.
let diaActividad = prompt("Ingrese un dia");
//Se ingresa un horario a travez de un prompt.
let horarioActividad = parseInt(prompt("Ingrese el horario de la actividad"));

//Se abre un ciclo while para repetir un switch(el mismo muestra las actividades guardades en los dias y horarios correspondientes) y se repite todas las veces que sea necesario a menos que no se ingrese nada o se ingrese un esc.
while(diaActividad == "" || diaActividad != "esc"){

    switch(diaActividad) {
        case "lunes":
            alert(`Se añadio la ${actividad} el dia ${diaActividad} a las ${horarioActividad}`);
            break;
        case "martes":
            alert(`Se añadio la ${actividad} el dia ${diaActividad} a las ${horarioActividad}`);
            break; 
        case "miercoles":
            alert(`Se añadio la ${actividad} el dia ${diaActividad} a las ${horarioActividad}`);
            break; 
        case "jueves":
            alert(`Se añadio la ${actividad} el dia ${diaActividad} a las ${horarioActividad}`);
            break;
        case "viernes":
            alert(`Se añadio la ${actividad} el dia ${diaActividad} a las ${horarioActividad}`);
            break;    
        case "sabado":
            alert(`Se añadio la ${actividad} el dia ${diaActividad} a las ${horarioActividad}`);
            break;
        case "domingo":
            alert(`Se añadio la ${actividad} el dia ${diaActividad} a las ${horarioActividad}`);
            break;
        default:
            alert("Usted debe elegir un dia");
            break;  
    }
    diaActividad = prompt("Ingrese un dia");
}


